// Generates an ATS-friendly, single-column resume PDF using core (non-embedded) Helvetica.
// Run with: npm run resume:pdf
// Output: public/Vijaykumar_Peddamuthu_Lead_UX_Designer_Resume.pdf
import PDFDocument from 'pdfkit'
import { createWriteStream, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'public')
mkdirSync(outDir, { recursive: true })
// Filename includes name + title (not just "Resume.pdf") so it's self-identifying once a recruiter
// has it saved alongside dozens of other candidates' files, and so the title keyword surfaces again
// in filename-indexing ATS/search tools.
const outPath = join(outDir, 'Vijaykumar_Peddamuthu_Lead_UX_Designer_Resume.pdf')

const PAGE_MARGIN = 50
const COLOR = { text: '#1a1a1a', muted: '#4a4a4a', rule: '#b3b3b3' }
// Helvetica is one of pdfkit's 14 core (non-embedded) PDF fonts — metric-compatible with Arial, the two
// fonts every ATS guide (Jobscan, Indeed, TopResume) lists as the safest choice. Using a core font also
// sidesteps the broken-ToUnicode-map / missing-glyph parsing failures that embedded-font resume PDFs
// (e.g. exported from design tools) are prone to — the text is guaranteed to extract cleanly everywhere.
const FONT = { regular: 'Helvetica', bold: 'Helvetica-Bold', italic: 'Helvetica-Oblique' }
// Spacing scale, in "moveDown" units (fractions of the current line height) — kept generous on purpose.
const SPACE = {
  afterHeader: 1.1,
  beforeSection: 1.15,
  afterJobMeta: 0.5,
  betweenBullets: 0.38,
  betweenJobs: 0.75,
  afterParagraph: 0.42,
}

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: PAGE_MARGIN, bottom: PAGE_MARGIN, left: PAGE_MARGIN, right: PAGE_MARGIN },
  info: {
    Title: 'Vijaykumar Peddamuthu - Lead UX Designer Resume',
    Author: 'Vijaykumar Peddamuthu',
    Subject: 'Lead UX Designer Resume',
  },
})
doc.pipe(createWriteStream(outPath))

const contentWidth = doc.page.width - PAGE_MARGIN * 2

// ---------- helpers ----------
function sectionHeading(label) {
  doc.moveDown(SPACE.beforeSection)
  ensureSpace(50) // keep a heading attached to at least a line of its content
  doc
    .font(FONT.bold)
    .fontSize(12)
    .fillColor(COLOR.text)
    .text(label.toUpperCase(), { characterSpacing: 0.8 })
  const y = doc.y + 3
  doc
    .moveTo(PAGE_MARGIN, y)
    .lineTo(PAGE_MARGIN + contentWidth, y)
    .strokeColor(COLOR.rule)
    .lineWidth(0.75)
    .stroke()
  doc.y = y + 10
}

function ensureSpace(minHeight) {
  if (doc.y + minHeight > doc.page.height - PAGE_MARGIN) doc.addPage()
}

// Lets bullet/paragraph copy mark a key metric or phrase with **double asterisks** and have it render
// in Helvetica-Bold inline — the asterisks never reach the actual PDF text, so this stays ATS-safe.
function stripBoldMarkers(text) {
  return text.replace(/\*\*/g, '')
}

function richSegments(text) {
  const segments = []
  const re = /\*\*(.+?)\*\*/g
  let lastIndex = 0
  let match
  while ((match = re.exec(text))) {
    if (match.index > lastIndex) segments.push({ text: text.slice(lastIndex, match.index), bold: false })
    segments.push({ text: match[1], bold: true })
    lastIndex = re.lastIndex
  }
  if (lastIndex < text.length) segments.push({ text: text.slice(lastIndex), bold: false })
  return segments
}

// Renders text that may contain **bold** spans, starting a fresh line at (x, y) and wrapping at width.
function writeRich(text, x, y, { width, size = 10.5, color = COLOR.text, lineGap = 3 } = {}) {
  const segments = richSegments(text)
  doc.fontSize(size)
  segments.forEach((segment, i) => {
    const isLast = i === segments.length - 1
    doc.font(segment.bold ? FONT.bold : FONT.regular).fillColor(color)
    if (i === 0) doc.text(segment.text, x, y, { width, lineGap, continued: !isLast })
    else doc.text(segment.text, { continued: !isLast, lineGap })
  })
}

function jobHeader(title, org, dates, location) {
  ensureSpace(70) // keep the job title + meta line together with at least one bullet
  const startY = doc.y
  const dateColWidth = 130
  doc
    .font(FONT.bold)
    .fontSize(11)
    .fillColor(COLOR.text)
    .text(`${title} — ${org}`, PAGE_MARGIN, startY, { width: contentWidth - dateColWidth })
  doc
    .font(FONT.regular)
    .fontSize(10.5)
    .fillColor(COLOR.muted)
    .text(dates, PAGE_MARGIN + contentWidth - dateColWidth, startY, { width: dateColWidth, align: 'right' })
  doc.moveDown(0.15)
  doc.font(FONT.italic).fontSize(10.5).fillColor(COLOR.muted).text(location)
  doc.moveDown(SPACE.afterJobMeta)
}

function bullet(text) {
  const bulletIndent = 14
  const startX = PAGE_MARGIN + bulletIndent
  const textWidth = contentWidth - bulletIndent
  const height = doc.heightOfString(stripBoldMarkers(text), { width: textWidth, lineGap: 3 })
  ensureSpace(height) // never split a single bullet's text across a page break
  const y = doc.y
  doc.font(FONT.regular).fontSize(10.5).fillColor(COLOR.text)
  doc.text('•', PAGE_MARGIN, y, { width: bulletIndent })
  writeRich(text, startX, y, { width: textWidth })
  doc.moveDown(SPACE.betweenBullets)
}

// Bullet with a bold, keyword-scannable lead-in label (e.g. "AI-Driven Feature Design: ...").
// The trailing text may also contain **bold** spans to call out a key metric inline.
function bulletKV(label, text) {
  const bulletIndent = 14
  const startX = PAGE_MARGIN + bulletIndent
  const textWidth = contentWidth - bulletIndent
  const height = doc.heightOfString(`${label}: ${stripBoldMarkers(text)}`, { width: textWidth, lineGap: 3 }) + 4
  ensureSpace(height) // never split a single bullet's text across a page break
  const y = doc.y
  doc.font(FONT.regular).fontSize(10.5).fillColor(COLOR.text)
  doc.text('•', PAGE_MARGIN, y, { width: bulletIndent })
  doc.font(FONT.bold).fontSize(10.5).fillColor(COLOR.text)
  doc.text(`${label}: `, startX, y, { continued: true, width: textWidth, lineGap: 3 })
  const segments = richSegments(text)
  segments.forEach((segment, i) => {
    const isLast = i === segments.length - 1
    doc.font(segment.bold ? FONT.bold : FONT.regular).fillColor(COLOR.text)
    doc.text(segment.text, { continued: !isLast, lineGap: 3 })
  })
  doc.moveDown(SPACE.betweenBullets)
}

function paragraph(text, opts = {}) {
  doc.font(FONT.regular).fontSize(10.5).fillColor(COLOR.text)
  writeRich(text, doc.x, doc.y, { width: contentWidth, ...opts })
  doc.moveDown(SPACE.afterParagraph)
}

function labelValueLine(label, value) {
  doc.font(FONT.bold).fontSize(10.5).fillColor(COLOR.text).text(`${label}: `, { continued: true, lineGap: 4 })
  doc.font(FONT.regular).fontSize(10.5).fillColor(COLOR.muted).text(value, { lineGap: 4 })
  doc.moveDown(0.4)
}

// ---------- header ----------
// Name, then a clean single-line job title (matches ATS "current title" parsing), then a keyword-dense
// descriptor line, then contact details — in that reading order.
doc.font(FONT.bold).fontSize(23).fillColor(COLOR.text).text('Vijaykumar Peddamuthu')
doc.moveDown(0.2)
doc.font(FONT.bold).fontSize(12.5).fillColor(COLOR.text).text('Lead UX Designer')
doc.moveDown(0.12)
doc
  .font(FONT.regular)
  .fontSize(10.5)
  .fillColor(COLOR.muted)
  .text('AI-augmented design  |  Enterprise SaaS & cybersecurity (AppSec, SecOps, IAM)')
doc.moveDown(0.35)
doc
  .font(FONT.regular)
  .fontSize(10)
  .fillColor(COLOR.muted)
  .text('Bangalore, Karnataka, India  |  vijaykumarpdm@live.com  |  +91 97428 51797  |  ', {
    continued: true,
    width: contentWidth,
    lineGap: 3,
  })
doc
  .font(FONT.regular)
  .fontSize(10)
  .fillColor(COLOR.muted)
  .text('LinkedIn', {
    link: 'https://www.linkedin.com/in/vijaykumar-peddamuthu/',
    underline: true,
    continued: true,
    lineGap: 3,
  })
doc
  .font(FONT.regular)
  .fontSize(10)
  .fillColor(COLOR.muted)
  .text('  |  Portfolio', {
    link: 'https://vijay-peddamuthu.vercel.app/',
    underline: true,
    lineGap: 3,
  })
doc.moveDown(SPACE.afterHeader)
doc
  .moveTo(PAGE_MARGIN, doc.y)
  .lineTo(PAGE_MARGIN + contentWidth, doc.y)
  .strokeColor(COLOR.text)
  .lineWidth(1.25)
  .stroke()
doc.moveDown(0.5)

// ---------- summary ----------
sectionHeading('Summary')
paragraph(
  'Lead UX Designer with **12+ years** in enterprise SaaS, including **8+ years** inside OpenText\u2019s ' +
    '(heritage Micro Focus) cybersecurity business unit across Application Security (SAST, DAST, SCA, MAST), ' +
    'Security Operations, and Identity & Access Management. Designs both sides of the AI story: AI-driven ' +
    'features shipped inside the product and the AI-augmented workflow behind the work (see Highlights ' +
    'below), while carrying informal delivery leadership for the business unit — setting UX standards, ' +
    'mentoring designers, and aligning roadmaps across time zones.',
)

// ---------- highlights ----------
// A skimmable, metric-first list up top — recruiters spend seconds on a first pass, so the proof points
// that make this profile stand out (not just the job duties) need to be visible before any scrolling.
sectionHeading('Highlights')
bullet(
  '**+25% feature adoption** from AI-driven predictive analytics and personalization features designed ' +
    'into the product.',
)
bullet(
  '**-30% design delivery time** from an AI-augmented design workflow (Claude, ChatGPT, Figma Make) ' +
    'introduced across the team.',
)
bullet(
  '**-20% support tickets, +35% task completion** from redesigned Application Security workflows built ' +
    'around real user friction.',
)

// ---------- core skills ----------
sectionHeading('Skills')
labelValueLine(
  'UX design & strategy',
  'UX Strategy, Interaction & Visual Design, Design Systems & Component Libraries, Information Architecture, ' +
    'Wireframing & Prototyping, Journey Mapping, User Research & Usability Testing, Accessibility (WCAG 2.1)',
)
labelValueLine(
  'AI-augmented design workflow',
  'Claude, ChatGPT, Figma Make, Magic Patterns, Napkin AI, Perplexity, Midjourney',
)
labelValueLine('AI-driven product design', 'Predictive Analytics, Personalization, Human-AI Interaction Design')
labelValueLine(
  'Leadership & delivery',
  'Cross-Functional Collaboration, Stakeholder Management, Delivery Leadership, Design Ops, Mentoring & ' +
    'Team Development, Workshop Facilitation, Cross-Timezone Delivery Ownership',
)
labelValueLine(
  'Security & enterprise domain',
  'Application Security (AppSec), Security Operations (SecOps), Identity & Access Management (IAM), SAST, ' +
    'DAST, SCA, MAST, Zero Trust, DevSecOps, Enterprise SaaS',
)
labelValueLine(
  'Design tools',
  'Figma, FigJam, Adobe XD, Sketch, InVision, Axure RP, Miro, Photoshop, Illustrator, HTML5, CSS3, JavaScript',
)

// ---------- experience ----------
sectionHeading('Professional Experience')

jobHeader(
  'Lead UX Designer / UX Leader',
  'OpenText (Heritage Micro Focus), Cybersecurity Business Unit',
  'Sep 2018 - Present',
  'Bangalore, India',
)
bulletKV(
  'Product & portfolio ownership',
  'Own UX across three product groups in one business unit — Application Security (SAST, DAST, SCA, MAST), ' +
    'Security Operations, and Identity & Access Management — from research through shipped features.',
)
bulletKV(
  'AI-driven feature design',
  'Designed predictive-analytics and personalization features for the Security Operations product line, ' +
    'growing feature adoption **25%** after launch.',
)
bulletKV(
  'AI-augmented delivery',
  'Introduced an AI-augmented design workflow (Claude, ChatGPT, Figma Make, Magic Patterns) across the ' +
    'team, cutting design delivery time **30%**.',
)
bulletKV(
  'Application security UX',
  'Redesigned core Application Security workflows by targeting real user friction, reducing support ' +
    'tickets **20%** and increasing task completion **35%**.',
)
bulletKV(
  'Identity & Zero Trust UX',
  'Led UX strategy for Identity & Access Management, including Zero Trust-aligned flows, from early ' +
    'research through shipped features.',
)
bulletKV(
  'Design systems',
  'Built a design system and component library from scratch, adopted across AppSec, SecOps, and IAM ' +
    'teams, shortening the handoff time between finished design and working build.',
)
bulletKV(
  'Delivery leadership & mentoring',
  'Carried informal delivery-leadership responsibilities for the business unit for several years — ' +
    'setting design standards, coordinating across time zones, and mentoring designers through critique.',
)
bulletKV(
  'Career progression',
  'Senior UX Designer, Lead UX Designer, UX Leader \u2014 progressed based on scope and impact of work delivered.',
)

doc.moveDown(SPACE.betweenJobs)
jobHeader('UX Designer', 'WinWire Technologies India Pvt. Ltd', 'Mar 2014 - Aug 2018', 'Bangalore, India')
bulletKV(
  'B2B product design',
  'Delivered end-to-end design — discovery, wireframes, visual design, and user flows — for enterprise ' +
    'portal and intranet engagements, including work for clients such as Tesla, SanDisk, VISA, Brocade ' +
    'Communications, Lumileds, MemorialCare, and L’Oréal.',
)
bulletKV(
  'Front-end handoff',
  'Built static front-end pages (HTML, CSS, JavaScript) as part of design handoff, addressing accessibility ' +
    'considerations before development.',
)
bulletKV(
  'Global delivery model',
  'Worked within an onsite-offshore delivery model, turning requirements relayed by onsite coordinators ' +
    'into wireframes, visual designs, and dev-ready flows across multiple concurrent projects and deadlines.',
)
bulletKV(
  'Pre-sales support',
  'Contributed proof-of-concept designs used in pre-sales pitches, some of which converted into signed ' +
    'client engagements.',
)

// ---------- awards ----------
sectionHeading('Awards & Recognition')
paragraph(
  'UX Leadership Excellence  •  Design Innovation Award  •  Outstanding Contributor  •  Customer Impact Award  •  ' +
    'Mentorship Recognition  •  Spot Awards (multiple years)  •  Rising Star in UX Design',
)

// ---------- education ----------
sectionHeading('Education & Continuous Learning')
paragraph('Bachelor\u2019s Degree — Sunrise University, Alwar, India')
paragraph(
  'Ongoing coursework: Interaction Design Foundation (IDF) and Nielsen Norman Group (NN/g) — UX research and ' +
    'design; applied AI-assisted design tooling, including prompt engineering for UX ideation, generative ' +
    'design, and AI-assisted prototyping.',
)

doc.end()

doc.on('end', () => {
  console.log(`Resume PDF written to ${outPath}`)
})

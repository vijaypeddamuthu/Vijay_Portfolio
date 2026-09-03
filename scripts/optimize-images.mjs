// One-off image compression pass for oversized screenshots.
// sharp is not a saved dependency (kept out of package.json to avoid bloating installs);
// run `npm install --no-save sharp` first, then `node scripts/optimize-images.mjs`,
// then `npm uninstall sharp`. Add new oversized filenames to TARGETS as needed.
import sharp from 'sharp'
import { statSync } from 'node:fs'
import path from 'node:path'

const ASSETS_DIR = path.resolve(import.meta.dirname, '../src/assets')
const MAX_WIDTH = 2000
const QUALITY = 80

const TARGETS = [
  'Nautilus-Design-System.png',
  'Fod-DAST-configurations.jpg',
  'Fod-IA.jpg',
  'Fod-SAST-Configuration.jpg',
  'Taskflow.jpg',
  'WW-Sandisk.png',
  'Fod-Program-dashboard.jpg',
  'Fod-Application-Issues.jpg',
  'Remediation dashboard.jpg',
  'Fod-Risk-exposure-dashboard.jpg',
  'Fod-MyApplications.jpg',
  'nautilus-taskflow.png',
  'Nautilus-Current-UI.png',
]

for (const name of TARGETS) {
  const inputPath = path.join(ASSETS_DIR, name)
  const outputPath = path.join(ASSETS_DIR, name.replace(/\.(png|jpe?g)$/i, '.webp'))
  const before = statSync(inputPath).size
  await sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath)
  const after = statSync(outputPath).size
  console.log(
    `${name} -> ${path.basename(outputPath)}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`
  )
}

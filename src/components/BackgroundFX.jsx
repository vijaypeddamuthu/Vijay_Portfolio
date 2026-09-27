// Decorative backdrop: a drifting node graph (security/identity correlation graph)
// plus a slow scan sweep (nods to SAST/DAST scanning). Purely presentational.
const NODES = [
  [120, 140], [340, 80], [560, 180], [780, 90], [980, 160], [1120, 260],
  [200, 320], [460, 300], [700, 340], [900, 300],
  [80, 520], [300, 560], [540, 520], [760, 560], [1000, 540], [1150, 480],
  [200, 700], [620, 720], [950, 700],
]

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [0, 6], [1, 7], [2, 7], [3, 8], [4, 9], [5, 9],
  [6, 7], [7, 8], [8, 9],
  [6, 10], [7, 11], [8, 12], [9, 13], [9, 14], [14, 15],
  [10, 11], [11, 12], [12, 13], [13, 14],
  [11, 16], [12, 17], [13, 17], [14, 18],
  [16, 17], [17, 18],
]

export function BackgroundFX() {
  return (
    <div className="bgfx" aria-hidden="true">
      <svg
        className="bgfx__graph"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        {EDGES.map(([a, b], i) => {
          const [x1, y1] = NODES[a]
          const [x2, y2] = NODES[b]
          return (
            <line
              key={`${a}-${b}`}
              className="bgfx__edge"
              style={{ animationDelay: `${(i % 7) * -1.6}s` }}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
            />
          )
        })}
        {NODES.map(([x, y], i) => (
          <circle
            key={i}
            className="bgfx__node"
            style={{ animationDelay: `${(i % 6) * -0.9}s` }}
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 4.5 : 3}
          />
        ))}
      </svg>
      <div className="bgfx__scan" />
    </div>
  )
}

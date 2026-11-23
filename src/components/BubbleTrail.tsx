import './BubbleTrail.css'

const bubbles = [
  { id: 'socials', label: 'Socials', x: 14, y: 60 },
  { id: 'resume', label: 'Resume', x: 86, y: 260 },
  { id: 'projects', label: 'Projects', x: 14, y: 460 },
  { id: 'about', label: 'About me', x: 86, y: 660 },
]

type TrailDot = {
  x: number
  y: number
  size: number
}

function generateTrailDots(): TrailDot[] {
  const dots: TrailDot[] = []

  // Each section connects two main bubbles.
  for (let i = 0; i < bubbles.length - 1; i++) {
    const start = bubbles[i]
    const end = bubbles[i + 1]

    // Number of trailing bubbles between two titles.
    const dotCount = 28

    for (let j = 1; j < dotCount; j++) {
      const t = j / dotCount
      const u = 1 - t

      // Cubic Bézier control points.
      const p1 = {
        x: start.x,
        y: start.y + (end.y - start.y) * 0.7,
      }

      const p2 = {
        x: end.x,
        y: end.y - (end.y - start.y) * 0.7,
      }

      // Point on the Bézier curve.
      const x =
        u ** 3 * start.x +
        3 * u ** 2 * t * p1.x +
        3 * u * t ** 2 * p2.x +
        t ** 3 * end.x

      const y =
        u ** 3 * start.y +
        3 * u ** 2 * t * p1.y +
        3 * u * t ** 2 * p2.y +
        t ** 3 * end.y

      // Smaller at the ends, larger in the middle.
      const size =
        3 + 15 * Math.sin(Math.PI * t) ** 2

      dots.push({ x, y, size })
    }
  }

  return dots
}

const trailDots = generateTrailDots()

function BubbleTrail() {
  return (
    <section
      className="bubble-trail"
      aria-label="Explore my portfolio"
    >
      {trailDots.map((dot, index) => (
        <div
          key={index}
          className="trail-dot"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
        />
      ))}

      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="trail-item"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}px`,
          }}
        >
          <button className="main-bubble" type="button">
            {bubble.label}
          </button>
        </div>
      ))}
    </section>
  )
}

export default BubbleTrail

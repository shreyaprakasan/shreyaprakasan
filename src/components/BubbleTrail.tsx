
import './BubbleTrail.css'

const bubbles = [
  { id: 'socials', label: 'Socials', x: 22, y: 50 },
  { id: 'resume', label: 'Resume', x: 72, y: 190 },
  { id: 'projects', label: 'Projects', x: 28, y: 340 },
  { id: 'about', label: 'About me', x: 70, y: 490 },
]

function BubbleTrail() {
  return (
    <section className="bubble-trail" aria-label="Explore my portfolio">
      <svg
        className="trail-path"
        viewBox="0 0 100 560"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 22 0 C 22 90, 72 90, 72 190 S 28 270, 28 340 S 70 430, 70 490 L 70 560"
          fill="none"
          stroke="var(--border)"
          strokeWidth="0.6"
          strokeDasharray="2 2"
        />
      </svg>

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

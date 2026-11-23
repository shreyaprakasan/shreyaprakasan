import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import {
  FiAtSign,
  FiPhone,
  FiEye,
  FiDownload,
  FiCode,
} from 'react-icons/fi'
import TrailMenu from './TrailMenu'
import type { MenuOption } from './TrailMenu'
import './BubbleTrail.css'

const bubbles = [
  { id: 'socials', label: 'Socials', x: 14, y: 60 },
  { id: 'resume', label: 'Resume', x: 86, y: 260 },
  { id: 'projects', label: 'Projects', x: 14, y: 460 },
  { id: 'about', label: 'About me', x: 86, y: 660 },
]



const socialsOptions: MenuOption[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/shreya-prakasan/',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <FaGithub />,
    href: 'https://github.com/shreyaprakasan',
  },
  {
    id: 'email',
    label: 'Email',
    icon: <FiAtSign />,
    href: 'mailto:shreya.prakasan2002@gmail.com',
  },
  {
    id: 'phone',
    label: 'Phone',
    icon: <FiPhone />,
    href: 'tel:+917736415108',
  },
]


const resumeOptions: MenuOption[] = [
  { id: 'view', label: 'View résumé', icon: <FiEye /> },
  { id: 'download', label: 'Download résumé', icon: <FiDownload /> },
]

const projectOptions: MenuOption[] = [
  { id: 'project-1', label: 'Project 1', icon: <FiCode /> },
  { id: 'project-2', label: 'Project 2', icon: <FiCode /> },
  { id: 'project-3', label: 'Project 3', icon: <FiCode /> },
  { id: 'project-4', label: 'Project 4', icon: <FiCode /> },
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
        {bubble.id === 'socials' ? (
        <TrailMenu
            title="Socials"
            side="left"
            options={socialsOptions}
        />
        ) : bubble.id === 'resume' ? (
        <TrailMenu
            title="Resume"
            side="right"
            options={resumeOptions}
        />
        ) : bubble.id === 'projects' ? (
        <TrailMenu
            title="Projects"
            side="left"
            options={projectOptions}
        />
        ) : (
        <span className="main-bubble trail-menu-title">
            {bubble.label}
        </span>
        )}
        </div>
      ))}
    </section>
  )
}

export default BubbleTrail

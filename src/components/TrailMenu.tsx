import type { CSSProperties, ReactNode } from "react";

import "./TrailMenu.css";

export type MenuOption = {
  id: string;
  label: string;
  icon: ReactNode;
  href?: string;
};

type TrailMenuProps = {
  title: string;
  side: "left" | "right";
  options: MenuOption[];
};

function TrailMenu({ title, side, options }: TrailMenuProps) {
  return (
    <div className={`trail-menu trail-menu--${side}`}>
      <span className="main-bubble trail-menu-title">{title}</span>

      <div className="trail-menu-options">
        {options.map((option, index) => {
          const progress =
            options.length === 1 ? 0.5 : index / (options.length - 1);

          const arcConfig =
            side === "left"
              ? {
                  radius: 165,
                  startAngle: 195,
                  endAngle: 270,
                }
              : {
                  radius: 120,
                  startAngle: 285,
                  endAngle: 330,
                };

          const radius = arcConfig.radius;
          const startAngle = arcConfig.startAngle;
          const endAngle = arcConfig.endAngle;

          const angle = startAngle + (endAngle - startAngle) * progress;

          const radians = (angle * Math.PI) / 180;

          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;

          return (
            <a
              key={option.id}
              className={`trail-menu-option ${
                option.href ? "" : "is-placeholder"
              }`}
              style={
                {
                  "--x": `${x}px`,
                  "--y": `${y}px`,
                } as CSSProperties
              }
              href={option.href}
              target={
                option.href?.startsWith("http") || option.id === "view"
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              download={option.id === "download" ? true : undefined}
              aria-label={option.label}
              onClick={
                option.href ? undefined : (event) => event.preventDefault()
              }
            >
              {option.icon}
              <span className="trail-menu-tooltip">{option.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default TrailMenu;

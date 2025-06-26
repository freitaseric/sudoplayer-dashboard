import { ChevronDown } from 'lucide-react'

export function ThemeSwitcher() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-block">
        Tema <ChevronDown />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Padrão"
            value="default"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Corporativo"
            value="corporate"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retrô"
            value="retro"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Halloween"
            value="halloween"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Entardecer"
            value="sunset"
          />
        </li>
      </ul>
    </div>
  )
}

import { SettingsIcon } from 'lucide-react'
import { ThemeSwitcher } from './ThemeSwitcher'

export function AppSettings() {
  return (
    <details className="dropdown dropdown-top dropdown-end fixed bottom-3 right-3">
      <summary className="btn btn-circle">
        <SettingsIcon />
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </details>
  )
}

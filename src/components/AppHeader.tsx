import logo from '@/assets/logo.png'
import { ChevronDownIcon, ExternalLinkIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function AppHeaderDesktop() {
  return (
    <div className="navbar bg-base-100 shadow-sm hidden lg:block">
      <div className="navbar-start">
        <Link
          className="btn btn-ghost text-xl bg-gradient-to-r from-[#9e6bff] to-[#9fc1ff] bg-clip-text text-transparent"
          href="/"
        >
          <Image src={logo} alt="logo" height={54} />
          SudoPlayer
        </Link>
      </div>
      <div className="navbar-end">
        <div className="flex flex-row items-center gap-4">
          <Link
            className="uppercase font-semibold transition-opacity duration-300 hover:opacity-50"
            href="/"
          >
            Início
          </Link>
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="flex flex-row items-center gap-2 uppercase font-semibold"
            >
              Links <ChevronDownIcon className="size-4" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 p-2 shadow-sm"
            >
              <li>
                <Link
                  href="https://discord.gg/cjTq9hNhjq"
                  target="_blank"
                  className="flex flex-row justify-between"
                >
                  Comunidade no Discord <ExternalLinkIcon className="size-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/freitaseric/sudoplayer"
                  className="flex flex-row justify-between"
                  target="_blank"
                >
                  Github <ExternalLinkIcon className="size-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span className="divider divider-horizontal" />
        <div className="flex flex-row items-center gap-4">
          <Link
            className="btn btn-outline btn-accent"
            href="https://discord.com/oauth2/authorize?client_id=1381308570389315654"
            target="_blank"
          >
            Me Adicione
          </Link>
          <Link className="btn btn-accent" href="/login">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  )
}

export function AppHeaderMobile() {
  return (
    <div className="drawer block lg:hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <MenuIcon />
            </label>
          </div>
          <Link
            className="btn btn-ghost text-xl bg-gradient-to-r from-[#9e6bff] to-[#9fc1ff] bg-clip-text text-transparent"
            href="/"
          >
            <Image src={logo} alt="logo" height={54} />
            SudoPlayer
          </Link>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 min-h-full w-80 p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <Link
              className="uppercase font-semibold transition-opacity duration-300 hover:opacity-50"
              href="/"
            >
              Início
            </Link>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="flex flex-row items-center gap-2 uppercase font-semibold"
              >
                Links <ChevronDownIcon className="size-4" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 p-2 shadow-sm"
              >
                <li>
                  <Link
                    href="https://discord.gg/cjTq9hNhjq"
                    target="_blank"
                    className="flex flex-row justify-between"
                  >
                    Comunidade no Discord{' '}
                    <ExternalLinkIcon className="size-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/freitaseric/sudoplayer"
                    className="flex flex-row justify-between"
                    target="_blank"
                  >
                    Github <ExternalLinkIcon className="size-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Link
              className="btn btn-outline btn-accent"
              href="https://discord.com/oauth2/authorize?client_id=1381308570389315654"
              target="_blank"
            >
              Me Adicione
            </Link>
            <Link className="btn btn-accent" href="/login">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

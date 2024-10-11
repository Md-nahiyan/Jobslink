import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { BracesIcon } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/hiro-logo.png";
import ModeToggle from "../components/mode-toggle";
export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  const handleChangeOverLay = (e) => {
    if (e.target === e.currentTarget) {
      setShowLogin(false);
    }
  };

  return (
    <div className="w-full">
      <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <img src={logo} alt="logo" className="h-10" />
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Jobs
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Page
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <SignedOut>
                    <button
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm
                        font-medium text-white shadow dark:hover:bg-teal-500"
                      onClick={() => setShowLogin(true)}
                    >
                      Login
                    </button>
                  </SignedOut>
                </div>

                <SignedIn>
                  <UserButton>
                    <UserButton.MenuItems>
                      <UserButton.Action
                        label="My Account"
                        labelIcon={<BracesIcon />}
                      />
                    </UserButton.MenuItems>
                  </UserButton>
                </SignedIn>
                <ModeToggle />
                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {showLogin && (
        <div
          className="fixed flex inset-0 items-center justify-center bg-slate-800/80 z-50"
          onClick={handleChangeOverLay}
        >
          <SignIn />
        </div>
      )}
    </div>
  );
}

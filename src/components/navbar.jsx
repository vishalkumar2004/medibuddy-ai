"use client"
import { useApp } from "../context/app-context"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const { theme, setTheme, lang, setLang, user } = useApp()
  const location = useLocation()
  const routes = [
    { to: "/admin", label: lang === "en" ? "Admin" : "प्रशासक" },
    { to: "/hospital", label: lang === "en" ? "Hospital" : "अस्पताल" },
    { to: "/doctor", label: lang === "en" ? "Doctor" : "डॉक्टर" },
    { to: "/patient", label: lang === "en" ? "Patient" : "मरीज़" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b bg-card text-card-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-semibold text-primary">
          MediBuddy AI
        </Link>
        <nav className="hidden gap-4 md:flex">
          {routes.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className={`text-sm ${location.pathname.startsWith(r.to) ? "text-primary" : "text-muted-foreground"} hover:text-primary`}
            >
              {r.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            className="rounded-md bg-secondary px-3 py-1 text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <select
            aria-label="Language"
            className="rounded-md border bg-background px-2 py-1 text-sm"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </select>
          <div className="ml-2 text-sm text-muted-foreground">
            {user?.name} • {user?.role}
          </div>
        </div>
      </div>
    </header>
  )
}

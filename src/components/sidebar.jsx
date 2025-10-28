import { Link, useLocation } from "react-router-dom"

const links = [
  { to: "/admin", label: "Admin" },
  { to: "/hospital", label: "Hospital" },
  { to: "/doctor", label: "Doctor" },
  { to: "/patient", label: "Patient" },
  { to: "/donor", label: "Blood Donor" },
  { to: "/ambulance", label: "Ambulance" },
  { to: "/medicine-store", label: "Medicine" },
  { to: "/lab", label: "Lab" },
  { to: "/nursing", label: "Nursing" },
  { to: "/wellness", label: "Wellness" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" },
]

export default function Sidebar() {
  const location = useLocation()
  return (
    <aside className="sticky top-[56px] hidden h-[calc(100dvh-56px)] w-64 shrink-0 border-r bg-sidebar text-sidebar-foreground md:block">
      <nav className="flex flex-col gap-1 p-3">
        {links.map((l) => {
          const active = location.pathname === l.to
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

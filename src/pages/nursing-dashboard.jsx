import Card from "../components/card"

export default function NursingDashboard() {
  const jobs = [
    { id: "n1", role: "Home-care Aide", shift: "08:00-16:00", status: "Open" },
    { id: "n2", role: "Post-op Care", shift: "16:00-22:00", status: "Assigned" },
  ]
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Active Assignments" value={2} />
        <Card title="Completed" value={18} />
        <Card title="Skill Verifications" value={6} />
      </div>
      <Card title="Job Board">
        <ul className="divide-y text-sm">
          {jobs.map((j) => (
            <li key={j.id} className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium">{j.role}</div>
                <div className="text-muted-foreground">
                  {j.shift} • {j.status}
                </div>
              </div>
              <button className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground hover:bg-primary/90">
                Apply
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

import Card from "../components/card"

export default function WellnessDashboard() {
  const clients = [
    { id: "w1", name: "Neha", plan: "Weight Loss", progress: "70%" },
    { id: "w2", name: "Raj", plan: "Diabetes Control", progress: "45%" },
  ]
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Active Clients" value={14} />
        <Card title="Sessions This Week" value={9} />
        <Card title="Avg. Adherence" value="76%" />
      </div>
      <Card title="Clients">
        <ul className="divide-y text-sm">
          {clients.map((c) => (
            <li key={c.id} className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-muted-foreground">
                  {c.plan} • Progress {c.progress}
                </div>
              </div>
              <button className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground hover:bg-accent">
                Edit Plan
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

import Card from "../components/card"

export default function LabDashboard() {
  const bookings = [
    { id: "l1", patient: "Isha", test: "Blood CBC", status: "Sample collected" },
    { id: "l2", patient: "Rohit", test: "LFT", status: "Pending collection" },
  ]
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Bookings" value={12} />
        <Card title="Collections Today" value={7} />
        <Card title="Reports Uploaded" value={23} />
      </div>
      <Card title="Test Bookings">
        <ul className="divide-y text-sm">
          {bookings.map((b) => (
            <li key={b.id} className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium">{b.patient}</div>
                <div className="text-muted-foreground">
                  {b.test} • {b.status}
                </div>
              </div>
              <button className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground hover:bg-accent">
                Upload Report
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

import Card from "../components/card"
import { useApp } from "../context/app-context"

export default function BloodDonorDashboard() {
  const { demo } = useApp()
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Eligibility" subtitle="Age 18-60, Weight > 50kg" />
        <Card title="Donation History" value={5} subtitle="Last donation: 3 months ago" />
        <Card title="Rewards" value={120} subtitle="Points" />
      </div>
      <Card title="Real-time Requests (Nearby)">
        <ul className="divide-y text-sm">
          {demo.bloodRequests.map((r) => (
            <li key={r.id} className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium">
                  {r.type} • {r.units} units
                </div>
                <div className="text-muted-foreground">
                  {r.location} • Urgency: {r.urgency}
                </div>
              </div>
              <button className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground hover:bg-primary/90">
                Offer
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

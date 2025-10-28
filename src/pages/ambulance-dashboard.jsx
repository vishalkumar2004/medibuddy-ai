import Card from "../components/card"

export default function AmbulanceDashboard() {
  const intakes = [
    { id: "a1", patient: "Ravi", status: "En route", eta: "6 min" },
    { id: "a2", patient: "Maya", status: "Waiting dispatch", eta: "-" },
  ]
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Active Vehicles" value={4} />
        <Card title="Today’s Trips" value={27} />
        <Card title="Avg. Response" value="10 min" />
      </div>
      <Card title="Emergency Intake List">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground">
              <th className="px-2 py-2">ID</th>
              <th className="px-2 py-2">Patient</th>
              <th className="px-2 py-2">Status</th>
              <th className="px-2 py-2">ETA</th>
            </tr>
          </thead>
          <tbody>
            {intakes.map((i) => (
              <tr key={i.id} className="border-t">
                <td className="px-2 py-2">{i.id}</td>
                <td className="px-2 py-2">{i.patient}</td>
                <td className="px-2 py-2">{i.status}</td>
                <td className="px-2 py-2">{i.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

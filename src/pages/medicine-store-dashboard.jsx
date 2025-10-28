import Card from "../components/card"

export default function MedicineStoreDashboard() {
  const orders = [
    { id: "o1", patient: "Mohan", status: "Preparing", amount: 420 },
    { id: "o2", patient: "Sara", status: "Out for delivery", amount: 980 },
  ]
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Prescriptions" value={19} />
        <Card title="Deliveries" value={8} />
        <Card title="Refill Alerts" value={6} />
      </div>
      <Card title="Orders">
        <ul className="divide-y text-sm">
          {orders.map((o) => (
            <li key={o.id} className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium">{o.patient}</div>
                <div className="text-muted-foreground">Status: {o.status}</div>
              </div>
              <div className="text-muted-foreground">₹{o.amount}</div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

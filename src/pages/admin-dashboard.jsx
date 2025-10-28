import { useApp } from "../context/app-context"
import Card from "../components/card"
import { LineStatChart, BarStatChart } from "../components/chart"
import Notification from "../components/notification"

export default function AdminDashboard() {
  const { demo, notifications } = useApp()
  const s = demo.stats.platform

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card title="Users" value={s.users} />
        <Card title="Hospitals" value={s.hospitals} />
        <Card title="Doctors" value={s.doctors} />
        <Card title="Revenue" value={`$${(s.revenue / 100).toLocaleString()}`} />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card title="Monthly Users">
          <LineStatChart data={demo.charts.monthlyUsers} xKey="month" yKey="users" />
        </Card>
        <Card title="Monthly Revenue">
          <BarStatChart data={demo.charts.revenue} xKey="month" yKey="amount" />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {notifications.map((n) => (
          <Notification key={n.id} type={n.type} title={n.title} message={n.message} />
        ))}
      </div>
    </div>
  )
}

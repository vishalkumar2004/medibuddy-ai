"use client"

import { useState } from "react"
import { useApp } from "../context/app-context"
import Card from "../components/card"
import Modal from "../components/modal"
import FormInput from "../components/form-input"

export default function HospitalDashboard() {
  const { demo, addNotification } = useApp()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ type: "A+", units: 1, location: "", urgency: "High" })

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Blood Requests" value={demo.stats.hospital.bloodRequests} />
        <Card title="Donors" value={demo.stats.hospital.donors} />
        <Card title="Inventory Alerts" value={demo.stats.hospital.inventoryAlerts} />
      </div>

      <Card
        title="Active Blood Requests"
        right={
          <button
            className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            onClick={() => setOpen(true)}
          >
            New Request
          </button>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="px-2 py-2">ID</th>
                <th className="px-2 py-2">Type</th>
                <th className="px-2 py-2">Units</th>
                <th className="px-2 py-2">Location</th>
                <th className="px-2 py-2">Urgency</th>
              </tr>
            </thead>
            <tbody>
              {demo.bloodRequests.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-2 py-2">{r.id}</td>
                  <td className="px-2 py-2">{r.type}</td>
                  <td className="px-2 py-2">{r.units}</td>
                  <td className="px-2 py-2">{r.location}</td>
                  <td className="px-2 py-2">{r.urgency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Create Blood Request"
        actions={
          <>
            <button className="rounded-md bg-muted px-3 py-2 text-sm" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button
              className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                setOpen(false)
                addNotification({ type: "success", title: "Request created", message: "Blood request submitted." })
              }}
            >
              Submit
            </button>
          </>
        }
      >
        <div className="grid gap-3">
          <FormInput
            id="type"
            label="Blood Type"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          />
          <FormInput
            id="units"
            label="Units"
            type="number"
            value={form.units}
            onChange={(e) => setForm({ ...form, units: Number(e.target.value) })}
          />
          <FormInput
            id="location"
            label="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <FormInput
            id="urgency"
            label="Urgency"
            value={form.urgency}
            onChange={(e) => setForm({ ...form, urgency: e.target.value })}
          />
        </div>
      </Modal>
    </div>
  )
}

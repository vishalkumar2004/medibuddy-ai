"use client"

import { useState } from "react"
import Card from "../components/card"
import Modal from "../components/modal"
import { useApp } from "../context/app-context"

export default function DoctorDashboard() {
  const [open, setOpen] = useState(false)
  const { addNotification } = useApp()

  const consults = [
    { id: "c1", patient: "John Carter", reason: "Fever", status: "Pending" },
    { id: "c2", patient: "Amelia", reason: "Back pain", status: "Pending" },
  ]

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Pending Consultations" value={consults.length} />
        <Card title="Scheduled Calls" value={12} />
        <Card title="Prescriptions Uploaded" value={38} />
      </div>

      <Card
        title="Consultation Requests"
        right={
          <button
            className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            onClick={() => setOpen(true)}
          >
            Schedule Call
          </button>
        }
      >
        <ul className="divide-y text-sm">
          {consults.map((c) => (
            <li key={c.id} className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium">{c.patient}</div>
                <div className="text-muted-foreground">Reason: {c.reason}</div>
              </div>
              <button
                className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground hover:bg-accent"
                onClick={() =>
                  addNotification({ type: "success", title: "Consult accepted", message: `Accepted ${c.patient}` })
                }
              >
                Accept
              </button>
            </li>
          ))}
        </ul>
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Schedule Video Call"
        actions={
          <>
            <button className="rounded-md bg-muted px-3 py-2 text-sm" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button
              className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
              onClick={() => setOpen(false)}
            >
              Save
            </button>
          </>
        }
      >
        <div className="text-sm text-muted-foreground">
          Pick a time slot and notify the patient via in-app notification.
        </div>
      </Modal>
    </div>
  )
}

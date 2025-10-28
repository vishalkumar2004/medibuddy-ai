"use client"

import { useState } from "react"
import Card from "../components/card"
import Modal from "../components/modal"
import FormInput from "../components/form-input"
import { useApp } from "../context/app-context"

export default function PatientDashboard() {
  const { addNotification } = useApp()
  const [chatOpen, setChatOpen] = useState(false)
  const [symptom, setSymptom] = useState("Headache for two days")
  const [medicine, setMedicine] = useState("Paracetamol 500mg")
  const [time, setTime] = useState("09:00")

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          title="Emergency"
          subtitle="Blood / Ambulance"
          right={
            <button
              className="rounded-md bg-destructive px-3 py-2 text-sm text-white hover:opacity-90"
              onClick={() =>
                addNotification({
                  type: "warning",
                  title: "Emergency request sent",
                  message: "Nearby providers notified.",
                })
              }
            >
              Request Now
            </button>
          }
        />
        <Card title="Bookings" value={3} subtitle="Doctors • Labs • Medicines" />
        <Card title="MediMa Reminders" value={4} subtitle="Refill and expiry alerts" />
      </div>

      <Card
        title="AI Chatbot"
        subtitle="Symptom input, suggestions, remedies"
        right={
          <button
            className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            onClick={() => setChatOpen(true)}
          >
            Open Chat
          </button>
        }
      >
        <div className="text-sm text-muted-foreground">
          Get quick suggestions for symptoms and medicines. This is a simulated module for demo.
        </div>
      </Card>

      <Card title="MediMa - Medicine Manager">
        <div className="grid gap-3 md:grid-cols-3">
          <FormInput id="med" label="Medicine" value={medicine} onChange={(e) => setMedicine(e.target.value)} />
          <FormInput
            id="time"
            type="time"
            label="Reminder Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <div className="flex items-end">
            <button
              className="h-9 rounded-md bg-primary px-3 text-sm text-primary-foreground hover:bg-primary/90"
              onClick={() =>
                addNotification({ type: "success", title: "Reminder added", message: `${medicine} at ${time}` })
              }
            >
              Add Reminder
            </button>
          </div>
        </div>
      </Card>

      <Modal open={chatOpen} onClose={() => setChatOpen(false)} title="AI Chatbot">
        <div className="grid gap-3">
          <FormInput
            id="symptom"
            label="Describe your symptom"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />
          <div className="rounded-md border bg-muted p-3 text-sm text-muted-foreground">
            Suggestion: Consider rest and hydration. OTC: Paracetamol 500mg if fever {">"} 100.4°F. If symptoms persist,
            book a consultation.
          </div>
        </div>
      </Modal>
    </div>
  )
}

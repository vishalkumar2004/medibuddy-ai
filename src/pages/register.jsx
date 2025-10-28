"use client"

import { useState } from "react"
import FormInput from "../components/form-input"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [role, setRole] = useState("patient")
  const nav = useNavigate()

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-4 text-balance text-2xl font-semibold">Register</h1>
      <div className="grid gap-3">
        <FormInput id="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormInput id="pass" type="password" label="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <div className="grid gap-1">
          <label htmlFor="role" className="text-sm text-muted-foreground">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="hospital">Hospital</option>
            <option value="donor">Donor</option>
          </select>
        </div>
        <button
          className="mt-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          onClick={() => nav("/login")}
        >
          Create account
        </button>
      </div>
    </div>
  )
}

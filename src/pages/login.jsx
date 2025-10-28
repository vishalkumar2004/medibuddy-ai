"use client"

import { useState } from "react"
import FormInput from "../components/form-input"
import { useApp } from "../context/app-context"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const { setUser } = useApp()
  const nav = useNavigate()

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-4 text-balance text-2xl font-semibold">Login</h1>
      <div className="grid gap-3">
        <FormInput id="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormInput id="pass" type="password" label="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button
          className="mt-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          onClick={() => {
            setUser({ id: "u_login", name: "Demo User", role: "patient" })
            nav("/patient")
          }}
        >
          Sign in
        </button>
        <button
          className="text-left text-sm text-muted-foreground hover:text-foreground"
          onClick={() => nav("/register")}
        >
          Create an account
        </button>
      </div>
    </div>
  )
}

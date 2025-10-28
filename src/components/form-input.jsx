"use client"

export default function FormInput({ id, label, type = "text", value, onChange, placeholder, required, ...rest }) {
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-ring focus:ring-2 focus:ring-ring/30"
        {...rest}
      />
    </div>
  )
}

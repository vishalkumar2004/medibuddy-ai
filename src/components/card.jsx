export default function Card({ title, value, subtitle, children, right }) {
  return (
    <section className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {value !== undefined && <div className="text-2xl font-semibold text-foreground">{value}</div>}
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        {right}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </section>
  )
}

export default function Pricing() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:bg-slate-900">
      <div className="max-w-4xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-slate-700 dark:text-slate-300 mb-6">Simple, transparent pricing for growing businesses.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="border rounded-lg p-6">Basic: $199/mo — Essentials for small teams</div>
          <div className="border rounded-lg p-6">Standard: $499/mo — Most popular for SMBs</div>
          <div className="border rounded-lg p-6">Premium: $899/mo — Advanced security & support</div>
          <div className="border rounded-lg p-6">Enterprise: Custom — Scalable for large orgs</div>
        </div>
      </div>
    </section>
  )
}

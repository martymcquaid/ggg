export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:bg-slate-900">
      <div className="max-w-2xl p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-slate-700 dark:text-slate-300 mb-4">Tell us about your IT needs and we’ll tailor a solution.</p>
        <form className="grid grid-cols-1 gap-4 text-left">
          <input className="p-3 border rounded" placeholder="Your name" />
          <input className="p-3 border rounded" placeholder="Email" type="email" />
          <textarea className="p-3 border rounded" placeholder="Your message" rows={4} />
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
        </form>
      </div>
    </section>
  )
}

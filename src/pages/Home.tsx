import Card from '../components/Card'

export default function Home() {
  const services = [
    {
      title: 'Managed IT Support',
      description:
        'Proactive monitoring, helpdesk, and strategic IT planning to keep your business running smoothly.',
      icon: '🖥️',
      to: '/services/managed-it',
    },
    {
      title: 'Cybersecurity',
      description:
        'Threat detection, incident response, and compliance to safeguard your digital assets.',
      icon: '🔒',
      to: '/services/cybersecurity',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable, secure cloud architecture with migration and management services.',
      icon: '☁️',
      to: '/services/cloud',
    },
    {
      title: 'VoIP & Telecom',
      description:
        'Reliable communications with high-quality voice, video, and collaboration tools.',
      icon: '📞',
      to: '/services/voip',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Premium IT Services for Modern Enterprises</h1>
          <p className="max-w-2xl text-slate-300 mb-6 text-lg">Trustworthy, scalable, and future-ready technology solutions designed to accelerate your business.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="/contact" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">Get a Free Consultation</a>
            <a href="/services" className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-700/20">Explore Services</a>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100">Our Services at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Card key={s.title} title={s.title} description={s.description} icon={s.icon} to={s.to} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries preview */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">Industries We Serve</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">Retail, healthcare, finance, manufacturing, and more. We tailor IT strategy to your industry needs.</p>
          <a href="/industries" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Industries</a>
        </div>
      </section>
    </div>
  )
}

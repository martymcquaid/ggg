export default function Blog() {
  const posts = [
    { slug: 'why-move-to-cloud', title: 'Why Move to the Cloud in 2025' },
    { slug: 'cybersecurity-trends', title: 'Cybersecurity Trends to Watch' },
  ]
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:bg-slate-900">
      <div className="max-w-4xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-slate-700 dark:text-slate-300 mb-6">Insights and updates from our IT experts.</p>
        <div className="space-y-4 mt-2 text-left w-full max-w-lg mx-auto">
          {posts.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="block p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
              {p.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

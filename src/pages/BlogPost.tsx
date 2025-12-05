import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:bg-slate-900">
      <div className="max-w-3xl p-6">
        <h1 className="text-3xl font-bold mb-2">Blog Post: {slug}</h1>
        <p className="text-slate-700">This is a sample article template for the slug: {slug}.</p>
      </div>
    </section>
  )
}

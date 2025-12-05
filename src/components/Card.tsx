import React from 'react'
import { Link } from 'react-router-dom'

type CardProps = {
  title: string
  description: string
  icon?: string
  to?: string
}

export default function Card({ title, description, icon = '💼', to = '#' }: CardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
        </div>
        <Link to={to} className="text-sm text-blue-600 hover:underline">Learn more</Link>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}

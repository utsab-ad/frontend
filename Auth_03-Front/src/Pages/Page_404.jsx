import { RouteIndex } from '@/helper/RouteNames.js'
import React from 'react'
import { Link } from 'react-router-dom'

const Page_404 = () => {
  return (
   <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="bg-indigo-800 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Portfolio for a Teacher</h1>
        <p className="mt-4 text-xl md:text-2xl">Dedicated to shaping minds & inspiring futures</p>
      </div>

      {/* Features / Highlights */}
      <div className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">📚 Teaching Experience</h3>
          <p>Over 10 years of teaching excellence in various academic institutions.</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">🎓 Student Success</h3>
          <p>Guided hundreds of students toward academic and personal growth.</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">📝 Publications</h3>
          <p>Authored educational articles, research papers, and classroom resources.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-indigo-900 text-white text-center py-6">
        <p>© 2025 Teacher Portfolio. Designed with React & Tailwind CSS.</p>
      </div>
    </div>
  )
}

export default Page_404
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const Router = useRouter()
  return (
    <main className="p-6 sm:p-10 md:p-16 lg:p-24 bg-gray-100">
      <section className="text-center mb-10">
        <Link
          href={'./sign-in'}
          className=" text-lg sm:text-4xl font-bold text-gray-500 mb-4 border-2 hover:bg-green-500 hover:text-white border-green-500  rounded-lg p-5"
        >
          Build Your Perfect Resume
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          {/* <img
            src="/images/resume-builder.png"
            alt="Resume Builder"
            className="h-32 w-32 mb-4"
          /> */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Easy to Use
          </h2>
          <p className="text-gray-600">
            Our intuitive interface makes resume building a breeze.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          {/* <img
            src="/images/ai-assistance.png"
            alt="AI Assistance"
            className="h-32 w-32 mb-4"
          /> */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            AI Assistance
          </h2>
          <p className="text-gray-600">
            Get AI suggestions to enhance your resume with relevant content.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          {/* <img
            src="/images/customization.png"
            alt="Customization"
            className="h-32 w-32 mb-4"
          /> */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Customization
          </h2>
          <p className="text-gray-600">
            Customize your resume to match your personal style and career goals.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          {/* <img
            src="/images/real-time-editing.png"
            alt="Real-Time Editing"
            className="h-32 w-32 mb-4"
          /> */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Real-Time Editing
          </h2>
          <p className="text-gray-600">
            See your changes in real-time as you build your resume.
          </p>
        </div>
      </section>
    </main>
  )
}

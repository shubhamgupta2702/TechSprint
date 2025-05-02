import React from 'react'
import breathing from '../assets/breathing.png'
import meditation from '../assets/meditation.png'
import yoga from '../assets/yoga.png'
import { NavLink } from 'react-router-dom'

const YogaCard = () => {
  return (
    <>
      <section className="px-4 py-12 mt-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      
      <div className="mb-12 mt-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Wellness Practices</h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">Experience calm and clarity with guided breathing exercises, relaxing yoga, and soothing meditation—all in one supportive space.</p>
      </div>

     
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden bg-blue-500">
            <img src={breathing} alt="Project 1" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">Breathing Excercise</h3>
            <p className="mt-2 text-gray-600">Relax and breathe in and out.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Anxiety</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Relax</span>
            </div>

            <NavLink to="breathing" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
            Start the Practice
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NavLink>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden bg-green-500">
            <img src={meditation} alt="Project 2" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">Meditation</h3>
            <p className="mt-2 text-gray-600">Relax your nerves and mind.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">Meditation</span>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Relax</span>
            </div>
            <NavLink to="meditation" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
            Start the Practice
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NavLink>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden bg-purple-500">
            <img src={yoga} alt="Project 3" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">Yoga</h3>
            <p className="mt-2 text-gray-600">Relax your body and mind.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">calm</span>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">peace</span>
            </div>
            <NavLink to="yoga" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
              Start the Practice
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>

      
      <div className="mt-12 text-center">
        <a href="#" className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"> View More </a>
      </div>
    </div>
  </section>
    </>
  )
}

export default YogaCard

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  return (
    <>
        <div className="min-h-screen bg-blue-50 flex justify-center items-center">

<div className="bg-white p-6 rounded-xl shadow-lg w-80">

  <h1 className="text-2xl font-bold text-center">
    Gargi Yadav
  </h1>

  <p className="text-gray-500 text-center mt-2">
    MCA Student
  </p>

  <p className="mt-4">
    College: MANIT Bhopal
  </p>

  <p className="mt-2">
    Skills: Java, React, DSA
  </p>

  <button className="bg-blue-600 text-white w-full py-2 rounded-lg mt-4 hover:bg-blue-700">
    View Profile
  </button>

</div>

</div>
    </>
  )
}

export default App

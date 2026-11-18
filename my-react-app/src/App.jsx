import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <>
    <div className = "w-full h-screen duration-200" style = {{background:color}}>
      <div className = " fixed justify-center flex flex-wrap px-2 insert-x-2 bottom-12">
        <div className = "flex flex-wrap justify-center rounded-xl bg-white px-3 py-2 gap-2">
            <button className = "outline-none bg-red-500 rounded-xl py-1 px-4 shadow-lg" onClick = {() => setcolor("red")}>red</button>
            <button className = "outline-none bg-black rounded-xl py-1 px-4 shadow-lg text-white"  onClick = {() => setcolor("black")}>black</button>
            <button className = "outline-none bg-blue-500 rounded-xl py-1 px-4 shadow-lg" onClick = {() => setcolor("blue")}>blue</button>
            <button className = "outline-none bg-green-500 rounded-xl py-1 px-4 shadow-lg"  onClick = {() => setcolor("green")}>green</button>
            <button className = "outline-none bg-pink-500 rounded-xl py-1 px-4 shadow-lg"  onClick = {() => setcolor("pink")}>pink</button>
            <button className = "outline-none bg-gray-500 rounded-xl py-1 px-4 shadow-lg"  onClick = {() => setcolor("gray")}>gray</button>
            <button className = "outline-none bg-olive-500 rounded-xl py-1 px-4 shadow-lg" onClick = {() => setcolor("olive")}>olive</button>
        </div>

      </div>

    </div>
    </>
  )
}

export default App

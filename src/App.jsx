import { useState } from "react"

function changehandler(color){
  setColor(color);
}

function App() {
const[color , setColor] = useState("olive");
  return (
    <>
    <div className="w-full h-screen duration-200 flex justify-center"
    style={{backgroundColor: color}}>
      <div className=" absolute top-5 flex justify-center gap-5 p-3 border-2 border-white rounded-md">
        <button className=" text-white bg-red-700 py-1 px-5 rounded-lg border-2 border-white" onClick={()=> setColor("red")}>Red</button>
        <button className=" text-white bg-purple-700 py-1 px-5 rounded-lg border-2 border-white" onClick={()=> setColor("purple")}>Purple</button>
        <button className=" text-white  bg-black py-1 px-5 rounded-lg border-2 border-white" onClick={()=> setColor("black")}>Black</button>
        <button className=" text-white bg-blue-700 py-1 px-5 rounded-lg border-2 border-white" onClick={()=> setColor("Blue")}>Blue</button>
        <button className=" text-white bg-cyan-700 py-1 px-5 rounded-lg border-2 border-white" onClick={()=> setColor("Cyan")}>Cyan</button>
        <button className=" text-white bg-yellow-700 py-1 px-5 rounded-lg border-2 border-white" onClick={()=> setColor("Yellow")}>Yellow</button>
      </div>
    </div>
    </>
  )
}

export default App

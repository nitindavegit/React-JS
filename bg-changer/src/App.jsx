import { useState } from "react"


function App() {
  const [color, setColor] = useState('cyan')

  return (
    <div className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-2 py-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-2 rounded-xl">
          <button className="outline-none px-4 rounded-full py-1 text-white shadow-2xl"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button className="outline-none px-4 rounded-full py-1 text-white shadow-2xl"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button className="outline-none px-4 rounded-full py-1 text-white shadow-2xl"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button className="outline-none px-4 rounded-full py-1 text-white shadow-2xl"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button className="outline-none px-4 rounded-full py-1 text-gray shadow-2xl"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>


    </div>
  )
}

export default App

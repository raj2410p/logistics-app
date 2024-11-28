import './Landing.css'

export const Landing = () => {
  return (
    <>
      {/* Nav For Landing Page */}
      <nav className="bg-blue-200 border-b-2 border-gray-400 p-2 flex justify-between items-center">
        <div className="flex justify-between items-center gap-1">
          <img src="./src/assets/favicon.png" alt="" />
          <h1 className="text-xl font-mono">Swiftly</h1>
        </div>
        <ul className="flex justify-around items-center gap-10">
          <li><a href="/" className="text-xl hover:bg-cyan-300 py-2 px-3 hover:outline hover:outline-gray-400 rounded-md " >Home</a></li>
          <li><a href="#" className="text-xl hover:bg-cyan-300 py-2 px-3 hover:outline hover:outline-gray-400 rounded-md " >Services</a></li>
          <li><a href="#" className="text-xl hover:bg-cyan-300 py-2 px-3 hover:outline hover:outline-gray-400 rounded-md " >About</a></li>
          <li><a href="#" className="text-xl hover:bg-cyan-300 py-2 px-3 hover:outline hover:outline-gray-400 rounded-md " >Contact</a></li>
        </ul>
        <div className="flex items-center gap-1">
          <a type="button" className="text-lg border rounded-md border-slate-500 bg-cyan-400 hover:bg-lime-200 py-1 px-2" href="./login">Login</a>
          <a type="button" className="text-lg border rounded-md border-slate-500 bg-cyan-400 hover:bg-lime-200 py-1 px-2" href="./Signup">Sign Up</a>
        </div>
      </nav>

      {/* Head Body Section */}

    </>
  )
}
export default Landing

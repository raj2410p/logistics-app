import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900 p-4'>
      <h1 className='absolute top-4 text-center text-xl sm:text-2xl mb-6 font-bold dark:text-white'>Welcome, Login to go |Swiftly</h1>
      <form className='shadow-lg w-full sm:w-3/4 md:w-2/4 lg:w-1/4 h-auto bg-gray-800 p-5 rounded-md backdrop-blur-sm'>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-white font-medium mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 bg-gray-100"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 dark:text-white font-medium mb-2">
            <FontAwesomeIcon icon={faKey} className="mr-2" />
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 bg-gray-100"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <a href="#" className="text-indigo-500 hover:underline">Forget Password?</a>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300 mb-4"
        >
          Login
        </button>
        <button
          type="button"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300 mb-4 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Login with Google
        </button>
        <div className="text-center">
          <p className='dark:text-white'>Don't have an account? <a href="/signup" className="text-indigo-500 hover:underline">Sign Up</a> here!</p>
        </div>
      </form>
    </div>
  )
}

export default Login;
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export const Signup = () => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      alert('Passwords match!');
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900 p-4'>
      <h1 className='absolute top-4 text-center text-xl sm:text-2xl mb-6 font-bold dark:text-slate-100'>Welcome, SignUp For |Swiftly</h1>
      <form 
        className='shadow-lg w-full sm:w-3/4 md:w-2/4 lg:w-1/4 h-auto bg-gray-800 p-4 rounded-md backdrop-blur-sm'
        onSubmit={(e) => {
          e.preventDefault();
          validatePasswords();
        }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 dark:text-slate-100 font-medium mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-200"
            placeholder="Enter your Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 dark:text-slate-100 font-medium mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-200"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="block text-gray-700 dark:text-slate-100 font-medium mb-2">
            <FontAwesomeIcon icon={faKey} className="mr-2" />
            Password
          </label>
          <input
            required
            onChange={handlePasswordChange}
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-200"
            placeholder="Enter your password"
            autoComplete='new-password'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Confirmassword" className="block text-gray-700 dark:text-slate-100 font-medium mb-2">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Confirm Password
          </label>
          <input
            required
            onChange={handleConfirmPasswordChange}
            type="password"
            id="ConfimPassword"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-200"
            placeholder="Enter your password"
            autoComplete='new-password'
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mb-6"
        >
          SignUp
        </button>
        <button
          type="button"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300 mb-2 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Login with Google
        </button>
        <div className="text-center">
          <p className='dark:text-slate-100'>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a> here!</p>
        </div>
      </form>
    </div>

  )
}

export default Signup;
import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    // 1. Main background is a light gray to make the card pop
    <div className='flex min-h-screen w-screen items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md'>
        {/* Optional: Add your SaaS logo here */}
        <div className='text-center'>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                Sign in to your account
            </h2>
        </div>

        {/* 2. Switched from a harsh border to a clean white card with a soft shadow */}
        <div className='mt-8 rounded-2xl bg-white p-8 shadow-lg'>
          {/* 3. Using space-y for consistent vertical spacing between form elements */}
          <form onSubmit={submitHandler} className='space-y-6'>
            <div>
              {/* 4. Added accessible labels for better UX */}
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // 5. Modern input styling with focus states
                  className='block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='you@example.com'
                />
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='••••••••'
                />
              </div>
            </div>
            
            {/* Optional: Add a "Forgot Password?" link */}
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              {/* 6. Primary button using our accent color */}
              <button
                type='submit'
                className='flex w-full justify-center rounded-lg border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
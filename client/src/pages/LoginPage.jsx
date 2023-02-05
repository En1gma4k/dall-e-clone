import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform authentication here, for example by making an API request
    // If the authentication fails, set an error message using setError
  };

  return (
    <div className="bg-[#f9fafe] h-screen flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-medium mb-4">Login</h2>
        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder='Username'
            className="w-full border p-2 rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder='Password'
            className="w-full border p-2 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

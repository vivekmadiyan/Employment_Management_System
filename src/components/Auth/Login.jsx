import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {/* Demo Credentials Section */}
        <div className="mt-6 rounded-xl bg-gray-100 p-4 text-sm text-gray-700 shadow">
          <p className="font-semibold mb-2">🔑 Demo Login Credentials:</p>
          <p>
            <span className="font-medium">Admin:</span> admin@me.com / 123
          </p>
          <p>
            <span className="font-medium">Employee 1:</span> e@e.com / 123
          </p>
          <p>
            <span className="font-medium">Employee 2:</span>{" "}
            employee2@example.com / 123
          </p>
          <p>
            <span className="font-medium">Employee 3:</span>{" "}
            employee3@example.com / 123
          </p>
          <p>
            <span className="font-medium">Employee 4:</span>{" "}
            employee4@example.com / 123
          </p>
          <p>
            <span className="font-medium">Employee 5:</span>{" "}
            employee5@example.com / 123
          </p>
        </div>

        {/* Login Form */}
        <div className="mt-8 rounded-2xl bg-white p-8 shadow-lg">
          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


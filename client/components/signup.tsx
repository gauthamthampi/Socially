'use client'
import React, { useState } from "react";

const SignupLayout = () => {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Implement form submission logic here (e.g., API call)
  };

  return (
    <section className="min-h-screen flex lg:flex-row items-stretch text-white">
      <div
        className="lg:flex hidden w-3/4 bg-black bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/background/20231016/original/pngtree-animated-hand-gripping-cash-while-launching-online-casino-app-on-phone-picture-image_5579846.jpg)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h3 className="text-4xl font-bold leading-none mb-4 text-left tracking-wide font-poppins">
            Your World in{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Words!
            </span>
          </h3>
          <p className="text-lg font-thin my-6 font-poppins">
            Share Laughs, Stories, and Everything in Between
          </p>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-8 py-12"
        style={{ backgroundColor: "black" }}
      >
        <div className="w-full max-w-md">
          <div className="flex justify-center gap-3 mb-6">
            <img
              src="/images/logo.png"
              alt="Socially Logo"
              className="h-12 w-12 object-contain"
            />
            <h1
              className="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
      bg-clip-text text-transparent font-poppins"
            >
              Socially
            </h1>
          </div>
          <p className="mb-6 text-gray-400">Create your new account</p>
          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="text-left">
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="text-left">
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold"
            >
              Register
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupLayout;
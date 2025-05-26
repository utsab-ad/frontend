import { RouteLogin } from "@/helper/RouteNames";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaReact, FaGithub, FaTools, FaMagic } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/in/users`, { withCredentials: true })
      .then(result => {
        if (result.data && result.data.user) {
          setUsers(result.data.user);
        } else {
          navigate(RouteLogin);
        }
      })
      .catch((err) => {
        console.log("User not authenticated:", err);
        navigate(RouteLogin);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-blue-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="py-16 text-center">
        <div className="flex justify-center items-center gap-4 text-5xl font-extrabold text-indigo-600">
          <FaReact className="animate-spin-slow" />
          <h1 className="tracking-tight">Utsab's React UI Kit</h1>
        </div>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          A professional, modular UI component library to accelerate your frontend workflow and experience development maturity.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="btn-outline">
            View on GitHub
          </a>
          <Link to="/get-started" className="btn-primary">
            Get Started
          </Link>
        </div>
      </header>

      {/* Feature Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <FeatureCard
          icon={<FaTools className="text-4xl text-indigo-600" />}
          title="Modular & Reusable"
          description="Plug-and-play components with readable structure to save hours of design time."
        />
        <FeatureCard
          icon={<FaMagic className="text-4xl text-pink-500" />}
          title="Developer Experience"
          description="Designed for beginner to intermediate devs who want clarity and speed."
        />
        <FeatureCard
          icon={<FaGithub className="text-4xl text-gray-800" />}
          title="Open Source"
          description="Fully available on GitHub — contribute, customize, or fork as your own."
        />
      </section>

      {/* Navigation Section */}
      <section className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-6">Explore Core Components</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <NavButton to="/login" label="Login" />
          <NavButton to="/register" label="Register" />
          <NavButton to="/otp" label="OTP Verification" />
          <NavButton to="/reset-password" label="Reset Password" />
          <NavButton to="https://github.com/your-username/backend-basic-lib" label="Backend Library" external />
        </div>
      </section>

{/* Backend Library Section */}
<section className="bg-white py-16 px-6 mt-12">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Backend Starter Library</h2>
    <p className="text-gray-700 max-w-3xl mx-auto mb-8">
      This production-ready backend library is a Node.js + Express.js starter kit for authentication systems,
      including features like secure signup, login, logout, JWT, bcrypt password hashing, OTP verification via email, and more.
      It follows clean code architecture and modular folder structure for better scalability and readability.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      <a href="https://github.com/your-username/backend-basic-lib"
         target="_blank" rel="noopener noreferrer"
         className="btn-primary px-6 py-2 text-base">
        View GitHub Repo
      </a>
      {/* Optional Docs Button */}
      <a href="https://github.com/your-username/backend-basic-lib#readme"
         target="_blank" rel="noopener noreferrer"
         className="btn-outline px-6 py-2 text-base">
        View Documentation
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-sm text-gray-500 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Utsab's UI Library. Made with ❤️ using React & Tailwind.
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center transition hover:shadow-2xl hover:-translate-y-1 duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const NavButton = ({ to, label, external }) =>
  external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-6 py-2">
      {label}
    </a>
  ) : (
    <Link to={to} className="btn-outline text-base px-6 py-2">
      {label}
    </Link>
  );

export default Landing;

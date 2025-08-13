import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import track from "../images/track.jpg";

interface Info {
  EmailAddress: string;
  Password: string;
}

interface Errors {
  EmailAddress?: string;
  Password?: string;
}

const LoginForm: React.FC = () => {
  const [info, setInfo] = useState<Info>({
    EmailAddress: "",
    Password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const validTLDs = [
    "com", "net", "org", "co", "io", "za", "dev", "info", "biz", "me", "gov",
    "edu", "tv", "us", "uk", "ca", "ai", "app", "store", "tech", "xyz",
  ];

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(\w{2,63})$/;
    const match = email.match(regex);
    if (!match) return false;
    const tld = match[1].toLowerCase();
    return validTLDs.includes(tld);
  };

  const isValidPassword = (password: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { EmailAddress, Password } = info;

    const validationErrors: Errors = {};

    if (!isValidEmail(EmailAddress)) {
      validationErrors.EmailAddress = "Invalid email address";
    }

    if (!isValidPassword(Password)) {
      validationErrors.Password =
        "Password must be at least 8 characters long and include upper case, lower case, and a number";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-start pt-[5%] relative"
      style={{ backgroundImage: `url(${track})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

      <form
        className="max-w-sm mx-auto mt-[5%] font-inter relative z-10"
        onSubmit={onSubmit}
      >
        <img className="w-[70%] ml-[15%]" src={logo} alt="Logo" />
        <p className="mb-[3%] text-center text-white text-m mt-[-4%]">
          F1 LiveRace Telemetry & Strategy Simulator
        </p>

        <div className="mb-3">
          <input
            type="email"
            name="EmailAddress"
            className="bg-white/20 backdrop-blur-sm text-white text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="Email Address"
            value={info.EmailAddress}
            onChange={handleChange}
            required
          />
          {errors.EmailAddress && (
            <p className="text-red-400 text-[11px] mb-4">
              {errors.EmailAddress}
            </p>
          )}
        </div>

        <div className="mb-5">
          <input
            type="password"
            name="Password"
            className="bg-white/20 backdrop-blur-sm text-white text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="Password"
            value={info.Password}
            onChange={handleChange}
            required
          />
          {errors.Password && (
            <p className="text-red-400 text-[11px] mb-4">{errors.Password}</p>
          )}
        </div>

        <div className="flex items-start mb-5">
          <Link to="/forgotPassword" className="text-sm ml-[1%] text-red-600">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="text-red-600 border border-red-400 bg-transparent hover:bg-red-600 hover:border-none hover:text-white focus:outline-none 
                    hover:border-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>

        <p className="text-center text-white text-sm mt-[4%]">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-600">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

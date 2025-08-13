import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import track from "../images/track.jpg";

interface FormData {
  Name: string;
  Surname: string;
  EmailAddress: string;
  Password: string;
}

interface FormErrors {
  Name?: string;
  Surname?: string;
  EmailAddress?: string;
  Password?: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    Surname: "",
    EmailAddress: "",
    Password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validTLDs = [
    "com", "net", "org", "co", "io", "za", "dev", "info", "biz", "me", "gov",
    "edu", "tv", "us", "uk", "ca", "ai", "app", "store", "tech", "xyz",
  ];

  const isValidName = (name: string) => /^[A-Za-z\s]+$/.test(name);

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(\w{2,63})$/;
    const match = email.match(regex);
    if (!match) return false;
    const tld = match[1].toLowerCase();
    return validTLDs.includes(tld);
  };

  const isValidPassword = (password: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Name, Surname, EmailAddress, Password } = formData;

    const validationErrors: FormErrors = {};

    if (!isValidName(Name)) {
      validationErrors.Name = "Name should only contain letters";
    }
    if (!isValidName(Surname)) {
      validationErrors.Surname = "Surname should only contain letters";
    }
    if (!isValidEmail(EmailAddress)) {
      validationErrors.EmailAddress = "Invalid Email Address";
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
        className="max-w-sm mx-auto font-inter relative z-10" 
        onSubmit={onSubmit}
      >
        <img className="w-[70%] ml-[15%]" src={logo} alt="Logo" />
        <p className="mb-[3%] text-center text-white text-m mt-[-4%]">
          F1 LiveRace Telemetry & Strategy Simulator
        </p>

        <div className="mb-3">
          <input
            type="text"
            name="Name"
            className="bg-white/20 backdrop-blur-sm text-white text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
          {errors.Name && (
            <p className="text-red-400 text-[11px] mb-4">{errors.Name}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="Surname"
            className="bg-white/20 backdrop-blur-sm text-white text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="Surname"
            value={formData.Surname}
            onChange={handleChange}
            required
          />
          {errors.Surname && (
            <p className="text-red-400 text-[11px] mb-4">{errors.Surname}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="EmailAddress"
            className="bg-white/20 backdrop-blur-sm text-white text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="Email Address"
            value={formData.EmailAddress}
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
            value={formData.Password}
            onChange={handleChange}
            required
          />
          {errors.Password && (
            <p className="text-red-400 text-[11px] mb-4">{errors.Password}</p>
          )}
        </div>

        <button
          type="submit"
          className="text-red-600 border border-red-400 bg-transparent hover:bg-red-600 hover:text-white focus:outline-none 
                hover:border-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Register
        </button>

        <p className="text-center text-white text-sm mt-[4%]">
          Already have an account?{" "}
          <Link to="/login" className="text-red-600">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;

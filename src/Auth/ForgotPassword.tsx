import logo from "../images/logo.png";
import track from "../images/track.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ResetFormData {
  EmailAddress: string;
}

interface ErrorMessage {
  EmailAddress?: string;
}

const ForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState<ResetFormData>({
    EmailAddress: ""
  });

  const [errors, setErrors] = useState<ErrorMessage>({});

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { EmailAddress } = formData;

    const validationErrors: ErrorMessage = {};

    if (!isValidEmail(EmailAddress)) {
      validationErrors.EmailAddress = "Invalid email address";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-start pt-[5%] relative px-4"
      style={{ backgroundImage: `url(${track})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

      <Link
        to="/login"
        className="relative z-20 mt-[-2%] text-red-600 border border-red-400 bg-transparent hover:bg-red-600 hover:border-none hover:text-white focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4"
      >
        Back
      </Link>

      <form
        className="max-w-sm w-full mx-auto font-inter relative z-10"
        onSubmit={onSubmit}
      >
        <img className="w-[70%] ml-[15%]" src={logo} alt="Logo" />
        <h2 className="text-white text-center text-2xl">Password Reset</h2>
        <p className="text-white  text-inter text-center text-[14px] mt-2 mb-4">
          Provide the email address associated<br/> with your account to recover your password.
        </p>

        <div className="mb-3">
          <input
            type="email"
            id="email"
            name="EmailAddress"
            className="bg-white/20 backdrop-blur-sm text-white text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="Email Address"
            value={formData.EmailAddress}
            onChange={handleChange}
            required
          />
          {errors.EmailAddress && (
            <p className="text-red-400 text-[11px] mt-1">{errors.EmailAddress}</p>
          )}
        </div>

        <button
          type="submit"
          className="text-red-600 border border-red-400 bg-transparent hover:bg-red-600 hover:border-none hover:text-white focus:outline-none 
                       font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

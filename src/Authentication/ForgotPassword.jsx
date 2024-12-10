import React, { useState } from "react";
import Inputbox1 from "../Components/Inputbox1";
import { EmailIcon } from "../Components/SvgIcons";
import { toast } from "sonner";

const ForgotPassword = ({ isOpen, onClose, onSubmit }) => {
  const [FPEmail, setFPEmail] = useState("");
  if (!isOpen) return null;
  const validateForm = () => {
    if (!FPEmail.trim()) {
      toast.error("Email is required.");
      return false;
    } else if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(FPEmail)) {
      toast.error("Invalid email format.");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      toast.success("Password reset instructions sent to your email!");
      setFPEmail(""); // Clear the input field
      setTimeout(() => {
        onClose(); // Close the modal
      }, 1000); // Delay for better UX
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-96 p-6 flex flex-col gap-2 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Forgot Password</h3>
        <p className="text-sm mb-4">
          Enter your email address, and we'll send you instructions to reset
          your password.
        </p>
        <Inputbox1
          label={"Enter your email"}
          id={"forgotpass"}
          type={"email"}
          icon={EmailIcon}
          value={FPEmail}
          onChange={(e) => setFPEmail(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSubmit}
            onSubmit={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { register } from "../api/endpoints/auth";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const { login: saveUser } = useAuth();
  const { mutateAsync: registerUser } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      if (!data.success) throw new Error(data.message || "Login failed");
      saveUser(data.data);
      //   toast
    },
    onError: (error) => {
      console.error(error);
      //   toast
    },
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { confirmPassword: _, ...registerData } = formData;
      await registerUser(registerData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {/* errors */}
      <div className="alert alert-error mb-4">
        <span>{error}</span>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              className="input input-bordered w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              className="input input-bordered w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="input input-bordered w-full"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            className="input input-bordered w-full"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          //   disabled={isRegistering}
        >
          {/* {isRegistering ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Creating account...
            </>
          ) : ( */}
          "Create Account"
          {/* )} */}
        </button>
      </form>
    </>
  );
}

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { login } from "../api/endpoints/auth";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const { login: saveUser } = useAuth();
  const {
    mutateAsync: loginUser,
    error,
    isError,
    isPending,
  } = useMutation({
    mutationFn: login,
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
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {/* errors */}
      {isError && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      {/* form */}
      <form onSubmit={handleSubmit}>
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

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Loading to account...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
}

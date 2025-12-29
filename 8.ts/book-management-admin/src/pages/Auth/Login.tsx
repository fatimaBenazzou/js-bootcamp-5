import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import { loginSchema } from "@/validators/auth";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function Login() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: ({ value }) => {
      const success = login({
        email: value.email,
        password: value.password,
        rememberMe: value.rememberMe,
      });

      if (success) {
        toast.success("Welcome Back !");
        navigate("/", { replace: true });
      } else {
        toast.error("Invalid Credentials !");
      }
    },
  });
  return (
    <div>
      <div>
        <h2>Welcome Back !</h2>
        <p>Sign in to continue to your digital Library</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="email"
          validators={{
            onChange: loginSchema.shape.email,
          }}
        >
          {({ state, handleBlur, handleChange }) => (
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                autoComplete="email"
                disabled={isLoading}
                className={
                  state.meta.errors.length > 0 && state.meta.isTouched
                    ? "border-destructive"
                    : ""
                }
              />
              {state.meta.errors.length > 0 && state.meta.isTouched && (
                <p>{state.meta.errors[0]?.message}</p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field
          name="password"
          validators={{
            onChange: loginSchema.shape.password,
          }}
        >
          {({ state, handleBlur, handleChange }) => (
            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                autoComplete="current-password"
                disabled={isLoading}
                className={
                  state.meta.errors.length > 0 && state.meta.isTouched
                    ? "border-destructive"
                    : ""
                }
              />
              {state.meta.errors.length > 0 && state.meta.isTouched && (
                <p>{state.meta.errors[0]?.message}</p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field
          name="rememberMe"
          validators={{
            onChange: loginSchema.shape.rememberMe,
          }}
        >
          {({ state, handleBlur, handleChange }) => (
            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                autoComplete="current-password"
                disabled={isLoading}
                className={
                  state.meta.errors.length > 0 && state.meta.isTouched
                    ? "border-destructive"
                    : ""
                }
              />
              {state.meta.errors.length > 0 && state.meta.isTouched && (
                <p>{state.meta.errors[0]?.message}</p>
              )}
            </div>
          )}
        </form.Field>
      </form>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import { loginSchema } from "@/validators/auth";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export default function Login() {
  const [isHidden, setIsHidden] = useState(true);
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
            <>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={isHidden ? "password" : "text"}
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
                <Button
                  type="button"
                  variant={"ghost"}
                  size={"sm"}
                  className="absolute right-0 top-1/2 -translate-1/2 h-full px-2"
                  onClick={(e) => {
                    // e.preventDefault();
                    e.stopPropagation();
                    setIsHidden(!isHidden);
                  }}
                  disabled={isLoading}
                >
                  {isHidden ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </Button>
              </div>
              {state.meta.errors.length > 0 && state.meta.isTouched && (
                <p>{state.meta.errors[0]?.message}</p>
              )}
            </>
          )}
        </form.Field>
        <form.Field name="rememberMe">
          {({ state, handleChange }) => (
            <div>
              <div className="">
                <Checkbox
                  id="rememberMe"
                  checked={state.value}
                  onCheckedChange={(checked: boolean | "indeterminate") =>
                    handleChange(checked === true)
                  }
                  disabled={isLoading}
                />
                <Label htmlFor="rememberMe">Remember me</Label>
              </div>
              <Button
                type="button"
                variant="link"
                className="px-0 text-sm"
                asChild
              >
                <Link to={"/auth/forgot-password"}>Forgot Password?</Link>
              </Button>
            </div>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!canSubmit || isSubmitting || isLoading}
            >
              Sign in
            </Button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}

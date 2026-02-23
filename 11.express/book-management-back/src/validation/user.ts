import z from "zod/v4";

const basicPasswordSchema = z
  .string()
  .min(6, "Password must at least be 6 characters");

/* const strongPasswordSchema = z
  .string()
  .regex(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
    "Password must be 8+ characters with uppercase, lowercase, and number",
  ); */

export const loginSchema = z.object({
  email: z.email("Email must be valid").trim().toLowerCase(),
  password: basicPasswordSchema,
});

export const userSchema = loginSchema.extend({
  firstName: z
    .string()
    .min(3, "First name must have at least 3 letters")
    .max(70, "First name must have at most 70 letters"),
  lastName: z
    .string()
    .min(3, "Last name must have at least 3 letters")
    .max(70, "Last name must have at most 70 letters"),
  phone: z
    .string()
    .optional()
    .transform((val) => val || null),
  avatar: z
    .url()
    .optional()
    .transform((val) => val || null),
});

export const fullUserSchema = userSchema.extend({
  role: z.enum(["admin", "user"]).optional(),
});

export const profileUpdateSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must have at least 3 letters")
    .max(70, "First name must have at most 70 letters")
    .optional(),
  lastName: z
    .string()
    .min(3, "Last name must have at least 3 letters")
    .max(70, "Last name must have at most 70 letters")
    .optional(),
  phone: z.string().optional().or(z.literal("")),
  avatar: z.url("Avatar must be a valid URL").optional().or(z.literal("")),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: basicPasswordSchema,
});

export type LoginInput = z.infer<typeof loginSchema>;
export type UserInput = z.infer<typeof userSchema>;
export type FullUserInput = z.infer<typeof fullUserSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;

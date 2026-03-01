import { z } from "zod/v4";

export const authorSchema = z.object({
  name: z.string().min(1, "Author name is required"),
  bio: z.string().optional(),
});

export const authorUpdateSchema = z.object({
  name: z.string().min(1, "Author name is required").optional(),
  bio: z.string().optional(),
});

export const authorQuerySchema = z.object({
  page: z
    .string()
    .default("1")
    .transform(Number)
    .pipe(z.number().int().min(1, "Page must be a positive integer")),
  limit: z
    .string()
    .default("10")
    .transform(Number)
    .pipe(
      z
        .number()
        .int()
        .min(1, "Limit must be a positive integer")
        .max(100, "Limit cannot exceed 100"),
    ),
  sortBy: z.enum(["createdAt", "name"]).optional().default("createdAt"),
  sortOrder: z
    .enum(["asc", "desc"])
    .optional()
    .default("desc")
    .transform((val) => (val === "asc" ? 1 : -1) as 1 | -1),
  search: z.string().optional(),
});

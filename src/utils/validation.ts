import { z } from "zod";

export const addressSchema = z.object({
  country: z.string(),
  city: z.string(),
  postalCode: z.string(),
});

export const packageSchema = z.object({
  weight: z.number().positive(),
  width: z.number().positive(),
  height: z.number().positive(),
  length: z.number().positive(),
});

export const rateRequestSchema = z.object({
  origin: addressSchema,
  destination: addressSchema,
  package: packageSchema,
  serviceLevel: z.string().optional().default("Standard"),
});
import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ім'я повинне містити мінімум 2 символи.")
    .max(100, "Ім'я занадто довге."),

  phone: z.string().trim().min(10, "Некоректний номер телефону."),

  cars: z.string().trim().min(1, "Введіть коректну кількість авто."),

  region: z.string().trim().min(2, "Оберіть існуючий регіон."),
});

export type Lead = z.infer<typeof leadSchema>;

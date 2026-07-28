import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ім'я повинне містити мінімум 2 символи.")
    .max(100, "Ім'я занадто довге."),

  phone: z.string().trim().min(10, "Некоректний номер телефону."),

  cars: z
    .number({
      error: "Кількість авто повинна бути числом",
    })
    .int({
      error: "Кількість авто повинна бути цілим числом",
    })
    .positive("Кількість авто повинна бути більше 0"),

  region: z.string().trim().min(2, "Оберіть існуючий регіон"),
});

export type Lead = z.infer<typeof leadSchema>;

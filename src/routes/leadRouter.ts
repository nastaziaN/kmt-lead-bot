import { Router } from "express";
import { createLead } from "../services/leadService";
import { Lead, leadSchema } from "../schemas/leadSchema";
import { ZodError } from "zod";

const router = Router();

router.post("/lead", async (req, res) => {
  try {
    const lead = leadSchema.parse(req.body);

    await createLead(lead);

    res.status(200).json({
      success: true,
      message: "Lead sent successfully",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),
      });
    }

    console.error("Lead sending error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;

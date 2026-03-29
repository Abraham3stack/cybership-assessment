import { Request, Response } from "express";
import { rateRequestSchema } from "../utils/validation";
import { RateService } from "../services/rate.service";

export const getRates = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedData = rateRequestSchema.parse(req.body);

    const rateService = new RateService();
    const rates = await rateService.getRates(validatedData);

    res.json({
      rates,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error?.issues || "Invalid request",
    });
  }
};
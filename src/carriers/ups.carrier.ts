import { Carrier } from "./carrier.interface";
import { RateRequest, RateResponse } from "../types/shipping";
import { authService } from "../services/auth.service";

export class UPSCarrier implements Carrier {
  async getRates(data: RateRequest): Promise<RateResponse[]> {

    try {
      const token = await authService.getToken();

      console.log("[UPS] Using token", token);

      const shouldFail = Math.random() < 0.3;

      if (shouldFail) {
        throw new Error("UPS API failed")
      }

      await new Promise((resolve) => setTimeout(resolve, 300));

      return [
        {
          carrier: "UPS",
          price: 25,
          deliveryDays: 3,
        },
      ];
    } catch (error) {
      console.error("UPS error:", error);

      return [];
    }
  }
}
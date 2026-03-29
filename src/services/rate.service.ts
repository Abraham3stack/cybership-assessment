import { RateRequest, RateResponse } from "../types/shipping";
import { UPSCarrier } from "../carriers/ups.carrier"; 
import { Carrier } from "../carriers/carrier.interface";

export class RateService {
  private carriers: Carrier[];

  constructor() {
    this.carriers = [new UPSCarrier()];
  }

  async getRates(data: RateRequest): Promise<RateResponse[]> {
    const results = await Promise.allSettled(
      this.carriers.map((carrier) => carrier.getRates(data))
    );

    return results
      .filter((result) => result.status === "fulfilled")
      .flatMap((result: any) => result.value);
  }
}
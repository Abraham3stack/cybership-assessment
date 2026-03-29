import { RateRequest, RateResponse } from "../types/shipping";

export interface Carrier {
  getRates(data: RateRequest): Promise<RateResponse[]>;
}
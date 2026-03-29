export interface Address {
  country: string;
  city: string;
  postalCode: string;
}

export interface PackageDetails {
  weight: number;
  width: number;
  height: number;
  length: number;
}

export interface RateRequest {
  origin: Address;
  destination: Address;
  package: PackageDetails;
  serviceLevel?: string;
}

export interface RateResponse {
  carrier: string;
  price: number;
  deliveryDays: number;
}
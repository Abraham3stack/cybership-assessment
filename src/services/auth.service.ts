import { resolve } from "node:dns";
import { th } from "zod/v4/locales";

class AuthService {
  private token: string | null = null;
  private expiresAt: number | null = null;

  async getToken(): Promise<string> {
    const now = Date.now();

    // Reuse Token if still valid
    if (this.token && this.expiresAt && now < this.expiresAt) {
      return this.token;
    }

    // Simulate API call
    const newToken = await this.fetchToken();

    this.token = newToken;
    this.expiresAt = now + 60 * 1000;  // 1 min expiry

    return newToken;
  }

  private async fetchToken(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 200));

    return "mocked-ups-token";
  }
}

export const authService = new AuthService();
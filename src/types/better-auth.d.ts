/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InferAPI } from "better-auth";

declare module "better-auth" {
  interface BetterAuthAPI {
    ok: {
      (ctx: {
        method: "POST" | "GET";
        url: string;
        body?: any;
        query?: Record<string, any>;
        params?: Record<string, any>;
      }): Promise<{
        ok: boolean;
        data?: any;
        error?: string;
      }>;
    };
  }

  export interface BetterAuth {
    api: BetterAuthAPI;
  }
}

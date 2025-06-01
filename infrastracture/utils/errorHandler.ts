import { APIError } from "../../domain/auth/types";

export function isAPIError(error: unknown): error is APIError {
  return (
    typeof error === "object" &&
    error !== null &&
    "error" in error &&
    typeof (error as any).error?.code === "string"
  );
}

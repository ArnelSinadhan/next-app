import { login } from "../../infrastracture/auth/api";
import { isAPIError } from "../../infrastracture/utils/errorHandler";

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResult {
  success: boolean;
  errorCode?: string;
  errorMessage?: string;
  data?: any; // or a specific type for user/session data
}

/**
 * The "use case" function that performs login business logic,
 * including validation and calling the API.
 */
export async function loginUseCase(input: LoginInput): Promise<LoginResult> {
  const { email, password } = input;

  if (!email && !password) {
    return {
      success: false,
      errorCode: "MISSING_FIELDS",
      errorMessage: "Email and Password are required",
    };
  }

  if (!email) {
    return {
      success: false,
      errorCode: "MISSING_EMAIL",
      errorMessage: "Email is required",
    };
  }

  if (!password) {
    return {
      success: false,
      errorCode: "MISSING_PASSWORD",
      errorMessage: "Password is required",
    };
  }

  try {
    const data = await login(email, password);
    localStorage.setItem("access_token", data.access_token);
    return {
      success: true,
      data,
    };
  } catch (error: unknown) {
    // You can inspect error here or use your isAPIError util
    if (isAPIError(error)) {
      if (error.error.code === "INVALID_CREDENTIALS") {
        4;
        return {
          success: false,
          errorCode: "INVALID_CREDENTIALS",
          errorMessage: "Invalid email or password",
        };
      }
    }
    // Return error info for the UI layer to interpret
    return {
      success: false,
      errorCode: "API_ERROR",
      errorMessage: "Login failed due to API error",
    };
  }
}

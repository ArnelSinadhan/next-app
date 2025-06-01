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

  if (!email || !password) {
    return {
      success: false,
      errorCode: !email ? "MISSING_EMAIL" : "MISSING_PASSWORD",
      errorMessage: `${!email ? "Email" : "Password"} is required`,
    };
  }

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        errorCode: result.errorCode,
        errorMessage: result.errorMessage,
      };
    }

    return {
      success: true,
      data: result,
    };
  } catch {
    return {
      success: false,
      errorCode: "NETWORK_ERROR",
      errorMessage: "Unable to reach the server. Please try again later.",
    };
  }
}

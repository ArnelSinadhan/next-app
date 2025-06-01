"use client";

import { useRouter } from "next/navigation"; // Next.js App Router way
import { useState } from "react";
import { LoginResult, loginUseCase } from "../useCases";

export function useLogin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setApiError(null);
    setEmailError("");
    setPasswordError("");

    setLoading(true);

    const result: LoginResult = await loginUseCase({ email, password });

    setLoading(false);

    if (!result.success) {
      switch (result.errorCode) {
        case "MISSING_FIELDS":
          setEmailError("This field is required");
          setPasswordError("This field is required");
          break;
        case "MISSING_EMAIL":
          setEmailError("This field is required");
          break;
        case "MISSING_PASSWORD":
          setPasswordError("This field is required");
          break;
        case "INVALID_CREDENTIALS":
          setApiError(result.errorMessage ?? "Invalid Email or Password");
        case "API_ERROR":
          setApiError(result.errorMessage ?? "An error occurred");
          break;
        default:
          setApiError(result.errorMessage ?? "Unknown error");
          break;
      }
      return;
    }

    // Success! Redirect to newsfeed page
    router.push("/newsfeed");
  }

  function emailFieldOnchange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    setEmailError("");
  }

  function passwordFieldOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    setPasswordError("");
  }

  return {
    loading,
    apiError,
    email,
    emailError,
    password,
    passwordError,
    onSubmit,
    emailFieldOnchange,
    passwordFieldOnChange,
  };
}

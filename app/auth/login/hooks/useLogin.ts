import { useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  function onSubmit() {
    if (!email && !password) {
      setEmailError("This Field is required");
      setPasswordError("This Field is required");
    }
  }

  return {
    loading,
    apiError,
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    onSubmit,
  };
}

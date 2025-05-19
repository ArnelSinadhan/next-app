"use client";
import EmailTextField from "./components/EmailTextField";
import PasswordTextField from "./components/PasswordTextField";
import SubmitButton from "./components/SubmitButton";
import { useLogin } from "./hooks/useLogin";

function LoginPage() {
  const {
    loading,
    apiError,
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    onSubmit,
  } = useLogin();
  return (
    <div>
      <h1>Login Form</h1>
      <EmailTextField
        email={email}
        error={emailError}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordTextField
        password={password}
        error={passwordError}
        onChange={(e) => setPassword(e.target.value)}
      />

      <SubmitButton onSubmit={onSubmit} />
    </div>
  );
}

export default LoginPage;

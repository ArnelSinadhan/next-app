"use client";

import { useLogin } from "../../../application/auth/hooks/useLogin";
import SubmitButton from "./components/Button";
import EmailTextField from "./components/EmailTextField";
import PasswordTextField from "./components/PasswordTextField";

function LoginPage() {
  const {
    loading,
    apiError,
    email,
    emailError,
    password,
    passwordError,
    onSubmit,
    setEmailField,
    setPasswordField,
  } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>

        {apiError && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
            {apiError}
          </div>
        )}

        <EmailTextField
          email={email}
          error={emailError}
          onChange={setEmailField}
        />

        <PasswordTextField
          password={password}
          error={passwordError}
          onChange={setPasswordField}
        />

        <SubmitButton loading={loading} />
      </form>
    </div>
  );
}

export default LoginPage;

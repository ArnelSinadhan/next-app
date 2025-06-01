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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-200"
      >
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
          <p className="text-sm text-gray-500">Please login to continue</p>
        </div>

        {apiError && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md border border-red-300 text-sm">
            {apiError}
          </div>
        )}

        <div className="space-y-4">
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
        </div>

        <SubmitButton loading={loading} />

        <div className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;

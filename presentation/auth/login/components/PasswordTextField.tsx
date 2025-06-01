import { PasswordFieldProps } from "../../../../domain/auth/types";

function PasswordTextField({ password, error, onChange }: PasswordFieldProps) {
  return (
    <div className="flex flex-col">
      <input
        type="password"
        value={password}
        onChange={onChange}
        placeholder="Enter you password"
        autoComplete="current-password"
        className={`
          px-4 py-2 border rounded-md focus:outline-none focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {typeof error === "string" ? error : "Invalid password"}
        </p>
      )}
    </div>
  );
}

export default PasswordTextField;

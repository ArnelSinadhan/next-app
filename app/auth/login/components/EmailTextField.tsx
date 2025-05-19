import { EmailField } from "../types/authentication_types";

function EmailTextField({ email, error, onChange }: EmailField) {
  return (
    <div className="flex flex-col">
      <input
        type="email"
        value={email}
        onChange={onChange}
        placeholder="Enter your email"
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
          {typeof error === "string" ? error : "Invalid email address"}
        </p>
      )}
    </div>
  );
}

export default EmailTextField;

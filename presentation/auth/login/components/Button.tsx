import { SubmitButtonProps } from "../../../../domain/auth/types";

function SubmitButton({ loading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Logging in..." : "Login"}
    </button>
  );
}

export default SubmitButton;

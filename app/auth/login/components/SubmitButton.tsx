import { SubmitButtonProps } from "../types/authentication_types";

function SubmitButton({ onSubmit }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
    >
      Submit
    </button>
  );
}

export default SubmitButton;

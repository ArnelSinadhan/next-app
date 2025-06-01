import { Button } from "../../../../application/components/ui/button";
import { SubmitButtonProps } from "../../../../domain/auth/types";

function SubmitButton({ loading }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={loading}
      className="w-full"
      variant="default"
    >
      {loading ? "Logging in..." : "Login"}
    </Button>
  );
}

export default SubmitButton;

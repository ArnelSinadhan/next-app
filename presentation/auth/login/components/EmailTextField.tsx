import { Input } from "../../../../application/components/ui/input";
import { Label } from "../../../../application/components/ui/label";
import { EmailField } from "../../../../domain/auth/types";

function EmailTextField({ email, error, onChange }: EmailField) {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={onChange}
        placeholder="Enter your email"
        className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
      />
      {error && (
        <p className="text-sm text-red-600">
          {typeof error === "string" ? error : "Invalid email address"}
        </p>
      )}
    </div>
  );
}

export default EmailTextField;

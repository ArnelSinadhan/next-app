import { Input } from "../../../../application/components/ui/input";
import { Label } from "../../../../application/components/ui/label";
import { PasswordFieldProps } from "../../../../domain/auth/types";

function PasswordTextField({ password, error, onChange }: PasswordFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={onChange}
        placeholder="Enter your password"
        autoComplete="current-password"
        className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
      />
      {error && (
        <p className="text-sm text-red-600">
          {typeof error === "string" ? error : "Invalid password"}
        </p>
      )}
    </div>
  );
}

export default PasswordTextField;

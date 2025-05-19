import React from "react";

export interface EmailField {
  email: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PasswordFieldProps {
  password: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SubmitButtonProps {
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

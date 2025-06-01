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
  loading: boolean;
}

export type APIError = {
  error: {
    code: string;
    message: string;
    status_code: number;
    details?: Record<string, any>;
  };
};

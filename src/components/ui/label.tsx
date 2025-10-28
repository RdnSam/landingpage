// src/components/ui/Label.tsx
import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className = "",
  ...props
}) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm font-medium text-gray-700 ${className}`}
    {...props}
  >
    {children}
  </label>
);

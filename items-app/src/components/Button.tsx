import React, { type ReactNode } from 'react';

export type ButtonVariant = 'success' | 'info' | 'danger' | 'alert' | 'eco';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset"; //  FIX: added button type support
  disabled?: boolean; //  FIX: added disabled state
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = "eco", 
  children, 
  onClick, 
  className = "",
  type = "button", //  FIX
  disabled = false //  FIX
}) => {
  const variants: Record<ButtonVariant, string> = {
    success: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-100 ring-emerald-500/20",
    info: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100 ring-indigo-500/20",
    danger: "bg-rose-500 hover:bg-rose-600 shadow-rose-100 ring-rose-500/20",
    alert: "bg-amber-500 hover:bg-amber-600 shadow-amber-100 ring-amber-500/20",
    
    // already added (good)
    eco: "bg-green-600 hover:bg-green-700 shadow-green-100 ring-green-500/20",
  };

  return (
    <button
      type={type} //  FIX
      onClick={onClick}
      disabled={disabled} //  FIX
      className={`
        px-6 py-3 rounded-2xl font-bold text-white transition-all duration-200
        active:scale-95 shadow-xl hover:-translate-y-1 focus:ring-4
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 //  FIX
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </button>
  );
};
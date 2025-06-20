
import React from 'react';

export const ActionButton = ({ children, onClick, icon: Icon, className = '', disabled = false, type = "button" }: { children: React.ReactNode, onClick?: () => void, icon?: React.ElementType, className?: string, disabled?: boolean, type?: "button" | "submit" | "reset" }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-all duration-200 disabled:bg-orange-800/50 disabled:cursor-not-allowed ${className}`}
  >
    {Icon && <Icon size={18} />}
    {children}
  </button>
);

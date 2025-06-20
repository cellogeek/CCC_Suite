
import React from 'react';

export const GlassCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 sm:p-8 ${className}`}>
    {children}
  </div>
);

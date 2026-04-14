import React, { type ReactNode } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  children, 
  className = "" 
}) => (
  <div className={`
    group bg-white rounded-3xl border border-slate-100 shadow-sm 
    hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 
    overflow-hidden ${className}
  `}>
    
    {/* ❗ FIX: better accessibility (fallback alt text) */}
    {image && (
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title || "Card image"}  // ❗ FIX
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
    )}

    <div className="p-8">
      
      {/* ❗ CHANGE: better semantic heading */}
      {title && (
        <h3 className="text-2xl font-bold text-green-800 mb-3">
          {title}
        </h3>
      )}

      {/* ❗ FIX: spacing consistency */}
      {description && (
        <p className="text-slate-500 leading-relaxed mb-6">
          {description}
        </p>
      )}

      {/* ❗ FIX: prevent empty spacing if no children */}
      {children && <div>{children}</div>}
      
    </div>
  </div>
);
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300',
    outline: 'bg-transparent text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

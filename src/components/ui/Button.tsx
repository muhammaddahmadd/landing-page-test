import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-150 focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-green-500 text-black hover:bg-green-400',
        secondary: 'bg-white text-black hover:bg-neutral-200',
        outline: 'bg-transparent border border-green-500 text-green-500 hover:bg-green-50',
      },
      size: {
        sm: 'px-4 py-1 text-sm',
        md: 'px-8 py-2 text-lg',
        lg: 'px-12 py-3 text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export default Button; 
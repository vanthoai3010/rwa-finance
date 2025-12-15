import React from 'react';

interface NavButtonProps {
  label: string;
  variant?: 'primary' | 'text';
  onClick?: () => void;
  href?: string;
}

export const NavButton: React.FC<NavButtonProps> = ({
  label,
  variant = 'text',
  onClick,
  href = '#',
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-all duration-200';

  const variantStyles = {
    primary: 'bg-[#00B589] text-white hover:bg-teal-600 shadow-sm',
    text: 'text-[#4B5563] hover:text-[#00B589]',
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]}`;

  if (href && href !== '#') {
    return (
      <a href={href} className={buttonClass}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {label}
    </button>
  );
};

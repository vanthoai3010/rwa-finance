"use client";

import { Icon, IconProps } from "@iconify/react";

// ✅ Component IconifyIcon tùy chỉnh, type an toàn
const IconifyIcon = ({ icon, ...rest }: IconProps) => {
  return (
    <Icon
      icon={icon}
      strokeWidth={10}
      {...rest}
      style={{
        strokeWidth: 10,
        ...(rest.style || {}), // giữ nguyên style ngoài
      }}
    />
  );
};

export default IconifyIcon;

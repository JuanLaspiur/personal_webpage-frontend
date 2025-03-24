import { ReactNode } from "react";

interface SocialIconProps {
  icon: ReactNode;
  onClick: () => void;
}

export default function SocialIcon({ icon, onClick }: SocialIconProps) {
  return (
    <span
      className="text-gray-400 hover:text-white text-xl cursor-pointer"
      onClick={onClick}
    >
      {icon}
    </span>
  );
}

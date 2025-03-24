"use client";
import {  ReactNode, useState } from "react";

interface ButtonProps {
  text: string;
  onClick?: ()=>void;
  originalColor?: string;
  hoverColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  icon?: ReactNode;
}

export default function Button({
  text,
  onClick = () => console.log("hola"),
  originalColor = "#fff",
  hoverColor = "#244256",
  textColor = "#244256",
  hoverTextColor = "#fff",
  icon,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? hoverColor : originalColor,
        color: isHovered ? hoverTextColor : textColor,
      }}
      className="px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}

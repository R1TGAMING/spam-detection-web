import type React from "react";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    color?: "green" | "red" | "blue";
}

const colorMap = {
    green: "bg-green-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
};

const Button = ({ children, color, className }: ButtonProps) => {
    const bgColor = color ? colorMap[color] : "bg-gray-500";

    return (
        <button
            className={`${bgColor} outline-0 cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

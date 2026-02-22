import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div className={"rounded  max-w-92 " + className}>
            {children}
        </div>
    );
};

export default Card;

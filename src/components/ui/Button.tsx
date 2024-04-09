import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-3 py-2  rounded-md text-white disabled:opacity-50 ${props.className}`}
    >
      <div
        className="cursor-pointer text-black"
        color="black"
        style={{ backgroundColor: "#FEF9AB", padding: "10px" }}
      >
        <span>Wallet</span>
        <div
          style={{
            height: "12px",
            width: "12px",
            backgroundColor: "red",
            borderRadius: "50%",
            border: "2px solid #FEF9AB",
            display: "inline-block",
            position: "relative",
            top: "-20px",
            left: "15px",
          }}
        ></div>
      </div>
      {children}
    </button>
  );
};

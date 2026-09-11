import type { ReactNode } from "react";

export function SubmitButton({
  onClick,
  bg = "#23824E",
  children,
}: {
  onClick: () => void;
  bg?: string;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: 20,
        width: "100%",
        background: bg,
        color: "#FFFFFF",
        border: "2px solid #DCCBAA",
        borderRadius: 14,
        padding: 20,
        fontSize: 22,
        fontWeight: 800,
        cursor: "pointer",
        boxShadow: "0 3px 10px rgba(72,55,32,.14)",
      }}
    >
      {children}
    </button>
  );
}

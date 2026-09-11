import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#EFE7D6",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          minHeight: "100vh",
          background: "#FCF8F0",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 0 0 1px #E4D8BF, 0 10px 44px rgba(72,55,32,.14)",
          fontSize: 17,
          color: "#1B1712",
        }}
      >
        {children}
      </div>
    </div>
  );
}

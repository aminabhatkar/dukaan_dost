import type { ReactNode } from "react";

export function BottomSheet({
  title,
  subtitle,
  onClose,
  children,
  scrollable = false,
  overlayOpacity = 0.55,
}: {
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
  scrollable?: boolean;
  overlayOpacity?: number;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: `rgba(27,23,18,${overlayOpacity})`,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        zIndex: 40,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: "#FCF8F0",
          borderTop: "2px solid #DCCBAA",
          borderRadius: "20px 20px 0 0",
          padding: "18px 16px 22px",
          animation: "dd-sheet .18s ease-out",
          ...(scrollable ? { maxHeight: "88vh", overflow: "auto" as const } : {}),
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          {subtitle !== undefined ? (
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 24, fontWeight: 800 }}>{title}</div>
              <div style={{ marginTop: 3, fontSize: 16, fontWeight: 600, color: "#6A5C48" }}>{subtitle}</div>
            </div>
          ) : (
            <div style={{ fontSize: 24, fontWeight: 800 }}>{title}</div>
          )}
          <button
            onClick={onClose}
            style={{
              flex: "none",
              background: "#FFFFFF",
              border: "2px solid #DCCBAA",
              borderRadius: 12,
              padding: "10px 14px",
              fontSize: 17,
              fontWeight: 800,
              cursor: "pointer",
              color: "#1B1712",
            }}
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

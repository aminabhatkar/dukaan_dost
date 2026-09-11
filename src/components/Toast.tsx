export function Toast({ text, onUndo }: { text: string; onUndo: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        padding: "0 12px 104px",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 456,
          background: "#1B1712",
          color: "#FCF8F0",
          borderRadius: 14,
          padding: "14px 14px 14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          animation: "dd-up .18s ease-out",
          pointerEvents: "auto",
        }}
      >
        <span style={{ flex: 1, minWidth: 0, fontSize: 19, fontWeight: 700 }}>{text}</span>
        <button
          onClick={onUndo}
          style={{
            flex: "none",
            background: "#E2A63C",
            color: "#3A2A08",
            border: "none",
            borderRadius: 10,
            padding: "12px 16px",
            fontSize: 18,
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Wapas Karein
        </button>
      </div>
    </div>
  );
}

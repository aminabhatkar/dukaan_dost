import { IconChevronLeft } from "./icons";

export function BackButton({ label, onBack }: { label: string; onBack: () => void }) {
  return (
    <button
      onClick={onBack}
      style={{
        flex: "none",
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "#FFFFFF",
        color: "#2A6395",
        border: "none",
        borderRadius: 12,
        padding: "12px 15px",
        fontSize: 17,
        fontWeight: 800,
        cursor: "pointer",
      }}
    >
      <IconChevronLeft size={20} />
      {label}
    </button>
  );
}

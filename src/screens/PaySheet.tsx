import { BottomSheet } from "../components/BottomSheet";

export interface KeyView {
  label: string;
  bg: string;
  onTap: () => void;
}

export function PaySheet({
  payAmountText,
  payHint,
  keys,
  onClose,
  onSubmit,
}: {
  payAmountText: string;
  payHint: string;
  keys: KeyView[];
  onClose: () => void;
  onSubmit: () => void;
}) {
  return (
    <BottomSheet title="Kitna Paisa Mila?" onClose={onClose}>
      <div style={{ marginTop: 14, background: "#FFFFFF", border: "2px solid #DCCBAA", borderRadius: 14, padding: 16, textAlign: "center" }}>
        <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1 }}>{payAmountText}</div>
        <div style={{ marginTop: 4, fontSize: 16, fontWeight: 700, color: "#6A5C48" }}>{payHint}</div>
      </div>
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {keys.map((k, i) => (
          <button
            key={i}
            onClick={k.onTap}
            style={{ background: k.bg, border: "2px solid #DCCBAA", borderRadius: 12, padding: "16px 0", fontSize: 26, fontWeight: 800, cursor: "pointer", color: "#1B1712" }}
          >
            {k.label}
          </button>
        ))}
      </div>
      <button
        onClick={onSubmit}
        style={{ marginTop: 14, width: "100%", background: "#23824E", color: "#FFFFFF", border: "2px solid #DCCBAA", borderRadius: 14, padding: 20, fontSize: 22, fontWeight: 800, cursor: "pointer", boxShadow: "0 3px 10px rgba(72,55,32,.14)" }}
      >
        Khate Mein Likh Dein
      </button>
    </BottomSheet>
  );
}

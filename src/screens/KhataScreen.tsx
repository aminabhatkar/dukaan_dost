import { TopBar } from "../components/TopBar";
import { IconPlus } from "../components/icons";

export interface CustomerRowView {
  id: string;
  name: string;
  phone: string;
  initial: string;
  dueText: string;
  dueLabel: string;
  dueColor: string;
  onOpen: () => void;
}

export function KhataScreen({
  totalDueText,
  customers,
  onGoHome,
  onOpenAddCustomer,
}: {
  totalDueText: string;
  customers: CustomerRowView[];
  onGoHome: () => void;
  onOpenAddCustomer: () => void;
}) {
  return (
    <div style={{ paddingBottom: 196 }}>
      <TopBar backLabel="Ghar" onBack={onGoHome} title="Grahak Khata" />

      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ background: "#B85536", border: "2px solid #DCCBAA", borderRadius: 14, padding: "16px 18px", color: "#FFF6EE", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 19, fontWeight: 700 }}>Kul Baaki Rakam</span>
          <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-.02em" }}>{totalDueText}</span>
        </div>
      </div>

      <div style={{ padding: "16px 16px 0", display: "flex", flexDirection: "column", gap: 12 }}>
        {customers.map((c) => (
          <button
            key={c.id}
            onClick={c.onOpen}
            style={{
              textAlign: "left",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "#FFFFFF",
              border: "2px solid #DCCBAA",
              borderRadius: 14,
              padding: 16,
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(72,55,32,.12)",
              color: "#1B1712",
            }}
          >
            <span style={{ flex: "none", width: 52, height: 52, borderRadius: 26, background: "#F7EEDE", border: "2px solid #DCCBAA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800 }}>
              {c.initial}
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: "block", fontSize: 22, fontWeight: 800, letterSpacing: "-.01em" }}>{c.name}</span>
              <span style={{ display: "block", marginTop: 3, fontSize: 16, fontWeight: 600, color: "#6A5C48" }}>{c.phone}</span>
            </span>
            <span style={{ flex: "none", textAlign: "right" }}>
              <span style={{ display: "block", fontSize: 24, fontWeight: 800, color: c.dueColor }}>{c.dueText}</span>
              <span style={{ display: "block", marginTop: 2, fontSize: 15, fontWeight: 700, color: "#6A5C48" }}>{c.dueLabel}</span>
            </span>
          </button>
        ))}
      </div>

      <div style={{ position: "sticky", bottom: 92, padding: 16, background: "linear-gradient(to top,#FCF8F0 62%,rgba(245,237,223,0))" }}>
        <button
          onClick={onOpenAddCustomer}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            background: "#2A6395",
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
          <IconPlus size={26} />
          Naya Grahak Judiye
        </button>
      </div>
    </div>
  );
}

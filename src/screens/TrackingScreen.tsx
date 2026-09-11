import { TopBar } from "../components/TopBar";
import { IconClock, IconCheck } from "../components/icons";

export interface TrackingOrderView {
  id: string;
  cust: string;
  summary: string;
  totalText: string;
  onToggle: () => void;
}

export function TrackingScreen({
  pendingCount,
  pendingOrders,
  deliveredCount,
  deliveredOrders,
  onGoHome,
}: {
  pendingCount: number;
  pendingOrders: TrackingOrderView[];
  deliveredCount: number;
  deliveredOrders: TrackingOrderView[];
  onGoHome: () => void;
}) {
  return (
    <div style={{ paddingBottom: 112 }}>
      <TopBar backLabel="Ghar" onBack={onGoHome} title="Order Tracking" />

      <div style={{ padding: "18px 16px 8px", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 16, height: 16, borderRadius: 8, background: "#E2A63C", border: "2px solid #DCCBAA" }} />
        <span style={{ fontSize: 22, fontWeight: 800 }}>Delivery Baaki ({pendingCount})</span>
      </div>
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        {pendingOrders.map((o) => (
          <div key={o.id} style={{ background: "#FFFFFF", border: "2px solid #DCCBAA", borderRadius: 16, boxShadow: "0 3px 10px rgba(72,55,32,.14)", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 23, fontWeight: 800, letterSpacing: "-.01em" }}>{o.cust}</div>
                <div style={{ marginTop: 4, fontSize: 16, fontWeight: 600, color: "#6A5C48" }}>{o.summary}</div>
              </div>
              <div style={{ fontSize: 25, fontWeight: 800, whiteSpace: "nowrap" }}>{o.totalText}</div>
            </div>
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: "2px dashed #E8DCC4", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ flex: 1, minWidth: 0, fontSize: 19, fontWeight: 800, lineHeight: 1.25 }}>
                Order Deliver
                <br />
                Ho Gaya?
              </div>
              <button
                onClick={o.onToggle}
                style={{
                  flex: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#E2A63C",
                  border: "2px solid #DCCBAA",
                  borderRadius: 999,
                  padding: "6px 16px 6px 8px",
                  cursor: "pointer",
                  color: "#3A2A08",
                }}
              >
                <span style={{ width: 44, height: 44, borderRadius: 22, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #DCCBAA" }}>
                  <IconClock size={24} color="#3A2A08" />
                </span>
                <span style={{ fontSize: 19, fontWeight: 800 }}>Nahi</span>
              </button>
            </div>
          </div>
        ))}
        {pendingOrders.length === 0 && (
          <div style={{ background: "#F0E6D2", borderRadius: 14, padding: "24px 18px", textAlign: "center", fontSize: 20, fontWeight: 700, color: "#453A2C" }}>
            Sab delivery ho gayi. Shabaash!
          </div>
        )}
      </div>

      <div style={{ padding: "26px 16px 8px", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 16, height: 16, borderRadius: 8, background: "#23824E", border: "2px solid #DCCBAA" }} />
        <span style={{ fontSize: 22, fontWeight: 800 }}>Deliver Ho Gaye ({deliveredCount})</span>
      </div>
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        {deliveredOrders.map((o) => (
          <div key={o.id} style={{ background: "#EEF7F0", border: "3px solid #23824E", borderRadius: 16, padding: "14px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 21, fontWeight: 800, color: "#123D25" }}>{o.cust}</div>
                <div style={{ marginTop: 4, fontSize: 16, fontWeight: 600, color: "#2F5B3F" }}>{o.summary}</div>
              </div>
              <div style={{ fontSize: 23, fontWeight: 800, whiteSpace: "nowrap", color: "#123D25" }}>{o.totalText}</div>
            </div>
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: "2px dashed #C6E0CE", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ flex: 1, minWidth: 0, fontSize: 19, fontWeight: 800, color: "#123D25" }}>Deliver Ho Gaya</div>
              <button
                onClick={o.onToggle}
                style={{
                  flex: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#23824E",
                  border: "2px solid #9CCBAE",
                  borderRadius: 999,
                  padding: "6px 8px 6px 16px",
                  cursor: "pointer",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ fontSize: 19, fontWeight: 800 }}>Haan</span>
                <span style={{ width: 44, height: 44, borderRadius: 22, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #9CCBAE" }}>
                  <IconCheck size={26} color="#23824E" strokeWidth={3.4} />
                </span>
              </button>
            </div>
          </div>
        ))}
        {deliveredOrders.length === 0 && (
          <div style={{ background: "#F0E6D2", borderRadius: 14, padding: "22px 18px", textAlign: "center", fontSize: 19, fontWeight: 700, color: "#453A2C" }}>
            Abhi tak koi delivery mark nahi hui.
          </div>
        )}
      </div>
    </div>
  );
}

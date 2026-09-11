import type { CSSProperties } from "react";
import { IconBookTile, IconBoxTile, IconScooter, IconTag } from "../components/icons";

export function HomeScreen({
  todayCount,
  pendingCount,
  newCount,
  hasNew,
  newCountLabel,
  trackingSub,
  khataSub,
  ratesSub,
  onLogout,
  onGoOrders,
  onGoTracking,
  onGoKhata,
  onGoRates,
}: {
  todayCount: number;
  pendingCount: number;
  newCount: number;
  hasNew: boolean;
  newCountLabel: string;
  trackingSub: string;
  khataSub: string;
  ratesSub: string;
  onLogout: () => void;
  onGoOrders: () => void;
  onGoTracking: () => void;
  onGoKhata: () => void;
  onGoRates: () => void;
}) {
  const tileStyle: CSSProperties = {
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: 16,
    background: "#FFFFFF",
    border: "2px solid #DCCBAA",
    borderRadius: 16,
    padding: "22px 18px",
    cursor: "pointer",
    boxShadow: "0 3px 10px rgba(72,55,32,.14)",
    color: "#1B1712",
  };
  const iconWrap = (bg: string): CSSProperties => ({
    flex: "none",
    width: 60,
    height: 60,
    borderRadius: 14,
    background: bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <div style={{ padding: "0 0 112px" }}>
      <div style={{ background: "#2A6395", padding: "22px 22px 26px", color: "#FFFFFF" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-.01em" }}>DukaanDost</div>
          <button
            onClick={onLogout}
            style={{
              background: "transparent",
              color: "#FFFFFF",
              border: "2px solid rgba(255,252,245,.6)",
              borderRadius: 10,
              padding: "9px 14px",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
        <div style={{ marginTop: 18, fontSize: 19, fontWeight: 600, opacity: 0.95 }}>Aaj ka hisaab</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
          <div style={{ background: "#FFFFFF", borderRadius: 14, padding: "16px 16px 14px", color: "#1B1712" }}>
            <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1, letterSpacing: "-.03em" }}>{todayCount}</div>
            <div style={{ marginTop: 6, fontSize: 17, fontWeight: 700, color: "#453A2C" }}>Aaj ke Order</div>
          </div>
          <div style={{ background: "#E2A63C", borderRadius: 14, padding: "16px 16px 14px", color: "#3A2A08" }}>
            <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1, letterSpacing: "-.03em" }}>{pendingCount}</div>
            <div style={{ marginTop: 6, fontSize: 17, fontWeight: 700 }}>Delivery Baaki</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 18px", display: "flex", flexDirection: "column", gap: 16 }}>
        <button onClick={onGoOrders} style={tileStyle}>
          <span style={iconWrap("#2A6395")}>
            <IconBoxTile size={32} />
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 25, fontWeight: 800, letterSpacing: "-.01em" }}>Naye Orders</span>
            <span style={{ display: "block", marginTop: 3, fontSize: 17, fontWeight: 600, color: "#6A5C48" }}>{newCountLabel}</span>
          </span>
          {hasNew && (
            <span
              style={{
                flex: "none",
                minWidth: 38,
                height: 38,
                padding: "0 10px",
                borderRadius: 19,
                background: "#B85536",
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {newCount}
            </span>
          )}
        </button>

        <button onClick={onGoTracking} style={tileStyle}>
          <span style={iconWrap("#23824E")}>
            <IconScooter size={34} color="#FFFFFF" strokeWidth={2.1} dotR={2.6} />
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 25, fontWeight: 800, letterSpacing: "-.01em" }}>Order Tracking</span>
            <span style={{ display: "block", marginTop: 3, fontSize: 17, fontWeight: 600, color: "#6A5C48" }}>{trackingSub}</span>
          </span>
        </button>

        <button onClick={onGoKhata} style={tileStyle}>
          <span style={iconWrap("#B85536")}>
            <IconBookTile size={32} />
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 25, fontWeight: 800, letterSpacing: "-.01em" }}>Grahak Khata</span>
            <span style={{ display: "block", marginTop: 3, fontSize: 17, fontWeight: 600, color: "#6A5C48" }}>{khataSub}</span>
          </span>
        </button>

        <button onClick={onGoRates} style={tileStyle}>
          <span style={iconWrap("#8A6A22")}>
            <IconTag size={32} />
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 25, fontWeight: 800, letterSpacing: "-.01em" }}>Rate List</span>
            <span style={{ display: "block", marginTop: 3, fontSize: 17, fontWeight: 600, color: "#6A5C48" }}>{ratesSub}</span>
          </span>
        </button>
      </div>
    </div>
  );
}

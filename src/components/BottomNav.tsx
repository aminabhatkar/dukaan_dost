import type { CSSProperties } from "react";
import type { Screen } from "../types";
import { IconBoxNav, IconBookNav, IconHomeNav, IconScooter, IconTag } from "./icons";

const ACCENT = "#2A6395";

function navStyle(active: boolean) {
  return active ? { bg: "#EAF1F7", ink: ACCENT } : { bg: "transparent", ink: "#6A5C48" };
}

export function BottomNav({ screen, onGo }: { screen: Screen; onGo: (s: Screen) => void }) {
  const home = navStyle(screen === "home");
  const orders = navStyle(screen === "orders");
  const tracking = navStyle(screen === "tracking");
  const khata = navStyle(screen === "khata" || screen === "customer");
  const rates = navStyle(screen === "rates");

  const btnStyle = (bg: string, ink: string): CSSProperties => ({
    flex: 1,
    minWidth: 0,
    minHeight: 66,
    background: bg,
    color: ink,
    border: "none",
    borderRadius: 13,
    padding: "8px 2px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    cursor: "pointer",
  });

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 30,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: "#FFFFFF",
          borderTop: "2px solid #E4D8BF",
          boxShadow: "0 -4px 18px rgba(72,55,32,.12)",
          display: "flex",
          gap: 3,
          padding: "8px 7px 11px",
        }}
      >
        <button onClick={() => onGo("home")} style={btnStyle(home.bg, home.ink)}>
          <IconHomeNav />
          <span style={{ fontSize: 13, fontWeight: 800 }}>Ghar</span>
        </button>
        <button onClick={() => onGo("orders")} style={btnStyle(orders.bg, orders.ink)}>
          <IconBoxNav />
          <span style={{ fontSize: 13, fontWeight: 800 }}>Orders</span>
        </button>
        <button onClick={() => onGo("tracking")} style={btnStyle(tracking.bg, tracking.ink)}>
          <IconScooter size={27} color="currentColor" strokeWidth={2.2} dotR={2.4} />
          <span style={{ fontSize: 13, fontWeight: 800 }}>Delivery</span>
        </button>
        <button onClick={() => onGo("khata")} style={btnStyle(khata.bg, khata.ink)}>
          <IconBookNav />
          <span style={{ fontSize: 13, fontWeight: 800 }}>Khata</span>
        </button>
        <button onClick={() => onGo("rates")} style={btnStyle(rates.bg, rates.ink)}>
          <IconTag size={26} color="currentColor" />
          <span style={{ fontSize: 13, fontWeight: 800 }}>Rate List</span>
        </button>
      </div>
    </div>
  );
}

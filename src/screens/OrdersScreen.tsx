import { TopBar } from "../components/TopBar";
import { IconBoxCheck, IconCheck, IconGuess, IconPhone } from "../components/icons";

export interface NewOrderItemView {
  n: string;
  q: string;
  isVague: boolean;
  isFixed: boolean;
  fixedText: string;
  guess: string;
  guessWhy: string;
  onConfirm: () => void;
  onChange: () => void;
}

export interface NewOrderView {
  id: string;
  cust: string;
  phone: string;
  time: string;
  telHref: string;
  totalText: string;
  items: NewOrderItemView[];
  onAccept: () => void;
}

export function OrdersScreen({
  orders,
  onGoHome,
}: {
  orders: NewOrderView[];
  onGoHome: () => void;
}) {
  return (
    <div style={{ paddingBottom: 112 }}>
      <TopBar backLabel="Ghar" onBack={onGoHome} title="Naye Orders" />

      {orders.length > 0 ? (
        <div style={{ padding: "16px 16px 0", display: "flex", flexDirection: "column", gap: 16 }}>
          {orders.map((o) => (
            <div
              key={o.id}
              style={{
                background: "#FFFFFF",
                border: "2px solid #DCCBAA",
                borderRadius: 16,
                boxShadow: "0 3px 10px rgba(72,55,32,.14)",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 16px 12px", borderBottom: "2px dashed #E8DCC4" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-.01em" }}>{o.cust}</div>
                  <div style={{ marginTop: 5, display: "flex", alignItems: "center", gap: 7, fontSize: 16, fontWeight: 700, color: "#453A2C" }}>
                    <IconPhone size={18} color="#23824E" />
                    {o.phone}
                  </div>
                </div>
                <div style={{ flex: "none", background: "#F7EEDE", borderRadius: 9, padding: "7px 10px", fontSize: 15, fontWeight: 800, color: "#453A2C" }}>{o.time}</div>
              </div>

              <div style={{ padding: "12px 16px 4px", display: "flex", flexDirection: "column", gap: 9 }}>
                {o.items.map((it, ix) => (
                  <div key={ix} style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 19, fontWeight: 600 }}>
                      <span>{it.n}</span>
                      <span style={{ fontWeight: 800, whiteSpace: "nowrap" }}>{it.q}</span>
                    </div>
                    {it.isVague && (
                      <div style={{ marginTop: 8, background: "#F7EEDE", border: "2px solid #E2C58F", borderRadius: 12, padding: "12px 13px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <IconGuess size={19} color="#8A6A22" />
                          <span style={{ fontSize: 15, fontWeight: 800, color: "#8A6A22", letterSpacing: ".01em" }}>PICHLI BAAR KA</span>
                        </div>
                        <div style={{ marginTop: 7, fontSize: 20, fontWeight: 800, lineHeight: 1.3 }}>{it.guess}</div>
                        <div style={{ marginTop: 3, fontSize: 16, fontWeight: 600, color: "#6A5C48" }}>{it.guessWhy}</div>
                        <div style={{ marginTop: 11, display: "flex", gap: 9 }}>
                          <button
                            onClick={it.onConfirm}
                            style={{
                              flex: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 8,
                              background: "#FFFFFF",
                              border: "2px solid #9CCBAE",
                              borderRadius: 11,
                              padding: "13px 10px",
                              fontSize: 17,
                              fontWeight: 800,
                              cursor: "pointer",
                              color: "#1A5E39",
                            }}
                          >
                            <IconCheck size={19} color="currentColor" strokeWidth={3.2} />
                            Yahi Hai
                          </button>
                          <button
                            onClick={it.onChange}
                            style={{
                              flex: 1,
                              background: "#FFFFFF",
                              border: "2px solid #DCCBAA",
                              borderRadius: 11,
                              padding: "13px 10px",
                              fontSize: 17,
                              fontWeight: 800,
                              cursor: "pointer",
                              color: "#1B1712",
                            }}
                          >
                            Badlein
                          </button>
                        </div>
                      </div>
                    )}
                    {it.isFixed && (
                      <div style={{ marginTop: 7, display: "flex", alignItems: "center", gap: 8, fontSize: 16, fontWeight: 700, color: "#1A5E39" }}>
                        <IconCheck size={18} color="currentColor" strokeWidth={3.2} />
                        {it.fixedText}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ margin: "14px 16px 0", padding: "12px 14px", background: "#F7EEDE", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 19, fontWeight: 700 }}>Total</span>
                <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-.02em" }}>{o.totalText}</span>
              </div>

              <div style={{ padding: "14px 16px 16px", display: "flex", gap: 10 }}>
                <a
                  href={o.telHref}
                  style={{
                    flex: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "#FFFFFF",
                    border: "2px solid #DCCBAA",
                    borderRadius: 12,
                    padding: "16px 16px",
                    fontSize: 18,
                    fontWeight: 800,
                    textDecoration: "none",
                    color: "#1B1712",
                  }}
                >
                  <IconPhone size={20} color="currentColor" />
                  Phone
                </a>
                <button
                  onClick={o.onAccept}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: "#23824E",
                    color: "#FFFFFF",
                    border: "2px solid #DCCBAA",
                    borderRadius: 12,
                    padding: "16px 12px",
                    fontSize: 20,
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  <IconCheck size={24} color="currentColor" strokeWidth={3.2} />
                  Order Pakka
                </button>
              </div>
            </div>
          ))}
          <div style={{ height: 8 }} />
        </div>
      ) : (
        <div style={{ padding: "56px 30px", textAlign: "center" }}>
          <div style={{ width: 96, height: 96, margin: "0 auto", borderRadius: 24, background: "#F0E6D2", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconBoxCheck size={52} color="#7A6B55" />
          </div>
          <div style={{ marginTop: 22, fontSize: 26, fontWeight: 800 }}>Abhi koi naya order nahi</div>
          <div style={{ marginTop: 10, fontSize: 19, fontWeight: 600, color: "#6A5C48", lineHeight: 1.5 }}>
            Sab order dekh liye. Naya order aayega to yahin dikhega.
          </div>
          <button
            onClick={onGoHome}
            style={{
              marginTop: 26,
              background: "#FFFFFF",
              border: "2px solid #DCCBAA",
              borderRadius: 12,
              padding: "16px 22px",
              fontSize: 19,
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(72,55,32,.14)",
              color: "#1B1712",
            }}
          >
            Ghar Wapas
          </button>
        </div>
      )}
    </div>
  );
}

import { BackButton } from "../components/BackButton";
import { IconPhone, IconPlus, IconRupeeArrow } from "../components/icons";

export interface PrefRowView {
  cat: string;
  item: string;
  note: string;
  onEdit: () => void;
}

export interface EntryRowView {
  label: string;
  sub: string;
  glyph: string;
  dotBg: string;
  dotInk: string;
  amtText: string;
  amtColor: string;
}

export interface CustomerDetailView {
  name: string;
  phone: string;
  telHref: string;
  dueText: string;
  dueColor: string;
  prefCount: number;
  prefs: PrefRowView[];
  entries: EntryRowView[];
}

export function CustomerScreen({
  cust,
  onGoKhata,
  onOpenAddPref,
  onOpenPay,
}: {
  cust: CustomerDetailView;
  onGoKhata: () => void;
  onOpenAddPref: () => void;
  onOpenPay: () => void;
}) {
  return (
    <div style={{ paddingBottom: 200 }}>
      <div style={{ background: "#2A6395", padding: "16px 18px 22px", color: "#FFFFFF" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <BackButton onBack={onGoKhata} label="Khata" />
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-.01em", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {cust.name}
          </div>
        </div>
        <div style={{ marginTop: 16, background: "#FFFFFF", borderRadius: 14, padding: "16px 18px", color: "#1B1712" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#6A5C48" }}>Baaki Rakam</div>
              <div style={{ marginTop: 4, fontSize: 40, fontWeight: 800, letterSpacing: "-.03em", color: cust.dueColor }}>{cust.dueText}</div>
            </div>
            <a
              href={cust.telHref}
              style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "#23824E", border: "2px solid #DCCBAA", borderRadius: 12, padding: "12px 16px", textDecoration: "none", color: "#FFFFFF" }}
            >
              <IconPhone size={24} color="currentColor" />
              <span style={{ fontSize: 15, fontWeight: 800 }}>Phone</span>
            </a>
          </div>
          <div style={{ marginTop: 10, fontSize: 17, fontWeight: 700, color: "#6A5C48" }}>{cust.phone}</div>
        </div>
      </div>

      <div style={{ padding: "20px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <span style={{ fontSize: 22, fontWeight: 800 }}>Iski Pasand</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#6A5C48" }}>{cust.prefCount} saved</span>
      </div>
      <div style={{ padding: "6px 16px 0", fontSize: 16, fontWeight: 600, color: "#6A5C48", lineHeight: 1.5 }}>
        Jab yeh "wahi wala" bolein, app yahi bhejegi.
      </div>
      <div style={{ padding: "12px 16px 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {cust.prefs.map((p, i) => (
          <div key={i} style={{ background: "#FFFFFF", border: "2px solid #DCCBAA", borderRadius: 14, padding: "14px 14px 14px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 3px 10px rgba(72,55,32,.10)" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#6A5C48" }}>{p.cat}</div>
              <div style={{ marginTop: 3, fontSize: 21, fontWeight: 800, letterSpacing: "-.01em" }}>{p.item}</div>
              <div style={{ marginTop: 3, fontSize: 16, fontWeight: 600, color: "#6A5C48" }}>{p.note}</div>
            </div>
            <button
              onClick={p.onEdit}
              style={{ flex: "none", background: "#F7EEDE", border: "2px solid #DCCBAA", borderRadius: 11, padding: "12px 14px", fontSize: 16, fontWeight: 800, cursor: "pointer", color: "#1B1712" }}
            >
              Badlein
            </button>
          </div>
        ))}
        <button
          onClick={onOpenAddPref}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#FFFFFF", border: "2px dashed #C9A96A", borderRadius: 14, padding: 17, fontSize: 19, fontWeight: 800, cursor: "pointer", color: "#8A6A22" }}
        >
          <IconPlus size={22} />
          Pasand Jodiye
        </button>
      </div>

      <div style={{ padding: "26px 16px 0", fontSize: 22, fontWeight: 800 }}>Purana Hisaab</div>
      <div style={{ padding: "14px 16px 0", display: "flex", flexDirection: "column" }}>
        {cust.entries.map((e, i) => (
          <div key={i} style={{ display: "flex", gap: 14 }}>
            <div style={{ flex: "none", width: 46, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ width: 44, height: 44, borderRadius: 22, border: "2px solid #DCCBAA", background: e.dotBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: e.dotInk }}>
                {e.glyph}
              </span>
              <span style={{ flex: 1, width: 3, background: "#E8DCC4", minHeight: 14 }} />
            </div>
            <div style={{ flex: 1, minWidth: 0, paddingBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
                <span style={{ fontSize: 20, fontWeight: 800 }}>{e.label}</span>
                <span style={{ fontSize: 21, fontWeight: 800, whiteSpace: "nowrap", color: e.amtColor }}>{e.amtText}</span>
              </div>
              <div style={{ marginTop: 3, fontSize: 16, fontWeight: 600, color: "#6A5C48" }}>{e.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "sticky", bottom: 92, padding: 16, background: "linear-gradient(to top,#FCF8F0 62%,rgba(245,237,223,0))" }}>
        <button
          onClick={onOpenPay}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, background: "#23824E", color: "#FFFFFF", border: "2px solid #DCCBAA", borderRadius: 14, padding: 20, fontSize: 22, fontWeight: 800, cursor: "pointer", boxShadow: "0 3px 10px rgba(72,55,32,.14)" }}
        >
          <IconRupeeArrow size={26} />
          Paisa Mila — Likhein
        </button>
      </div>
    </div>
  );
}

import { useRef } from "react";
import { TopBar } from "../components/TopBar";
import { IconCheck, IconImage, IconPlus, IconUpload } from "../components/icons";

export interface RateItemView {
  n: string;
  u: string;
  priceText: string;
  onEdit: () => void;
}

export function RateListScreen({
  hasUpload,
  uploadName,
  onFileChosen,
  itemCount,
  rateItems,
  onOpenAddItem,
  onGoHome,
}: {
  hasUpload: boolean;
  uploadName: string;
  onFileChosen: (file: File) => void;
  itemCount: number;
  rateItems: RateItemView[];
  onOpenAddItem: () => void;
  onGoHome: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ paddingBottom: 196 }}>
      <TopBar backLabel="Ghar" onBack={onGoHome} title="Rate List" />

      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ background: "#FFFFFF", border: "2px dashed #C9A96A", borderRadius: 16, padding: "20px 18px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, margin: "0 auto", borderRadius: 16, background: "#F7EEDE", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconImage size={34} color="#8A6A22" />
          </div>
          <div style={{ marginTop: 14, fontSize: 22, fontWeight: 800 }}>Purani list ka photo daaliye</div>
          <div style={{ marginTop: 8, fontSize: 17, fontWeight: 600, color: "#6A5C48", lineHeight: 1.5 }}>
            Copy wali rate list ka photo kheench kar daal dijiye. Hum saare rate bhar denge.
          </div>
          <input
            type="file"
            ref={fileRef}
            onChange={(e) => {
              const f = e.target.files && e.target.files[0];
              if (f) onFileChosen(f);
            }}
            accept="image/*,.csv,.xlsx"
            style={{ display: "none" }}
          />
          <button
            onClick={() => fileRef.current?.click()}
            style={{ marginTop: 16, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#2A6395", color: "#FFFFFF", border: "2px solid #DCCBAA", borderRadius: 14, padding: 18, fontSize: 20, fontWeight: 800, cursor: "pointer", boxShadow: "0 3px 10px rgba(72,55,32,.14)" }}
          >
            <IconUpload size={24} color="currentColor" />
            Photo Ya File Chuniye
          </button>
          {hasUpload && (
            <div style={{ marginTop: 14, background: "#EEF7F0", border: "2px solid #9CCBAE", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, textAlign: "left" }}>
              <IconCheck size={24} color="#23824E" strokeWidth={3.2} />
              <span style={{ flex: 1, minWidth: 0, fontSize: 17, fontWeight: 700, color: "#123D25", overflow: "hidden", textOverflow: "ellipsis" }}>{uploadName}</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ padding: "22px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <span style={{ fontSize: 22, fontWeight: 800 }}>Dukaan ke Rate ({itemCount})</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#6A5C48" }}>Aaj update</span>
      </div>

      <div style={{ padding: "12px 16px 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {rateItems.map((it, i) => (
          <div key={i} style={{ background: "#FFFFFF", border: "2px solid #DCCBAA", borderRadius: 14, padding: "14px 14px 14px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 3px 10px rgba(72,55,32,.10)" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 21, fontWeight: 800, letterSpacing: "-.01em" }}>{it.n}</div>
              <div style={{ marginTop: 3, fontSize: 16, fontWeight: 600, color: "#6A5C48" }}>{it.u}</div>
            </div>
            <div style={{ flex: "none", fontSize: 24, fontWeight: 800, whiteSpace: "nowrap" }}>{it.priceText}</div>
            <button
              onClick={it.onEdit}
              style={{ flex: "none", background: "#F7EEDE", border: "2px solid #DCCBAA", borderRadius: 11, padding: "12px 14px", fontSize: 16, fontWeight: 800, cursor: "pointer", color: "#1B1712" }}
            >
              Badlein
            </button>
          </div>
        ))}
      </div>

      <div style={{ position: "sticky", bottom: 92, padding: 16, background: "linear-gradient(to top,#FCF8F0 62%,rgba(252,248,240,0))" }}>
        <button
          onClick={onOpenAddItem}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, background: "#B85536", color: "#FFFFFF", border: "2px solid #DCCBAA", borderRadius: 14, padding: 20, fontSize: 22, fontWeight: 800, cursor: "pointer", boxShadow: "0 3px 10px rgba(72,55,32,.14)" }}
        >
          <IconPlus size={26} />
          Naya Item Jodiye
        </button>
      </div>
    </div>
  );
}

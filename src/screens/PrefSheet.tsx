import { BottomSheet } from "../components/BottomSheet";
import { Field } from "../components/Field";
import { SubmitButton } from "../components/SubmitButton";
import { IconCheck } from "../components/icons";

export interface CatChipView {
  n: string;
  bg: string;
  ink: string;
  border: string;
  onPick: () => void;
}

export interface PrefChoiceView {
  n: string;
  sub: string;
  picked: boolean;
  isTop: boolean;
  bg: string;
  border: string;
  dotBorder: string;
  dotBg: string;
  onPick: () => void;
}

export function PrefSheet({
  title,
  subtitle,
  prefCat,
  onPrefCatChange,
  catChips,
  noChoices,
  prefChoices,
  prefNote,
  onPrefNoteChange,
  onClose,
  onSubmit,
}: {
  title: string;
  subtitle: string;
  prefCat: string;
  onPrefCatChange: (v: string) => void;
  catChips: CatChipView[];
  noChoices: boolean;
  prefChoices: PrefChoiceView[];
  prefNote: string;
  onPrefNoteChange: (v: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}) {
  return (
    <BottomSheet title={title} subtitle={subtitle} onClose={onClose} scrollable overlayOpacity={0.5}>
      <Field label="Kis cheez ki pasand" marginTop={18} value={prefCat} onChange={onPrefCatChange} placeholder="Jaise: Sabun" />

      <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
        {catChips.map((ch) => (
          <button
            key={ch.n}
            onClick={ch.onPick}
            style={{
              background: ch.bg,
              color: ch.ink,
              border: `2px solid ${ch.border}`,
              borderRadius: 999,
              padding: "11px 16px",
              fontSize: 17,
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            {ch.n}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 18, fontSize: 19, fontWeight: 800 }}>Kaunsa saman</div>
      {noChoices && (
        <div style={{ marginTop: 9, background: "#F7EEDE", border: "2px solid #E8DCC4", borderRadius: 13, padding: "15px 14px", fontSize: 17, fontWeight: 600, color: "#6A5C48", lineHeight: 1.5 }}>
          Upar se cheez chuniye ya naam likhiye, phir yahan brand dikhenge.
        </div>
      )}
      <div style={{ marginTop: 9, display: "flex", flexDirection: "column", gap: 9 }}>
        {prefChoices.map((c) => (
          <button
            key={c.n}
            onClick={c.onPick}
            style={{
              textAlign: "left",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: c.bg,
              border: `2px solid ${c.border}`,
              borderRadius: 13,
              padding: "15px 14px",
              cursor: "pointer",
              color: "#1B1712",
            }}
          >
            <span
              style={{
                flex: "none",
                width: 26,
                height: 26,
                borderRadius: 13,
                border: `2px solid ${c.dotBorder}`,
                background: c.dotBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {c.picked && <IconCheck size={16} color="#FFFFFF" strokeWidth={4} />}
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: "block", fontSize: 20, fontWeight: 800, letterSpacing: "-.01em" }}>{c.n}</span>
              <span style={{ display: "block", marginTop: 2, fontSize: 16, fontWeight: 600, color: "#6A5C48" }}>{c.sub}</span>
            </span>
            {c.isTop && (
              <span style={{ flex: "none", background: "#F7EEDE", borderRadius: 8, padding: "6px 9px", fontSize: 14, fontWeight: 800, color: "#8A6A22" }}>
                SABSE ZYADA
              </span>
            )}
          </button>
        ))}
      </div>

      <Field label="Choti baat (optional)" marginTop={18} value={prefNote} onChange={onPrefNoteChange} placeholder="Jaise: hamesha bada packet" />

      <SubmitButton onClick={onSubmit}>Pasand Save Karein</SubmitButton>
    </BottomSheet>
  );
}

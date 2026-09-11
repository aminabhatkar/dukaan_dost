export function Field({
  label,
  marginTop = 16,
  value,
  onChange,
  placeholder,
  inputMode,
}: {
  label: string;
  marginTop?: number;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  inputMode?: "text" | "numeric";
}) {
  return (
    <>
      <label style={{ display: "block", marginTop, fontSize: 19, fontWeight: 800 }}>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        style={{
          marginTop: 8,
          width: "100%",
          background: "#FFFFFF",
          border: "2px solid #DCCBAA",
          borderRadius: 12,
          padding: "18px 16px",
          fontSize: 22,
          fontWeight: 700,
          color: "#1B1712",
        }}
      />
    </>
  );
}

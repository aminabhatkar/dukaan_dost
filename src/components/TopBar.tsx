import { BackButton } from "./BackButton";

export function TopBar({
  backLabel,
  onBack,
  title,
}: {
  backLabel: string;
  onBack: () => void;
  title: string;
}) {
  return (
    <div
      style={{
        background: "#2A6395",
        padding: "16px 18px 20px",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      <BackButton label={backLabel} onBack={onBack} />
      <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-.01em" }}>{title}</div>
    </div>
  );
}

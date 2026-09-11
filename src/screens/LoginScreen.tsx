import { IconGoogle, IconShop } from "../components/icons";

export function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "36px 28px 44px",
      }}
    >
      <div
        style={{
          width: 88,
          height: 88,
          borderRadius: 20,
          background: "#2A6395",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 26,
        }}
      >
        <IconShop size={50} />
      </div>
      <h1 style={{ margin: 0, fontSize: 42, fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.05, color: "#2A6395" }}>
        DukaanDost
      </h1>
      <p style={{ margin: "14px 0 0", fontSize: 21, fontWeight: 600, lineHeight: 1.45, color: "#453A2C" }}>
        Namaste! Aapki dukaan ka
        <br />
        hisaab, ab phone mein.
      </p>
      <div style={{ height: 44 }} />
      <button
        onClick={onLogin}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          background: "#FFFFFF",
          color: "#1B1712",
          border: "2px solid #DCCBAA",
          borderRadius: 14,
          padding: "22px 18px",
          fontSize: 22,
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 3px 10px rgba(72,55,32,.14)",
        }}
      >
        <IconGoogle size={28} />
        Google Se Login Karein
      </button>
      <p style={{ margin: "20px 0 0", fontSize: 16, fontWeight: 600, color: "#7A6B55", lineHeight: 1.5 }}>
        Bas ek baar login. Password yaad rakhne ki zaroorat nahi.
      </p>
    </div>
  );
}

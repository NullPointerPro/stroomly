export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#faf8f4",
        borderTop: "1px solid #ede9e3",
        paddingTop: 28,
        paddingBottom: 28,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 18,
            color: "#1a1a18",
            letterSpacing: "-0.02em",
          }}
        >
          Stroom<span style={{ color: "#e8622a" }}>ly</span>
        </span>
        <span
          style={{
            color: "#7a7670",
            fontSize: 13,
            fontFamily: "var(--font-body)",
          }}
        >
          © 2026 Stroomly · ilias@stroomly.co
        </span>
      </div>
    </footer>
  );
}

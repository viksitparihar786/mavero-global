export default function InsightsPage() {
  const blogs = [
    {
      title: "How UK Buyers Source Products from India",
      description:
        "A practical guide explaining how UK importers identify and work with Indian sourcing partners.",
    },
    {
      title: "FOB vs DDP: Which Shipping Method is Right?",
      description:
        "Understanding the differences between FOB and DDP for international trade.",
    },
    {
      title: "Why Moradabad is India's Export Hub",
      description:
        "Discover why Moradabad has become a global centre for home décor and metal handicrafts.",
    },
    {
      title: "Supplier Verification Checklist for Importers",
      description:
        "Key checks every importer should perform before finalising an Indian supplier.",
    },
  ];

  return (
    <main
      style={{
        background: "#0b0b0b",
        minHeight: "100vh",
        padding: "80px 20px",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "15px",
            color: "#ffffff",
          }}
        >
          Mavero Insights
        </h1>

        <p
          style={{
            marginBottom: "50px",
            color: "#b89a57",
            fontSize: "18px",
            maxWidth: "700px",
            lineHeight: "1.7",
          }}
        >
          Industry insights, sourcing guides and practical knowledge
          for buyers looking to source quality products from India.
        </p>

        <div
          style={{
            display: "grid",
            gap: "25px",
          }}
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              style={{
                border: "1px solid rgba(184, 154, 87, 0.35)",
                borderRadius: "16px",
                padding: "35px",
                background: "#111111",
              }}
            >
              <h2
                style={{
                  marginBottom: "15px",
                  color: "#ffffff",
                  fontSize: "28px",
                }}
              >
                {blog.title}
              </h2>

              <p
                style={{
                  color: "#cfcfcf",
                  marginBottom: "25px",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                {blog.description}
              </p>

              <button
                style={{
                  background: "#b89a57",
                  color: "#000000",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                Read Insight →
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

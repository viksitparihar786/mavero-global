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
    <main style={{ padding: "60px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Insights</h1>

      <p style={{ marginBottom: "40px", color: "#666" }}>
        Industry insights, sourcing guides and updates from Mavero Global.
      </p>

      <div style={{ display: "grid", gap: "20px" }}>
        {blogs.map((blog, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "25px",
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>{blog.title}</h2>

            <p style={{ color: "#666", marginBottom: "15px" }}>
              {blog.description}
            </p>

            <button
              style={{
                background: "#000",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
              }}
            >
              Coming Soon
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

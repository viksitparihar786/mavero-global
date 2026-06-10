```tsx
export default function InsightsPage() {
  const blogs = [
    {
      title: "How Global Buyers Source Products from India",
      description:
        "Explore how international buyers identify reliable suppliers, manage product development and streamline sourcing operations across India.",
    },
    {
      title:
        "Why Many International Buyers Prefer FOB Terms When Buying from India",
      description:
        "Understand why experienced importers often choose FOB terms for greater control, transparency and flexibility in international logistics.",
    },
    {
      title:
        "Why Moradabad is India's Leading Export Hub for Home Décor, Garden, Furnishings, Lifestyle and Fireside Products",
      description:
        "Discover why buyers around the world source diverse product categories from Moradabad, India's renowned manufacturing and export hub.",
    },
    {
      title:
        "Why Many International Buyers Choose Sourcing Partners in India Instead of Working Directly with Factories",
      description:
        "Learn how sourcing partners simplify supplier management, improve coordination and provide access to a broader network of trusted manufacturers.",
    },
    {
      title:
        "How Mavero Global Helps Overseas Buyers Source from India",
      description:
        "Understand how Mavero Global supports international buyers through supplier identification, product development, quality control and export coordination.",
    },
  ];

  return (
    <main
      style={{
        background: "#f5f2eb",
        minHeight: "100vh",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "15px",
            color: "#111111",
            fontWeight: "400",
          }}
        >
          Mavero Global Insights
        </h1>

        <p
          style={{
            marginBottom: "50px",
            color: "#6b6254",
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "750px",
          }}
        >
          Industry insights, sourcing guides and practical knowledge
          for global buyers looking to source quality products from India.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                border: "1px solid #d9c9a3",
                borderRadius: "16px",
                padding: "35px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <h2
                style={{
                  marginBottom: "15px",
                  color: "#111111",
                  fontSize: "30px",
                  fontWeight: "500",
                  lineHeight: "1.3",
                }}
              >
                {blog.title}
              </h2>

              <p
                style={{
                  color: "#666666",
                  marginBottom: "25px",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                {blog.description}
              </p>

              <button
                style={{
                  background: "#c9a65b",
                  color: "#111111",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
```

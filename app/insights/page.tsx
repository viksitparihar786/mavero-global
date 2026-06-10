export default function InsightsPage() {

  const blogs = [

    {

      title: "How Global Buyers Source Products from India",

      description:

        "Explore how international buyers identify reliable suppliers, manage product development and streamline sourcing operations across India.",

      link: "/insights/how-global-buyers-source-products-from-india",

    },

    {

      title:

        "Why Many International Buyers Prefer FOB Terms When Buying from India",

      description:

        "Understand why experienced importers often choose FOB terms for greater control, transparency and flexibility in international logistics.",

      link: "#",

    },

    {

      title:

        "Why Moradabad is India's Leading Export Hub for Home Décor, Garden, Furnishings, Lifestyle and Fireside Products",

      description:

        "Discover why buyers around the world source diverse product categories from Moradabad, India's renowned manufacturing and export hub.",

      link: "#",

    },

    {

      title:

        "Why Many International Buyers Choose Sourcing Partners in India Instead of Working Directly with Factories",

      description:

        "Learn how sourcing partners simplify supplier management, improve coordination and provide access to a broader network of trusted manufacturers.",

      link: "#",

    },

    {

      title:

        "How Mavero Global Helps Overseas Buyers Source from India",

      description:

        "Understand how Mavero Global supports international buyers through supplier identification, product development, quality control and export coordination.",

      link: "#",

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

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header Section */}

        <div style={{ textAlign: "center", marginBottom: "70px" }}>

          <p

            style={{

              color: "#c9a65b",

              letterSpacing: "3px",

              fontSize: "14px",

              marginBottom: "12px",

              fontWeight: "600",

            }}

          >

            INSIGHTS

          </p>



          <h1

            style={{

              fontSize: "56px",

              marginBottom: "20px",

              color: "#111111",

              fontWeight: "500",

              fontFamily: "Georgia, serif",

            }}

          >

            Mavero Global Insights

          </h1>



          <div

            style={{

              width: "70px",

              height: "2px",

              background: "#c9a65b",

              margin: "0 auto 25px",

            }}

          />



          <p

            style={{

              color: "#6b6254",

              fontSize: "18px",

              lineHeight: "1.8",

              maxWidth: "750px",

              margin: "0 auto",

            }}

          >

            Industry insights, sourcing guides and practical knowledge

            for global buyers looking to source quality products from India.

          </p>

        </div>



        {/* Blog Cards */}

        <div

          style={{

            display: "grid",

            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",

            gap: "30px",

          }}

        >

          {blogs.map((blog, index) => (

            <div

              key={index}

              style={{

                background: "#ffffff",

                border: "1px solid #e5ddcf",

                borderRadius: "14px",

                padding: "40px",

                minHeight: "360px",

                display: "flex",

                flexDirection: "column",

                boxShadow: "0 6px 20px rgba(0,0,0,0.04)",

              }}

            >

              <h2

                style={{

                  marginBottom: "20px",

                  color: "#111111",

                  fontSize: "30px",

                  fontWeight: "500",

                  lineHeight: "1.4",

                  fontFamily: "Georgia, serif",

                }}

              >

                {blog.title}

              </h2>



              <p

                style={{

                  color: "#666666",

                  marginBottom: "30px",

                  lineHeight: "1.8",

                  fontSize: "16px",

                  flexGrow: 1,

                }}

              >

                {blog.description}

              </p>



              <a

                href={blog.link || "#"}

                style={{

                  color: "#b78d36",

                  textDecoration: "none",

                  fontWeight: "600",

                  fontSize: "15px",

                }}

              >

                Read More →

              </a>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}

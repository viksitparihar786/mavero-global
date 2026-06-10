import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Buyers Prefer FOB Terms When Importing from India | Mavero Global",
  description:
    "Learn why many international buyers choose FOB shipping terms when sourcing from India. Understand responsibilities, advantages, risks and how FOB compares with other Incoterms.",
  openGraph: {
    title:
      "Why Many International Buyers Prefer FOB Terms When Buying from India",
    description:
      "Learn why many international buyers choose FOB shipping terms when sourcing from India. Understand responsibilities, advantages, risks and how FOB compares with other Incoterms.",
    url: "https://www.maveroglobal.com/insights/why-many-international-buyers-prefer-fob-terms-when-buying-from-india",
    siteName: "Mavero Global",
    type: "article",
  },
  alternates: {
    canonical:
      "https://www.maveroglobal.com/insights/why-many-international-buyers-prefer-fob-terms-when-buying-from-india",
  },
};

const faqs = [
  {
    question: "What does FOB mean in shipping?",
    answer:
      "FOB stands for Free On Board. It is an internationally recognised Incoterm that defines the point at which the seller's responsibility ends and the buyer's responsibility begins. Under FOB terms, the seller is responsible for the goods until they are loaded onto the nominated vessel at the agreed port of shipment. From that point, the buyer assumes all risk and costs, including international freight, insurance and import clearance at destination.",
  },
  {
    question: "Is FOB better than DDP?",
    answer:
      "Whether FOB is better than DDP depends entirely on the buyer's circumstances. FOB gives buyers greater control over freight selection, shipping costs and destination logistics, which can be advantageous for buyers with established freight forwarding relationships or significant import volumes. DDP (Delivered Duty Paid) places more responsibility on the seller, which may suit buyers who prefer simplicity or are new to importing. Neither Incoterm is universally superior — the right choice depends on the buyer's experience, logistics capability and the specific trade lane involved.",
  },
  {
    question: "Who pays freight under FOB terms?",
    answer:
      "Under FOB terms, the buyer is responsible for paying international freight costs from the port of loading in India. The seller covers all costs required to deliver the goods to the vessel at the named port, including inland transport within India, export customs clearance and port handling charges up to the point of loading. Once the goods are on board the vessel, the buyer bears all further costs, including ocean or air freight, insurance, destination port charges and import duties.",
  },
  {
    question: "What are the advantages of FOB sourcing from India?",
    answer:
      "The primary advantages of FOB sourcing from India include the ability to select and manage your own freight forwarder, greater transparency over shipping costs, direct control over cargo insurance arrangements, and the ability to consolidate shipments from multiple Indian suppliers under a single freight contract. Buyers with established international logistics operations often find FOB terms enable them to negotiate more competitive freight rates and maintain tighter control over delivery schedules compared to seller-managed shipping arrangements.",
  },
];

export default function FOBTermsIndia() {
  return (
    <main
      style={{
        backgroundColor: "#f5f2eb",
        minHeight: "100vh",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: "#666666",
      }}
    >
      {/* Server-safe hover style for CTA button */}
      <style>{`.mavero-cta-btn:hover { background-color: #b8934a !important; }`}</style>

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#111111",
          padding: "80px 24px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "#c9a65b",
              textTransform: "uppercase",
              marginBottom: "24px",
              borderBottom: "1px solid #c9a65b",
              paddingBottom: "6px",
            }}
          >
            Insights
          </span>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(28px, 5vw, 46px)",
              fontWeight: "400",
              lineHeight: "1.25",
              color: "#ffffff",
              margin: "0 0 28px",
            }}
          >
            Why Many International Buyers Prefer FOB Terms When Buying from India
          </h1>
          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#b0a99a",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Incoterms shape the commercial and logistical foundations of every
            international trade transaction. FOB — Free On Board — remains one
            of the most widely used shipping terms among experienced importers
            sourcing from India, and understanding why can help buyers make more
            informed decisions about their own export arrangements.
          </p>
        </div>
      </section>

      {/* Content Wrapper */}
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {/* Featured Snippet Section */}
        <section
          aria-label="Quick Answer"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            borderLeft: "4px solid #c9a65b",
            padding: "40px 44px",
            marginTop: "56px",
            marginBottom: "48px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "#c9a65b",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            Quick Answer
          </p>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "20px",
              fontWeight: "400",
              color: "#111111",
              margin: "0 0 18px",
              lineHeight: "1.4",
            }}
          >
            Why do international buyers prefer FOB terms when buying from India?
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", margin: "0" }}>
            Many international buyers prefer FOB (Free On Board) terms because
            they gain greater control over freight selection, shipping costs and
            destination logistics while suppliers remain responsible until goods
            are loaded onto the vessel at the agreed Indian port.
          </p>
        </section>

        {/* Main Article */}
        <article
          itemScope
          itemType="https://schema.org/Article"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            padding: "56px 56px 64px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            marginBottom: "48px",
          }}
        >
          {/* Entity Statement */}
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.9",
              color: "#888888",
              borderBottom: "1px solid #ece8e0",
              paddingBottom: "32px",
              marginBottom: "48px",
              fontStyle: "italic",
            }}
          >
            Mavero Global is an India-based sourcing partner supporting
            international buyers across home décor, garden, furnishings,
            lifestyle and fireside product categories. We assist with supplier
            identification, product development coordination, quality oversight
            and export facilitation, helping buyers build dependable supply
            partnerships in India.
          </p>

          {/* H2: What Does FOB Mean */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "26px",
                fontWeight: "400",
                color: "#111111",
                margin: "0 0 20px",
                lineHeight: "1.35",
              }}
            >
              What Does FOB Mean in International Trade?
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              FOB, or Free On Board, is one of the eleven Incoterms published by
              the International Chamber of Commerce and widely used in
              international trade contracts. It defines the precise point at
              which the seller&apos;s obligations end and the buyer&apos;s obligations
              begin — both in terms of cost and risk.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              The FOB Handover Point
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Under FOB terms, the seller is responsible for delivering the
              goods to the nominated port of loading in the country of export —
              in the context of India sourcing, this would typically be a port
              such as Mundra, Nhava Sheva (JNPT), Chennai or Kolkata — and for
              completing all export customs clearance formalities. The seller
              bears all costs and risks until the goods are physically loaded
              onto the vessel.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              Once the goods are on board the vessel, all risk transfers to the
              buyer. From that point, the buyer is responsible for the
              international freight, marine insurance, destination port handling,
              import duties and any onward inland transport costs. This clear
              division makes FOB one of the more straightforward Incoterms to
              administer for experienced importers.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Why Many Buyers Prefer FOB Terms */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "26px",
                fontWeight: "400",
                color: "#111111",
                margin: "0 0 20px",
                lineHeight: "1.35",
              }}
            >
              Why Many Buyers Prefer FOB Terms
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              For buyers with established import operations, FOB terms offer a
              number of practical and commercial advantages that other Incoterms
              do not always provide. The preference for FOB is particularly
              evident among buyers with regular import volumes from India,
              experienced in managing freight and customs arrangements
              independently.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Control Over Freight Selection and Cost
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              One of the most commonly cited reasons buyers favour FOB is that
              it allows them to select and manage their own freight forwarder.
              Buyers who import regularly can negotiate competitive freight rates
              based on their total annual volumes across multiple suppliers and
              origins — an advantage that is lost when the seller arranges
              shipping under terms such as CIF (Cost, Insurance and Freight) or
              DDP.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Consolidation Opportunities
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Buyers sourcing from multiple Indian suppliers can consolidate
              shipments from different manufacturers into a single container or
              booking, reducing per-unit freight costs. This consolidation
              capability is significantly easier to manage when the buyer
              controls the freight arrangement from the outset.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Transparency in Cost Structure
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              FOB pricing allows buyers to clearly separate the product cost
              from the logistics cost. This transparency simplifies cost
              benchmarking across suppliers and helps buyers understand exactly
              what they are paying for at each stage of the supply chain. Under
              seller-managed shipping arrangements, freight and insurance costs
              are often bundled into the product price in ways that are less
              straightforward to scrutinise.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: FOB vs DDP */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "26px",
                fontWeight: "400",
                color: "#111111",
                margin: "0 0 20px",
                lineHeight: "1.35",
              }}
            >
              FOB vs DDP: Understanding the Difference
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              DDP, or Delivered Duty Paid, sits at the opposite end of the
              Incoterms spectrum from FOB. Under DDP, the seller assumes
              responsibility for the entire journey — including international
              freight, insurance and import duties — until the goods are
              delivered to the named destination in the buyer&apos;s country.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              When DDP May Appeal to Buyers
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              DDP can appeal to buyers who are relatively new to importing, have
              limited logistics infrastructure, or prefer a simpler, all-in
              landed cost. It removes the operational complexity of arranging
              international freight and managing import compliance, placing that
              burden on the seller. For smaller volumes or infrequent imports,
              DDP can be an efficient choice.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Why Experienced Buyers Often Prefer FOB
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Buyers with greater import experience frequently move towards FOB
              as their operations mature. The trade-off is taking on more
              logistical responsibility in exchange for greater control,
              visibility and often lower total landed costs. Key differences
              between the two terms include:
            </p>
            <ul
              style={{
                margin: "16px 0 0",
                paddingLeft: "24px",
                fontSize: "16px",
                lineHeight: "2",
                color: "#666666",
              }}
            >
              <li>Under FOB, the buyer selects and pays the freight forwarder directly; under DDP, the seller arranges all logistics</li>
              <li>Under FOB, the buyer arranges and controls cargo insurance; under DDP, the seller is responsible</li>
              <li>Under FOB, import duties and destination clearance are managed by the buyer; under DDP, the seller is liable</li>
              <li>Under FOB, the buyer has direct visibility into freight costs; under DDP, these are embedded in the seller&apos;s price</li>
              <li>Under FOB, consolidation of multiple suppliers into one shipment is straightforward; under DDP, this is typically not possible</li>
            </ul>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "18px 0 0" }}>
              Neither FOB nor DDP is universally the right choice. The most
              appropriate Incoterm depends on the buyer&apos;s experience, their
              internal logistics capability, the volume and frequency of
              shipments and the specific requirements of the destination market.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Responsibilities Under FOB Terms */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "26px",
                fontWeight: "400",
                color: "#111111",
                margin: "0 0 20px",
                lineHeight: "1.35",
              }}
            >
              Responsibilities Under FOB Terms
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              A clear understanding of who is responsible for what under FOB
              terms is essential before agreeing to any export contract. The
              allocation of responsibilities is as follows:
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Seller Responsibilities Under FOB
            </h3>
            <ul
              style={{
                margin: "0 0 24px",
                paddingLeft: "24px",
                fontSize: "16px",
                lineHeight: "2",
                color: "#666666",
              }}
            >
              <li>Manufacturing and preparing goods to agreed specifications</li>
              <li>Packing goods appropriately for export and ocean transit</li>
              <li>Arranging inland transport from production facility to the named port of loading</li>
              <li>Completing all Indian export customs formalities and paying any applicable export duties</li>
              <li>Delivering the goods on board the nominated vessel at the agreed port</li>
              <li>Providing the buyer with proof of shipment and required documentation</li>
            </ul>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Buyer Responsibilities Under FOB
            </h3>
            <ul
              style={{
                margin: "0",
                paddingLeft: "24px",
                fontSize: "16px",
                lineHeight: "2",
                color: "#666666",
              }}
            >
              <li>Nominating the vessel and providing booking details to the seller in good time</li>
              <li>Arranging and paying for international ocean or air freight</li>
              <li>Taking out cargo insurance for the international leg of the journey</li>
              <li>Managing destination port handling and customs clearance</li>
              <li>Paying all applicable import duties, taxes and fees in the destination country</li>
              <li>Arranging onward inland delivery from the destination port</li>
            </ul>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Potential Risks Buyers Should Understand */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "26px",
                fontWeight: "400",
                color: "#111111",
                margin: "0 0 20px",
                lineHeight: "1.35",
              }}
            >
              Potential Risks Buyers Should Understand
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              While FOB terms offer significant advantages for experienced
              buyers, they also come with responsibilities that should not be
              underestimated. Buyers new to importing or those without
              established freight relationships should be aware of the following
              considerations.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Risk Transfer at the Point of Loading
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Under FOB, risk transfers to the buyer at the moment goods are
              loaded onto the vessel at the Indian port. Any loss or damage
              occurring during the international voyage is therefore the
              buyer&apos;s liability. Buyers must ensure they have appropriate
              marine cargo insurance in place before the vessel departs to
              protect against transit risk.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Freight Market Volatility
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Ocean freight rates can fluctuate significantly in response to
              global shipping market conditions. Buyers purchasing FOB are
              exposed to this volatility and should factor it into their landed
              cost calculations, particularly for forward orders with longer
              lead times.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Import Compliance Responsibility
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              FOB buyers are fully responsible for import compliance at
              destination — including accurate classification of goods for
              customs purposes, payment of correct duties and compliance with
              any product-specific import regulations applicable in their market.
              Working with an experienced customs broker or freight forwarder in
              the destination country is advisable for buyers who do not have
              established import teams.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: When FOB May Be the Right Choice */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "26px",
                fontWeight: "400",
                color: "#111111",
                margin: "0 0 20px",
                lineHeight: "1.35",
              }}
            >
              When FOB May Be the Right Choice
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              FOB tends to be most appropriate in the following circumstances,
              though buyers should always assess their own situation and seek
              appropriate guidance for their specific trade context:
            </p>
            <ul
              style={{
                margin: "16px 0 0",
                paddingLeft: "24px",
                fontSize: "16px",
                lineHeight: "2",
                color: "#666666",
              }}
            >
              <li>The buyer has an established relationship with a freight forwarder or logistics provider and can negotiate competitive rates</li>
              <li>The buyer sources from multiple Indian suppliers and wishes to consolidate cargo into shared containers</li>
              <li>The buyer wants full transparency and direct control over shipping costs rather than relying on seller-arranged logistics</li>
              <li>The buyer has in-house or outsourced import compliance capability at destination</li>
              <li>The buyer imports regularly and benefits from volume-based freight arrangements</li>
              <li>The buyer&apos;s destination market has specific import requirements that are better managed by a locally experienced customs broker</li>
            </ul>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Building Strong Export Partnerships Under FOB */}
          <section style={{ marginBottom: "52px" }}>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "26px",
                fontWeight: "400",
                color: "#111111",
                margin: "0 0 20px",
                lineHeight: "1.35",
              }}
            >
              Building Strong Export Partnerships Under FOB
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Choosing FOB terms is as much about the quality of the
              supplier relationship as it is about logistics mechanics. The
              effectiveness of a FOB arrangement depends on the seller reliably
              delivering goods to the port on time, in the correct condition and
              with accurate documentation — and on the buyer providing clear
              vessel nomination and booking details in good time.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              Documentation Accuracy
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Under FOB, the seller is responsible for providing accurate export
              documentation — including the commercial invoice, packing list,
              bill of lading and certificate of origin. Errors or omissions in
              these documents can cause delays at the destination port or
              complications with customs clearance. Buyers should ensure their
              suppliers are experienced in export documentation and understand
              the specific requirements of the destination market.
            </p>
            <h3
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "19px",
                fontWeight: "400",
                color: "#111111",
                margin: "28px 0 14px",
              }}
            >
              The Role of a Sourcing Partner
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              For buyers who are newer to FOB sourcing from India, working with
              an India-based sourcing partner can provide meaningful support in
              managing the supplier-side obligations of a FOB arrangement.
              A sourcing partner can assist with supplier coordination, packing
              specification compliance, pre-shipment quality inspections and
              ensuring export documentation is prepared accurately before cargo
              is loaded — reducing the risk of costly delays or disputes after
              the risk has transferred to the buyer.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Final Thoughts */}
          <section>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "26px",
                fontWeight: "400",
                color: "#111111",
                margin: "0 0 20px",
                lineHeight: "1.35",
              }}
            >
              Final Thoughts on FOB Sourcing from India
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              FOB remains one of the most widely used Incoterms among
              international buyers sourcing from India, and for good reason. It
              provides a clear, well-understood allocation of responsibilities,
              enables buyers to take direct control of their freight and
              logistics costs, and supports the kind of supply chain visibility
              that experienced importers value.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              At the same time, FOB is not the right choice for every buyer or
              every situation. The optimal Incoterm depends on the buyer&apos;s
              experience level, their internal logistics infrastructure, the
              volume and frequency of their imports, and the specific
              requirements of their destination market. Buyers who are newer to
              importing from India may find that starting with a different
              Incoterm arrangement and transitioning to FOB as their operations
              mature is a more practical approach.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              What is consistent regardless of Incoterm is the importance of
              working with suppliers who are experienced in international export,
              and of having reliable on-the-ground coordination in India to
              ensure goods leave the country on time, correctly packed and
              properly documented. This foundation underpins the success of any
              export arrangement, whichever Incoterm is agreed.
            </p>
          </section>
        </article>

        {/* FAQ Section */}
        <section
          aria-label="Frequently Asked Questions"
          itemScope
          itemType="https://schema.org/FAQPage"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            padding: "56px 56px 64px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "#c9a65b",
              textTransform: "uppercase",
              margin: "0 0 16px",
            }}
          >
            FAQs
          </p>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "26px",
              fontWeight: "400",
              color: "#111111",
              margin: "0 0 40px",
              lineHeight: "1.35",
            }}
          >
            Frequently Asked Questions
          </h2>
          <dl style={{ margin: "0" }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                style={{
                  borderTop: index === 0 ? "none" : "1px solid #ece8e0",
                  paddingTop: index === 0 ? "0" : "36px",
                  marginTop: index === 0 ? "0" : "36px",
                }}
              >
                <dt
                  itemProp="name"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#111111",
                    marginBottom: "14px",
                    lineHeight: "1.45",
                  }}
                >
                  {faq.question}
                </dt>
                <dd
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  style={{ margin: "0" }}
                >
                  <p
                    itemProp="text"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.85",
                      margin: "0",
                      color: "#666666",
                    }}
                  >
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CTA Section */}
        <section
          aria-label="Contact Mavero Global"
          id="contact"
          style={{
            background: "linear-gradient(135deg, #111111 0%, #2a2318 100%)",
            borderRadius: "4px",
            padding: "64px 56px",
            textAlign: "center",
            boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "40px",
              height: "1px",
              backgroundColor: "#c9a65b",
              marginBottom: "28px",
            }}
            aria-hidden="true"
          />
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: "400",
              color: "#ffffff",
              margin: "0 0 20px",
              lineHeight: "1.3",
            }}
          >
            Looking to Source Products from India?
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#b0a99a",
              maxWidth: "560px",
              margin: "0 auto 36px",
            }}
          >
            Connect with Mavero Global to discuss sourcing requirements,
            supplier identification, product development and export coordination.
          </p>
          <a
            href="/"
            className="mavero-cta-btn"
            style={{
              display: "inline-block",
              backgroundColor: "#c9a65b",
              color: "#111111",
              textDecoration: "none",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "16px 40px",
              borderRadius: "2px",
              transition: "background-color 0.2s ease",
            }}
          >
            Contact Mavero Global
          </a>
        </section>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline:
                  "Why Many International Buyers Prefer FOB Terms When Buying from India",
                description:
                  "Learn why many international buyers choose FOB shipping terms when sourcing from India. Understand responsibilities, advantages, risks and how FOB compares with other Incoterms.",
                url: "https://www.maveroglobal.com/insights/why-many-international-buyers-prefer-fob-terms-when-buying-from-india",
                publisher: {
                  "@type": "Organization",
                  name: "Mavero Global",
                  url: "https://www.maveroglobal.com",
                },
                author: {
                  "@type": "Organization",
                  name: "Mavero Global",
                },
                about: [
                  {
                    "@type": "Thing",
                    name: "FOB Shipping Terms",
                  },
                  {
                    "@type": "Thing",
                    name: "Incoterms",
                  },
                  {
                    "@type": "Thing",
                    name: "India Export Logistics",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.maveroglobal.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Insights",
                    item: "https://www.maveroglobal.com/insights",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Why Many International Buyers Prefer FOB Terms When Buying from India",
                    item: "https://www.maveroglobal.com/insights/why-many-international-buyers-prefer-fob-terms-when-buying-from-india",
                  },
                ],
              },
            ],
          }),
        }}
      />
    </main>
  );
}

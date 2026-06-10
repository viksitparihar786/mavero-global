import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sourcing Partners vs Direct Factory Buying in India | Mavero Global",
  description:
    "Explore why many international buyers choose to work with sourcing partners in India rather than directly with factories. Understand the advantages, risks and when each approach makes sense.",
  openGraph: {
    title:
      "Why Many International Buyers Choose Sourcing Partners in India Instead of Working Directly with Factories",
    description:
      "Explore why many international buyers choose to work with sourcing partners in India rather than directly with factories. Understand the advantages, risks and when each approach makes sense.",
    url: "https://www.maveroglobal.com/insights/why-many-international-buyers-choose-sourcing-partners-in-india-instead-of-working-directly-with-factories",
    siteName: "Mavero Global",
    type: "article",
  },
  alternates: {
    canonical:
      "https://www.maveroglobal.com/insights/why-many-international-buyers-choose-sourcing-partners-in-india-instead-of-working-directly-with-factories",
  },
};

const faqs = [
  {
    question: "What is the difference between a sourcing partner and a buying agent in India?",
    answer:
      "The terms are often used interchangeably, but there are meaningful distinctions in practice. A buying agent typically acts on behalf of the buyer in a transactional capacity — placing orders, following up on shipments and handling basic communication with factories. A sourcing partner typically plays a broader and more strategic role, supporting supplier identification and evaluation, product development coordination, quality oversight, export facilitation and ongoing supply chain management. The level of involvement, accountability and long-term relationship orientation tends to be greater with a sourcing partner than with a conventional buying agent.",
  },
  {
    question: "Is it cheaper to buy directly from factories in India?",
    answer:
      "Working directly with factories removes the sourcing partner's service fee, which can appear to reduce costs. However, the true cost comparison is more nuanced. Buyers who work without local support often absorb hidden costs elsewhere — through quality failures that require rework or disposal, production delays caused by communication gaps, inefficient supplier switching when problems arise, and the time cost of managing complex overseas relationships without local knowledge. Many buyers find that the cost of good sourcing support is offset by the savings generated through better supplier selection, fewer quality issues and more efficient supply chain management.",
  },
  {
    question: "When should a buyer consider working directly with Indian factories?",
    answer:
      "Working directly with factories in India can be an effective approach for buyers who have already established strong, proven relationships with specific manufacturers over multiple production cycles, who have in-house sourcing or quality assurance teams with India experience, or who are purchasing standardised products with low development complexity and straightforward quality requirements. Buyers in this position often have the institutional knowledge, local contacts and process infrastructure to manage supplier relationships effectively without the need for an intermediary.",
  },
  {
    question: "How does a sourcing partner help with product development in India?",
    answer:
      "A sourcing partner helps with product development by bridging the gap between the buyer's design intent and the manufacturer's production capabilities. This includes translating design briefs or mood board references into technical specifications that factories can work from, coordinating and reviewing sampling rounds, managing feedback communication between the buyer and the supplier, and ensuring that pre-production samples meet the agreed standard before bulk manufacture begins. For buyers developing new product lines or working with multiple suppliers simultaneously, this coordination role can significantly reduce development timelines and the risk of costly production errors.",
  },
];

export default function SourcingPartnersVsDirectFactory() {
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
            Why Many International Buyers Choose Sourcing Partners in India
            Instead of Working Directly with Factories
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
            The decision of whether to work directly with Indian manufacturers
            or to engage a local sourcing partner is one of the most consequential
            choices an international buyer makes. Understanding the genuine
            trade-offs between both approaches helps buyers build supply
            programmes that are fit for their circumstances.
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
            Why do many international buyers use sourcing partners in India
            rather than buying directly from factories?
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", margin: "0" }}>
            Many international buyers choose sourcing partners in India because
            they provide local expertise, pre-vetted supplier networks, product
            development coordination, quality oversight and export facilitation
            that are difficult to replicate from overseas. For buyers without
            established India operations, a sourcing partner significantly
            reduces the risk, complexity and time investment associated with
            building and managing a reliable supply base.
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

          {/* H2: The Core Question */}
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
              Direct Factory Sourcing vs Working with a Sourcing Partner
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              International buyers sourcing from India face a foundational
              question early in their procurement strategy: is it better to
              work directly with manufacturers, or to engage an India-based
              sourcing partner to manage and coordinate the supply relationship
              on their behalf?
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Both approaches have genuine merit. Working directly with factories
              can offer cost and relationship advantages in the right
              circumstances. Working with a sourcing partner provides local
              knowledge, coordination capability and risk management that many
              buyers find essential — particularly in the earlier stages of
              their India sourcing journey or when managing multiple suppliers
              across complex product categories.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              The right answer depends on the buyer&apos;s experience level, the
              complexity of their product requirements, the scale of their
              operations and the internal resources they have available to manage
              overseas supply relationships. This article explores both approaches
              honestly to help buyers make an informed decision.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Supplier Identification */}
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
              The Challenge of Supplier Identification
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Finding the right manufacturing partner in India is rarely
              straightforward. India&apos;s supplier landscape is vast, diverse and
              highly variable in quality, capability and export readiness. Trade
              directories, online platforms and exhibition contacts provide an
              entry point, but the information available through these channels
              is rarely sufficient for a reliable supplier assessment.
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
              What Supplier Evaluation Actually Involves
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              A credible supplier evaluation goes well beyond reviewing a
              website or exchanging emails. It typically requires visiting
              production facilities, assessing manufacturing capacity relative
              to buyer volume requirements, reviewing quality management
              practices, examining existing export credentials and speaking with
              references from current international buyers. For buyers operating
              from the UK, Europe, the United States or the Middle East, the
              time, cost and logistical complexity of conducting this evaluation
              independently is significant.
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
              How Sourcing Partners Reduce Identification Risk
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              A sourcing partner with established presence in the relevant
              manufacturing region brings a pre-existing knowledge of the local
              supplier landscape — including an understanding of which
              manufacturers are genuinely capable of serving international
              buyers and which present well on paper but underperform in
              practice. This institutional knowledge is built over years and is
              one of the most practical advantages a sourcing partner provides.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Product Development Coordination */}
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
              Product Development Coordination
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              For buyers who are not simply reordering established products but
              developing new ranges, the product development stage is where
              sourcing complexity is highest and where the consequences of
              miscommunication are most costly.
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
              Translating Briefs into Production Reality
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Buyers often arrive with design concepts, mood board references or
              existing product specifications they want adapted or developed from
              scratch. Translating these into technical briefs that a factory
              can accurately interpret requires a clear understanding of both
              what the buyer wants and what the manufacturer can realistically
              produce. A sourcing partner sits between these two realities and
              manages the translation process — reducing the back-and-forth that
              consumes time and erodes trust when buyers communicate directly
              across significant distance and, sometimes, language differences.
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
              Managing the Sampling Process
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              Sampling is the critical checkpoint in product development. Most
              professional sourcing programmes involve multiple rounds of review
              and revision before a pre-production sample is approved. A
              sourcing partner can review samples in person before they are
              shipped to the buyer, filtering out obvious non-conformances early
              and providing detailed feedback to the factory — compressing
              development timelines and reducing the cost and delay of shipping
              substandard samples internationally.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Communication Advantages */}
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
              Communication Advantages of Local Representation
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Managing supplier relationships across significant time zone
              differences and cultural contexts is one of the most consistently
              underestimated challenges in international sourcing. Communication
              that appears straightforward in a domestic context can become
              a source of ongoing friction when conducted remotely across
              multiple layers of translation — linguistic, cultural and
              commercial.
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
              Reducing Misunderstandings and Their Consequences
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              In a direct buyer-to-factory relationship managed remotely, a
              misunderstood specification, an ambiguous quality requirement or
              an unresolved question about packaging can persist unnoticed
              through an entire production run. By the time the issue surfaces —
              when goods arrive at destination — the options for resolution are
              limited and the cost to the buyer is significant.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              A sourcing partner with daily or weekly face-to-face engagement
              with the factory can identify and resolve these issues at the
              source — before they affect the finished goods. The value of this
              early intervention is difficult to quantify prospectively but
              becomes immediately apparent to buyers who have experienced a
              costly quality failure attributable to a communication breakdown.
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
              Cultural and Commercial Fluency
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              Beyond language, effective supplier communication in India involves
              an understanding of commercial norms, negotiation conventions and
              relationship-building practices that differ from those familiar to
              buyers in Western markets. A sourcing partner who operates within
              this context day-to-day brings a fluency that enables more
              productive supplier relationships and more effective resolution of
              the inevitable challenges that arise in any supply partnership.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Quality Oversight */}
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
              Quality Oversight and Pre-Shipment Inspection
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Quality management is one of the areas where the presence or
              absence of local support has the most direct and measurable impact
              on sourcing outcomes. Buyers who work without on-the-ground
              quality oversight are effectively relying on the factory to
              self-certify the quality of its own production — an arrangement
              that introduces meaningful risk regardless of how strong the
              supplier relationship appears to be.
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
              The Case for Pre-Shipment Inspection
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Pre-shipment inspection — conducting a physical check of finished
              goods against the approved sample and purchase order specifications
              before they are packed for export — is the most effective point
              at which quality issues can be identified and addressed without
              significant cost to the buyer. Once goods have been shipped, the
              options available to a buyer who discovers quality problems are
              costly, time-consuming and often commercially damaging.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              A sourcing partner can conduct or coordinate pre-shipment
              inspections as a standard part of each production cycle — providing
              buyers with documented evidence of conformance before authorising
              shipment. For buyers managing multiple concurrent orders across
              several suppliers, this oversight function is particularly valuable
              and is difficult to replicate without local representation.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Risk Reduction */}
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
              Risk Reduction Across the Supply Chain
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              International sourcing carries inherent risks at every stage of
              the supply chain — from supplier selection through to export
              logistics. The risks are not eliminated by working with a
              sourcing partner, but they are substantially reduced in several
              critical areas.
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
              <li>
                <strong style={{ color: "#333333", fontWeight: "600" }}>Supplier risk:</strong>{" "}
                Working with pre-evaluated suppliers reduces the likelihood of
                engaging manufacturers who lack the capacity, quality systems or
                export experience to reliably serve international buyers
              </li>
              <li>
                <strong style={{ color: "#333333", fontWeight: "600" }}>Production risk:</strong>{" "}
                Regular production monitoring and milestone check-ins reduce the
                risk of late delivery, specification drift and quality failures
                going undetected until shipment
              </li>
              <li>
                <strong style={{ color: "#333333", fontWeight: "600" }}>Documentation risk:</strong>{" "}
                Accurate export documentation is essential for smooth customs
                clearance at destination; a sourcing partner can review
                documentation before shipment to reduce the risk of errors
                causing costly delays
              </li>
              <li>
                <strong style={{ color: "#333333", fontWeight: "600" }}>Concentration risk:</strong>{" "}
                A sourcing partner with knowledge of multiple suppliers can
                help buyers avoid over-dependence on a single manufacturer and
                build a more resilient supply base over time
              </li>
              <li>
                <strong style={{ color: "#333333", fontWeight: "600" }}>Relationship risk:</strong>{" "}
                When supplier relationships encounter difficulties — as they
                inevitably do at some point — having a locally present
                intermediary who can engage directly with the factory often
                leads to faster and more constructive resolution
              </li>
            </ul>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: Consolidation Benefits */}
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
              Consolidation Benefits for Multi-Supplier Buyers
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Buyers who source across multiple product categories or from
              several different manufacturers face the additional challenge of
              coordinating production timelines, quality checks and shipments
              across a fragmented supplier base. Managing this complexity
              independently from overseas can become a significant operational
              burden as the sourcing programme grows.
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
              A Single Coordination Point
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              A sourcing partner provides a single coordination point for
              multiple supplier relationships — managing production schedules,
              quality timelines and shipping arrangements across the buyer&apos;s
              entire India supply base. This simplifies the buyer&apos;s operational
              workload considerably and reduces the risk of scheduling conflicts
              or missed shipment windows that arise when multiple factory
              relationships are managed in parallel without central oversight.
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
              Shipment Consolidation
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              Where buyers source from multiple suppliers in the same region,
              a sourcing partner can coordinate production timelines to enable
              cargo consolidation — combining goods from different manufacturers
              into shared container loads. This reduces per-unit freight costs
              and simplifies the logistics management at destination, particularly
              for buyers who import on an FOB basis and manage their own freight
              arrangements.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: When Buyers Should Work Directly */}
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
              When Working Directly with Factories May Be the Right Approach
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              It would be a misrepresentation to suggest that a sourcing partner
              is always the right choice for every buyer. There are circumstances
              in which direct factory relationships are well-established, well-managed
              and do not require an intermediary. Buyers in the following
              situations may find that direct sourcing serves them effectively:
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
              <li>
                Buyers who have developed long-standing, proven relationships
                with specific factories over multiple production cycles and have
                a high degree of confidence in their reliability and quality
                consistency
              </li>
              <li>
                Buyers with in-house sourcing or quality assurance teams who
                travel regularly to India and have the operational infrastructure
                to manage supplier relationships at close range
              </li>
              <li>
                Buyers purchasing standardised, low-complexity products with
                well-defined specifications and minimal development requirements
              </li>
              <li>
                Buyers whose volumes are sufficiently large to justify the fixed
                costs of building and maintaining a dedicated internal India
                sourcing operation
              </li>
              <li>
                Buyers who have already completed the initial supplier
                identification and evaluation process and are now managing a
                stable, vetted supply base with established quality systems
              </li>
            </ul>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "18px 0 0" }}>
              Even in these circumstances, some buyers retain a sourcing partner
              in a limited capacity — for pre-shipment inspection, new supplier
              identification or category expansion — rather than as a full
              programme manager.
            </p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #ece8e0", margin: "0 0 52px" }} />

          {/* H2: When Sourcing Partners Add Value */}
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
              When Sourcing Partners Add the Most Value
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              Conversely, the value delivered by a capable sourcing partner is
              most pronounced in the following scenarios — which describe the
              reality of a significant proportion of international buyers
              sourcing from India:
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
              <li>
                Buyers who are establishing a new India sourcing programme and
                do not yet have an established supplier network or local
                knowledge to draw on
              </li>
              <li>
                Buyers developing new product ranges that require active
                sampling coordination, specification management and iterative
                development across multiple factories
              </li>
              <li>
                Buyers sourcing across multiple product categories or suppliers
                simultaneously who need consolidated coordination and oversight
              </li>
              <li>
                Buyers who have experienced quality problems or supplier
                reliability issues in the past and are looking to build a more
                robust and accountable supply programme
              </li>
              <li>
                Buyers whose internal teams have limited bandwidth for the
                day-to-day management of overseas supplier relationships
              </li>
              <li>
                Buyers entering the India market from a different sourcing
                region and needing the contextual knowledge and contacts that
                take years to build independently
              </li>
            </ul>
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
              Making the Right Decision for Your Sourcing Programme
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              The choice between working directly with Indian factories and
              engaging a sourcing partner is not binary — and it is not
              permanent. Many buyers begin their India sourcing journey with
              a sourcing partner, use that relationship to build supplier
              knowledge and supply chain confidence, and then gradually take
              on more direct management of specific factory relationships as
              their experience grows. Others find that retaining a sourcing
              partner in an ongoing capacity continues to deliver value at
              every stage of their programme.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0 0 18px" }}>
              What matters most is an honest assessment of where your
              organisation currently stands: the experience and bandwidth of
              your sourcing team, the complexity of your product requirements,
              the maturity of your existing India supplier relationships and
              the risk tolerance appropriate to your business. The right
              structure is the one that best supports reliable, consistent
              supply — not the one that appears cheapest in isolation.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.85", margin: "0" }}>
              For buyers sourcing home décor, garden, furnishings, lifestyle
              and fireside products from India, the region&apos;s manufacturing
              depth and craft capability represent a genuine and significant
              opportunity. Realising that opportunity consistently, and with
              an acceptable level of risk, is the goal that both approaches
              — done well — are designed to serve.
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
            supplier identification, product development and export coordination
            across home décor, garden, furnishings, lifestyle and fireside
            categories.
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
                  "Why Many International Buyers Choose Sourcing Partners in India Instead of Working Directly with Factories",
                description:
                  "Explore why many international buyers choose to work with sourcing partners in India rather than directly with factories. Understand the advantages, risks and when each approach makes sense.",
                url: "https://www.maveroglobal.com/insights/why-many-international-buyers-choose-sourcing-partners-in-india-instead-of-working-directly-with-factories",
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
                    name: "India Sourcing Partners",
                  },
                  {
                    "@type": "Thing",
                    name: "International Procurement",
                  },
                  {
                    "@type": "Thing",
                    name: "Supply Chain Management",
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
                    name: "Why Many International Buyers Choose Sourcing Partners in India Instead of Working Directly with Factories",
                    item: "https://www.maveroglobal.com/insights/why-many-international-buyers-choose-sourcing-partners-in-india-instead-of-working-directly-with-factories",
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

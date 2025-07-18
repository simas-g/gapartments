import {
  Html,
  Text,
  Container,
  Section,
  Heading,
  Img,
  Link,
} from "@react-email/components";

export default function Confirmation({ name, number, message, link, emailStrings }) {
  // Color scheme
  const colors = {
    primary: "#4F46E5",
    background: "#F9FAFB",
    text: "#1F2937",
    lightText: "#6B7280",
    border: "#E5E7EB",
  };
  const t = emailStrings || {
    subject: 'Gavome jūsų užklausą',
    greeting: 'Sveiki',
    receivedMessage: 'Gavome jūsų užklausą dėl apartamentų ir netrukus su jumis susisieksime.',
    yourInfo: 'Jūsų informacija',
    name: 'Vardas:',
    message: 'Žinutė:',
    number: "Numeris:",
    viewApartments: 'Peržiūrėti apartamentus'
  }
  return (
    <Html>
      <Container
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Header */}
        <Section
          style={{
            backgroundColor: "#d97706",
            borderRadius: "8px 8px 0 0",
            padding: "20px",
            textAlign: "center",
            backgroundImage: "linear-gradient(to right, #d97706, #92400e)",
          }}
        >
          <Img
            style={{
              margin: "0 auto",
            }}
            src="https://gapartments.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
            width={80}
            height={80}
            alt="logo"
          ></Img>
        </Section>

        {/* Main Content */}
        <Section
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderLeft: `1px solid ${colors.border}`,
            borderRight: `1px solid ${colors.border}`,
          }}
        >
          <Heading
            as="h2"
            style={{
              fontSize: "20px",
              color: colors.text,
              marginBottom: "12px",
            }}
          >
            {t.greeting} {name},
          </Heading>

          <Text
            style={{
              fontSize: "16px",
              color: colors.text,
              lineHeight: "24px",
              margin: "16px 0",
            }}
          >
            {t.receivedMessage}
          </Text>

          <Section
            style={{
              backgroundColor: colors.background,
              borderRadius: "8px",
              padding: "20px",
              margin: "24px 0",
              fontSize: "14px",
              color: colors.lightText,
            }}
          >
            <Heading
              as="h3"
              style={{
                fontSize: "16px",
                color: colors.text,
                margin: "0 0 12px 0",
              }}
            >
              {t.yourInfo}
            </Heading>

            <Text
              style={{
                fontSize: "14px",
                color: colors.lightText,
                margin: "8px 8px 0 0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong className="w-full">{t.name}</strong>
            </Text>
            {name}
            <Text
              style={{
                fontSize: "14px",
                color: colors.lightText,
                margin: "8px 8px 0 0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong>{t.message}</strong>
            </Text>
            {message}
                        <Text
              style={{
                fontSize: "14px",
                color: colors.lightText,
                margin: "8px 8px 0 0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong>{t.number}</strong>
            </Text>
            {number}

          </Section>
          
          {link !== "none" && (
            <Link
              href={`${process.env.URL}/${link}`}
              style={{
                backgroundColor: "#d97706",
                borderRadius: "6px",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
                padding: "12px 16px",
                margin: "26px 0",
                cursor: "pointer",
              }}
            >
              {t.viewApartments}
            </Link>
          )}
        </Section>

        {/* Footer */}
        <Section
          style={{
            backgroundColor: colors.background,
            padding: "20px",
            borderRadius: "0 0 8px 8px",
            borderLeft: `1px solid ${colors.border}`,
            borderRight: `1px solid ${colors.border}`,
            borderBottom: `1px solid ${colors.border}`,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: "14px",
              color: colors.lightText,
              margin: "0 0 8px 0",
            }}
          >
            © 2025{" "}
            <Link
              style={{
                color: colors.lightText,
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
              href="https://gapartments.lt/"
            >
              gapartments
            </Link>
          </Text>
        </Section>

        <Text
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: colors.lightText,
            margin: "16px 0",
          }}
        ></Text>
      </Container>
    </Html>
  );
}

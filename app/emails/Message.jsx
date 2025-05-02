import {
  Html,
  Text,
  Container,
  Section,
  Heading,
  Img,
  Link,
} from "@react-email/components";
import { Globe } from "lucide-react";
export default function Message({ name, message, email, property, locale }) {
  // Color scheme
  const colors = {
    primary: "#4F46E5",
    background: "#F9FAFB",
    text: "#1F2937",
    lightText: "#6B7280",
    border: "#E5E7EB",
  };

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
          <Text
            style={{
              fontSize: "18px",
              color: colors.text,
              marginBottom: "12px",
            }}
          >
            Gavote naują užklausą,
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
            <Text style={{
              display: 'flex',
              gap: "2px"
            }}>
              <Globe/>
              {locale || 'LT'}
            </Text>
            <Heading
              as="h3"
              style={{
                fontSize: "16px",
                color: colors.text,
                margin: "0 0 12px 0",
              }}
            >
              Informacija
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
              <strong className="w-full">Vardas:</strong>
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
              <strong className="w-full">El. paštas:</strong>
            </Text>
            {email}

            {property!=="none" && (
              <>
                <Text
                  style={{
                    fontSize: "14px",
                    color: colors.lightText,
                    margin: "8px 8px 0 0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <strong className="w-full">Apartamentai:</strong>
                </Text>
                {property}
              </>
            )}

            <Text
              style={{
                fontSize: "14px",
                color: colors.lightText,
                margin: "8px 8px 0 0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong>Žinutė:</strong>
            </Text>
            {message}
          </Section>
        </Section>

        {/* Footer */}
        <Section
          style={{
            backgroundColor: "#d97706",
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
              color: "white",
              margin: "0 0 8px 0",
            }}
          >
            © 2025{" "}
            <Link
              style={{
                color: "white",
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

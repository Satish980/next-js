import { Metadata } from "next";
// import "./styles.css"

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next.js",
    template: "%s | Tutorial"
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header
          style={{
            top: 0,
            border: "4px solid #87CEEB",
            marginBottom: "24px",
            background: "bisque",
            height: '60px',
            paddingLeft: '10px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <h2>Header</h2>
        </header>
        {children}
        <footer
          style={{
            bottom: 0,
            top: "100%",
            border: "4px solid bisque",
            background: "#87CEEB",
            height: '60px',
            paddingLeft: '10px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            display: 'flex',
            marginTop: 10,
          }}
        >
          <h2>Footer</h2>
        </footer>
      </body>
    </html>
  );
}

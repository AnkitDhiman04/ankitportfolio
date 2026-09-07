import "./globals.css";

export const metadata = {
  title: "Your Name | Frontend Developer & Web Developer",
  description:
    "Portfolio of Ankit Dhiman, a Frontend Developer and Web Developer specializing in modern, responsive, and high-performance websites and web applications using React.js, Next.js, and JavaScript.",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

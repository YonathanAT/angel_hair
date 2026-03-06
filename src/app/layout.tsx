// This is the root layout of the application. It wraps all pages and components with a consistent structure, including a header, footer, and a background image. The CartProvider is used to manage the shopping cart state across the application.
// 
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { CartProvider } from "@/context/shopcarcontext";

export default function RootLayout({children, }: { children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/picture6.jpeg')",
       }}
      >

        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

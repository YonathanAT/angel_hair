import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
export default function RootLayout({children, }: { children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/picture6.jpeg')",
       }}
      >
         <Header />
         <main className="flex-grow">
           {children}
         </main>
        
        <Footer />
      </body>
    </html>
  );
}

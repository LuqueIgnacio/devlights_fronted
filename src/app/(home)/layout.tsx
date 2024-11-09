import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header/>
      <CartProvider>
        {children}
      </CartProvider>
      <Footer/>  
    </>
  );
}

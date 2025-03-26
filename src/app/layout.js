// import { DarkModeProvider } from "../context/DarkModeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <DarkModeProvider> */}
          <Navbar />
          <main>{children}</main> 
          <Footer />
        {/* </DarkModeProvider> */}
      </body>
    </html>
  );
}

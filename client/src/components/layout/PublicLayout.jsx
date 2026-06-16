import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FloatingActions from "./FloatingActions.jsx";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}

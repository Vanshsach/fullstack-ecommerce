import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto p-6 min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;
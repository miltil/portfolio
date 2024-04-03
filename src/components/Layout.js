import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <span className="flex flex-col min-h-screen mx-auto w-full bg-[color:var(--color-neutral-white)]">
      <Header />
        <div className="flex justify-center w-full flex-1">
          <main className="flex flex-col px-5 mt-14 w-full max-w-[480px] md:max-w-[1140px]">
            {children}
          </main>
        </div>
      <Footer />
    </span>
  );
};

export default Layout;

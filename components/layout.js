import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <main className="bg-midnight px-7 flex flex-col fle sm:px-0 text-sunrise min-h-screen ">
      <section className="sm:max-w-3xl sm:mx-auto flex-grow w-full">
        {props.children}
      </section>
      <Footer />
    </main>
  );
}

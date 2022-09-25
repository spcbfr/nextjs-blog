import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <main className="bg-midnnight flex px-7 sm:px-0 flex-col text-sunrise min-h-screen ">
      <section className="sm:max-w-3xl flex-grow sm:mx-auto">
        {props.children}
      </section>
      <Footer />
    </main>
  );
}

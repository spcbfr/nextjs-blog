import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <main className="bg-midnnight flex flex-col text-sunrise min-h-screen ">
      <section className="max-w-3xl flex-grow mx-auto">
        <Navbar />
        {props.children}
      </section>
      <Footer />
    </main>
  );
}

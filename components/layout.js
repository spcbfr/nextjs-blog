import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <main className="bg-zinc-50 px-7 flex flex-col sm:px-0  min-h-screen ">
      <section className="sm:max-w-3xl sm:mx-auto flex-grow w-full">
        {props.children}
      </section>
      <Footer />
    </main>
  );
}

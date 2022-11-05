import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <main className="bg-zinc-50 dark:bg-zinc-900 px-7 selection:bg-indigo-400 dark:text-zinc-100 selection:text-zinc-50 flex flex-col sm:px-0  min-h-screen ">
      <section className="md:max-w-3xl sm:max-w-2xl sm:mx-auto flex-grow w-full">
        {props.children}
      </section>
      <Footer />
    </main>
  );
}

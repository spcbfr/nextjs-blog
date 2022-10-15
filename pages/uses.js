import Layout from "../components/layout";

export default function () {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mt-12 font-display  mb-4 text-center">
        Software and hardware I use
      </h1>
      <p className="text-lg font-semibold mt-3 text-center">Hardware</p>
      <ul className="list-disc">
        <li>
          <b>
            <a
              href="https://system76.com/desktops"
              target={"_blank"}
              className="underline decoration-indigo-600 decoration-2 underline-offset-2"
            >
              System76 Thelio
            </a>
          </b>{" "}
          A desktop machine made by very talented people, not the most speced
          out machine but it's well enough for my use case (programming and very
          light gaming)
        </li>

        <li>
          <b>
            <a
              href="https://pop.system76.com/"
              target={"_blank"}
              className="underline decoration-indigo-600 decoration-2 underline-offset-2"
            >
              Canon EOS Rebel XS
            </a>
          </b>{" "}
          This camera has a very special place in my heart, My dad bought it
          years ago when it first released and he taught me how to use and would
          let me take pictures at weddings and such, a few months ago he gave it
          to me, because he stopped using it
        </li>
      </ul>
      <p className="text-lg mt-3 font-semibold text-center">Software</p>
      <ul className="list-disc">
        <li>
          <b>
            <a
              href="https://pop.system76.com/"
              target={"_blank"}
              className="underline decoration-indigo-600 decoration-2 underline-offset-2"
            >
              Pop_OS!
            </a>
          </b>{" "}
          I am one of the 3% of computer users who run linux as their daily
          driver, and I am pretty proud of it, I chose Pop_OS specificly because
          it's from the same people who made my desktop so it works flawlessly
          with it
        </li>
        <li>
          <b>
            <a
              href="https://obsidian.md"
              target={"_blank"}
              className="underline decoration-indigo-600 decoration-2 underline-offset-2"
            >
              Obsidian
            </a>
          </b>{" "}
          my note taking / knowledge managment tool of choice, it's free and
          stores all of my notes locally in markdown
        </li>

        <li>
          <b>
            <a
              href="https://code.visualstudio.com/"
              target={"_blank"}
              className="underline decoration-indigo-600 decoration-2 underline-offset-2"
            >
              Visual Studio Code
            </a>
          </b>{" "}
          The IDE I use almost everyday for most of my development, occasionally
          I use neovim for small system configuration changes
        </li>

        <li>
          <b>
            <a
              href="https://discord.com/"
              target={"_blank"}
              className="underline decoration-indigo-600 decoration-2 underline-offset-2"
            >
              Discord
            </a>
          </b>{" "}
          To Chat with my friends, also many programs I use host support servers
          on discord so it's pretty useful
        </li>

        <li>
          <b>
            <a
              href="https://spotify.com"
              target={"_blank"}
              className="underline decoration-indigo-600 decoration-2 underline-offset-2"
            >
              Spotify
            </a>
          </b>{" "}
          I enjoy listening to music and I picked spotify simply because it's
          the only music player that has a free plan AND works online AND works
          on my system. but I am currently looking into switching to an offline
          music player
        </li>
        <li>
          <b>
            <a
              href="https://apps.ankiweb.net/"
              target={"_blank"}
              className="underline decoration-indigo-600 decoration-2 underline-offset-2"
            >
              Anki
            </a>
          </b>{" "}
          I use anki when I am trying to learn about a new topic, specificly if
          that topic requries remembering a lot of terms and definitions,
          because it implements the spaced repetition method
        </li>
      </ul>
    </Layout>
  );
}

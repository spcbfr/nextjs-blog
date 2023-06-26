export default function DonationCard() {
  return (
    <p className="font-sans text-lg print:hidden bg-stone-900 text-stone-200 p-3 rounded-lg ">
      if you&apos;ve enjoyed this article,
      <a
        href="https://ko-fi.com/spacebuffer"
        className="ml-1 text-emerald-500 font-bold  !no-underline"
      >
        consider buying me a coffee
      </a>
      , it supports this site and caffeinates me so that I can keep producing
      awesome content!
    </p>
  );
}

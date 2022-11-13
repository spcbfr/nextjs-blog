import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  caption: string;
}
export default function Img(props: Props) {
  return (
    <>
      <figure className="not-prose">
        <Image
          src={props.src}
          className="rounded-lg"
          alt={props.alt}
          height={500}
          width={800}
        />
        <figcaption className=" my-2  font-sans text-zinc-500">
          {props.caption}
        </figcaption>
      </figure>
    </>
  );
}

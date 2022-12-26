import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  caption: string;
}
export default function Img(props: Props) {
  return (
    <>
      <figure className="md:-mx-5">
        <Image
          src={props.src}
          alt={props.alt}
          quality="100"
          className="rounded-md border-2 border-stone-300 md:shadow-lg  shadow-stone-300"
          height={500}
          width={800}
        />
        <figcaption className="my-2 text-center font-sans text-stone-500">
          {props.caption}
        </figcaption>
      </figure>
    </>
  );
}

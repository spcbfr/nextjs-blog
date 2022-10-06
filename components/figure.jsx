export default function Figure(props) {
  return (
    <figure className="rounded-2xl overflow-hidden">
      <img src={props.src} alt={props.caption} />
      <figcaption className=" bg-scott py-2 mt-0 pl-3 text-midnight">
        {props.caption}
      </figcaption>
    </figure>
  );
}

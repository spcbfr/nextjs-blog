export default function Callout(props: any) {
  return (
    <div className="-mt-3">
      <div className="bg-stone-700 text-white w-fit p-1 rounded-lg font-sans relative left-4 font-bold top-4  ">
        {props.title}
      </div>
      <div className="bg-blue-200 border-2 border-stone-700 p-5 rounded-lg ">
        {props.children}
      </div>
    </div>
  );
}

export default function DisplayDate(props: any) {
  const splittedDate = props.datestring.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = splittedDate[2] + " " + months[parseInt(splittedDate[1]) - 1];

  return <time dateTime={props.dateString} {...props}>{date}</time>;
}

interface Props {
  dateString: string;
}

export default function DisplayDate({ dateString }: Props) {
  const splittedDate = dateString.split("-");
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

  return <time dateTime={dateString}>{date}</time>;
}

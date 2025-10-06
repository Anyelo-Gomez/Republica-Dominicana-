import Link from "next/link";

type Props = {
  name?: string;
  route?: string;
  className?: string;
};

export function ButtonLugar(props: Props) {
  return (
    <Link
      href={`${props.route}`}
      role="button"
      className={`btn btn-primary mt-auto ${props.className}`}
    >
      {props.name}
    </Link>
  );
}

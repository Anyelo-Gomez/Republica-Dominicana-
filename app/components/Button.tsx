type Props = {
  name?: string;
  className?: string;
  href?: string;
};

export function Button(props: Props) {
  return (
    <a
      className={`btn btn-primary mt-auto ${props.className}`}
      role="button"
      href={props.href}
      style={{ width: "auto" }}
    >
      {props.name}
    </a>
  );
}

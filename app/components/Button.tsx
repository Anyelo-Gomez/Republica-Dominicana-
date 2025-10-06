"use client";

type Props = {
  name?: string;
  className?: string;
  href?: string;
  OnClick?: () => void;
  id?: number;
};

export function Button(props: Props) {
  return (
    <a
      className={`btn btn-primary mt-auto ${props.className}`}
      role="button"
      href={props.href}
      style={{ width: "auto" }}
      onClick={props.OnClick}
    >
      {props.name}
    </a>
  );
}

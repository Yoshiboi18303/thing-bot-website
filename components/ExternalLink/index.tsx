import { Link } from "@mui/material";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  useMargin?: boolean;
}

export default function ExternalLink(props: ExternalLinkProps) {
  const useMargin =
    props.useMargin === undefined || props.useMargin ? true : false;

  return (
    <>
      <Link
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        fontWeight={600}
        margin={useMargin ? 2 : 0}
      >
        {props.children}
      </Link>
    </>
  );
}

import { Link } from "@mui/material";

interface PageLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function PageLink(props: PageLinkProps) {
  return (
    <>
      <Link href={props.href} fontWeight={600} margin={2}>
        {props.children}
      </Link>
    </>
  );
}

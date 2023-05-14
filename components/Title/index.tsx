import { Typography } from "@mui/material";

interface TitleProps {
  children: React.ReactNode;
  fontSize?: number;
}

export default function Title(props: TitleProps) {
  const size = props.fontSize || 50;

  return (
    <Typography variant="h1" fontWeight={900} fontSize={size} mb={2}>
      {props.children}
    </Typography>
  );
}

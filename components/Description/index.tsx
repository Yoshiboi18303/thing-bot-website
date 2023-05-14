import { Typography } from "@mui/material";

interface DescriptionProps {
  children: React.ReactNode;
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export default function Description(props: DescriptionProps) {
  return (
    <Typography variant="subtitle1" fontWeight={props.fontWeight || 500} mb={5}>
      {props.children}
    </Typography>
  );
}

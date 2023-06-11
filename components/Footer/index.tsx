import React from "react";
import { Box, Typography } from "@mui/material";
import PageLink from "../PageLink";

interface FooterProps {
  isHomePage: boolean;
}

export default function Footer(props: FooterProps) {
  const radius = 12;

  return (
    <section>
      <Box
        sx={{
          backgroundColor: "#333333",
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        }}
      >
        <Typography variant="h6" sx={{ fontSize: 20 }}>
          Yoshiboi18303 does <span style={{ fontSize: 28 }}>NOT</span> condone
          cannibalism in real life.
        </Typography>
        {!props.isHomePage && <PageLink href="/">Back To Home</PageLink>}
      </Box>
    </section>
  );
}

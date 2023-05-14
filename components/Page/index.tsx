import Head from "next/head";
import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import PageLink from "@/components/PageLink";

interface PageProps {
  title: string;
  children: React.ReactNode;
  margin?: number;
  flex?: number;
  /**
   * What to put as the meta description for the page, default: `this.baseDescription`.
   */
  metaDescription?: string;
  isHomePage?: boolean;
}

export default function Page(props: PageProps) {
  const baseDescription =
    "A unique Discord economy bot, with a focus on cannibalism.";

  return (
    <>
      <Head>
        <title>{props.title} - Thing Bot</title>
        <meta
          name="description"
          content={props.metaDescription || baseDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/creator.png" />
      </Head>
      <main>
        <Header />
        <Box
          margin={props.margin || 8}
          sx={{ backgroundColor: "#333333", borderRadius: 8 }}
          flex={props.flex || 0.5}
        >
          {props.children}
        </Box>
        {!props.isHomePage && <PageLink href="/">Back to home</PageLink>}
      </main>
    </>
  );
}

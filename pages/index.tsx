import { Box } from "@mui/material";
import Page from "@/components/Page";
import Entrance from "@/components/Entrance";
import PageLink from "@/components/PageLink";

export default function Home() {
  return (
    <Page title="Home" isHomePage>
      <Entrance
        title="Thing Bot"
        description="A unique Discord economy bot, with a focus on cannibalism."
      />
      <Box flex={0.3} mb={3}>
        <PageLink href="/about">About</PageLink>
        <PageLink href="/commands">Commands</PageLink>
        <PageLink href="/features">Features</PageLink>
        <PageLink href="/info">Information</PageLink>
      </Box>
    </Page>
  );
}

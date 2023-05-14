import { Box, Typography } from "@mui/material";
import Page from "@/components/Page";
import Entrance from "@/components/Entrance";
import ExternalLink from "@/components/ExternalLink";

export default function InformationPage() {
  return (
    <Page title="Information">
      <Entrance
        title="Information"
        description="View some information about Thing Bot and its website here!"
      />
      <Box>
        <Box>
          <Typography variant="h2" fontWeight={800} mb={2}>
            Bot
          </Typography>
          <Box>
            <Typography variant="h5" mb={3}>
              <b>Language:</b>&nbsp;
              <ExternalLink href="https://typescriptlang.org" useMargin={false}>
                TypeScript
              </ExternalLink>
            </Typography>
            <Typography variant="h5" mb={3}>
              <b>Libraries:</b>&nbsp;
              <ExternalLink href="https://discord.js.org" useMargin={false}>
                Discord.js
              </ExternalLink>
              , &nbsp;
              <ExternalLink
                href="https://npmjs.com/package/wokcommands"
                useMargin={false}
              >
                WOKCommands
              </ExternalLink>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" fontWeight={800} mb={2} mt={2}>
              Website
            </Typography>
            <Box>
              <Typography variant="h5" mb={3}>
                <b>Language:</b>&nbsp;
                <ExternalLink
                  href="https://typescriptlang.org"
                  useMargin={false}
                >
                  TypeScript
                </ExternalLink>
              </Typography>
              <Typography variant="h5" mb={3}>
                <b>Made With:</b>&nbsp;
                <ExternalLink href="https://nextjs.org" useMargin={false}>
                  Next.js
                </ExternalLink>
                &nbsp;
                <ExternalLink href="https://reactjs.org" useMargin={false}>
                  <i>(React)</i>
                </ExternalLink>
              </Typography>
              <Typography variant="h5" mb={3}>
                <b>Other Things Used:</b>&nbsp;
                <ExternalLink href="https://mui.com" useMargin={false}>
                  MUI <i>(Material UI)</i>
                </ExternalLink>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}

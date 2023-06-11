import { Box, Typography } from "@mui/material";
import Page from "@/components/Page";
import Entrance from "@/components/Entrance";

interface FunFactProps {
  children: React.ReactNode;
  textMargin?: number;
  boxMargin?: number;
}

function FunFact({ children, textMargin, boxMargin }: FunFactProps) {
  return (
    <Box
      margin={boxMargin || 3}
      sx={{ border: "2px solid #221122", borderRadius: 12 }}
    >
      <Typography variant="body1" margin={textMargin || 2}>
        {children}
      </Typography>
    </Box>
  );
}

export default function AboutPage() {
  const botName = "Thing Bot";
  const creatorName = "Yoshiboi18303";
  const botNameBolded = <b>{botName}</b>;
  const creatorNameBolded = <b>{creatorName}</b>;

  return (
    <Page title="About">
      <Entrance
        title="About"
        description={`View what made ${botName} a thing!`}
      />
      <Box>
        <Typography variant="body1" fontWeight={300} mb={3}>
          {botNameBolded} was developed by {creatorNameBolded}, with the
          original cannibalistic goal. Originally coded in C#, {botNameBolded}{" "}
          was going to be an Economy bot, just with cannibalism as the money
          making technique. The original version of {botNameBolded} was scrapped
          as {creatorNameBolded} had absolutely <b>ZERO</b> experience with C#.
        </Typography>
        <Typography variant="body1" fontWeight={400}>
          This was not the end for {botNameBolded} however. It was eventually
          rewritten with JavaScript, then scrapped again while trying to move it
          over to TypeScript <i>(because JavaScript has some issues)</i>. After
          the second attempt went to dust, {creatorNameBolded} persisted to make{" "}
          {botNameBolded} a thing for everyone! It was eventually{" "}
          <i>
            <b>completely</b>
          </i>{" "}
          remade to use TypeScript and <b>WOKCommands</b>, and is still being
          made to this day!
        </Typography>
        <Box>
          <Typography variant="h2" margin={4} fontWeight={800}>
            Fun Facts
          </Typography>
          <Box flex={0.5} display="flex" flexWrap="wrap">
            <FunFact textMargin={0}>
              {botNameBolded} was intended to be a private joke bot, but was
              made public to add more uniqueness to the world of Discord economy
              bots
            </FunFact>
            <FunFact>
              {botNameBolded} was going to have a custom command handler, but
              due to {creatorNameBolded} having low experience with TypeScript,
              it was moved to WOKCommands.
            </FunFact>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}

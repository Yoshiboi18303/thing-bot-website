import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Page from "@/components/Page";
import Entrance from "@/components/Entrance";

interface IFeature {
  name: string;
  description: React.ReactNode;
  imageUrl: string;
  imageSubtitle?: React.ReactNode;
  biggerHeight?: boolean;
}

function getFormattedDate(date: Date): string {
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
}

const features: IFeature[] = [
  {
    name: "Completely Unique",
    description:
      "This bot is completely unique (as far as I know)! I can bet you haven't seen a bot with this focus.",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1028104425371340851/1106733993472299139/image.png",
  },
  {
    name: "Awesome Items",
    description:
      "There are some awesome items in the bot shop, they might help you out!",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1028104425371340851/1106774262536216678/image.png",
    imageSubtitle: `Image was taken on ${getFormattedDate(
      new Date(2023, 5, 12)
    )}, image may not be accurate.`,
    biggerHeight: true,
  },
  {
    name: "Easy To Learn, Hard To Master",
    description:
      "This bot was designed to make it easy to start, but watch out, there are many little punishments that could hurt you.",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1028104425371340851/1106968303907381339/image.png",
    biggerHeight: true,
  },
  {
    name: "Fully Customizable",
    description:
      "Customize whether you can be interacted with, whether you want to be sent DMs by the bot, as well as your skin, stomach and acid colors with our easy-to-use system!",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1028104425371340851/1106992961381744772/image.png",
    imageSubtitle: (
      <>
        This image only shows the coloring system, the others are part of the{" "}
        <code>toggle</code> command
      </>
    ),
    biggerHeight: true,
  },
];

function Features() {
  return (
    <>
      {features.map((feature, idx) => (
        <Feature key={idx} {...feature} />
      ))}
    </>
  );
}

function Feature(props: IFeature) {
  return (
    <Box
      flex={0.5}
      sx={{
        display: "flex",
      }}
      mb={5}
    >
      <Box mr={3} mt={props.biggerHeight ? 21 : 4} textAlign="right">
        <Typography variant="h3" fontWeight={700} mb={2}>
          {props.name}
        </Typography>
        <Typography variant="body1" fontWeight={300}>
          {props.description}
        </Typography>
      </Box>
      <Box sx={{ float: "right" }}>
        <Image
          src={props.imageUrl}
          alt="Feature"
          width={725}
          height={props.biggerHeight ? 475 : 200}
        />
        {props.imageSubtitle && (
          <>
            <br />
            <Typography variant="caption" fontWeight={200}>
              <i>({props.imageSubtitle})</i>
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}

export default function FeaturesPage() {
  return (
    <Page title="Features">
      <Entrance
        title="Features"
        description="View all the features of Thing Bot here!"
      />
      <Box>
        <Features />
      </Box>
    </Page>
  );
}

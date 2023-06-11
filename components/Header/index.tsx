import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Profile from "../Profile";

export default function Header() {
  const size = 56;
  const radius = 12;

  return (
    <section>
      <Box
        sx={{
          backgroundColor: "#333333",
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
          position: "sticky",
        }}
      >
        <Box ml={3} sx={{ maxWidth: 200 }}>
          <Box flex={0.5} alignItems="left">
            <Image
              src="https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
              alt="Thing Bot Icon"
              width={size}
              height={size}
              style={{
                borderRadius: radius,
                margin: 10,
                border: "3px solid #222222",
              }}
            />
            <Typography
              variant="h4"
              fontWeight={400}
              fontSize={size / 2}
              mt={2.6}
            >
              Thing Bot
            </Typography>
          </Box>
        </Box>
        <Box>
          <Profile />
        </Box>
      </Box>
    </section>
  );
}

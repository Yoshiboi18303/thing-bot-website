import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

type Alignment = "left" | "center" | "right";

interface ProfileProps {
  align?: Alignment;
}

export default function Profile(props: ProfileProps) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button
        onClick={() => signIn("discord")}
        sx={{
          backgroundColor: "#336933",
        }}
      >
        Sign In
      </Button>
    );
  } else {
    return (
      <Box flex={0.4} alignItems={props.align || "right"}>
        <Image
          src={
            session.user?.image ||
            "https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
          }
          alt="User Profile Picture"
          width={36}
          height={36}
          style={{
            borderRadius: 9999,
            margin: 10,
            border: "3px solid #222222",
          }}
        />
        <Typography variant="h4" fontWeight={400} fontSize={25} mt={2.6}>
          {session.user?.name}
        </Typography>
        <Button onClick={() => signOut()} sx={{ backgroundColor: "#FF0033" }}>
          Sign Out
        </Button>
      </Box>
    );
  }
}

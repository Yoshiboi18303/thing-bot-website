import Image from "next/image";
import Title from "../Title";
import Description from "../Description";

interface EntranceProps {
  title: React.ReactNode;
  description: React.ReactNode;
  imageSize?: number;
}

export default function Entrance(props: EntranceProps) {
  const size = props.imageSize || 128;

  return (
    <>
      <Image
        src="https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
        alt="Thing Bot Icon"
        width={size}
        height={size}
        style={{ borderRadius: 20, margin: 10 }}
      />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </>
  );
}

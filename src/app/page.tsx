import { Button, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link href={"/dashboard"}> go to dashboard</Link>
  );
}

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return <UserButton afterSignOutUrl="/" />;
}

"use client";

import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useAuth } from '@/context/user.context';

export default function Home() {
  const { currentUser }: any = useAuth(); // standard auth to allow access
  if (currentUser) {
    redirect("/dashboard");
  }
  else {
    redirect("/login");
  }
  return (
    <>
      <h1>Home</h1>
      <a href="/login">Login stuff</a>
    </>
  );
}

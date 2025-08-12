"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import {useRouter} from "next/navigation";
import {LogOut} from "lucide-react";
import { toast } from "sonner";

export function Logout(){
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!");
    router.refresh();
  };

  return (
    <Button className= "cursor-pointer" variant= "outline" onClick={handleLogout}>
      Logout <LogOut className = "size-4" />
    </Button>
  );
}
import Image from "next/image";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <Image
            src="/logo.png"
            alt="AmrithaKesham Logo"
            width={36}
            height={36}
          />
          <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#394736] tracking-[-0.02em]">
            Amrithakesham
          </span>
        </a>
        <LoginForm />
      </div>
    </div>
  );
}

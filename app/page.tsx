import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col flex-grow items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center text-sm text-foreground">
        <span className="text-xl">
            Task Chronicle
        </span>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <Link href="/login" className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover" >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="animate-in flex flex-col flex-grow gap-8 justify-center opacity-0 max-w-prose text-foreground">
        <div className="flex flex-col items-center">
          <p className="text-3xl lg:text-4xl !leading-tight text-center">
            Track Time, Unleash Productivity!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg lg:text-xl text-center">
            <strong>Task Chronicle</strong> is a user-friendly time tracking
            application designed to assist individuals in efficiently logging
            and managing their working hours. The application will be developed
            using Next.js, Tailwind CSS, chadcn/ui, and Supabase.
          </p>
        </div>
        <div className="flex justify-center text-center text-xs">
          <p>
            Next.js Project by{" "}
            <Link href="https://iagobozza.com/" target="_blank" className="font-bold" > Iago Bozza </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

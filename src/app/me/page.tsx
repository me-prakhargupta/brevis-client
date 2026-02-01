"use client";

import { useState, useEffect } from "react";
import { getUser, toggleVisibility } from "@/services/auth";
import Loading from "@/components/Layout/Loading";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signoutUser } from "@/services/auth";
import { toast } from "sonner";

export default function MePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isPrivate, setIsPrivate] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser();
        console.log(res.data);
        setUser(res.data);
        if(typeof res.data.isPrivate === "boolean") {
          setIsPrivate(res.data.isPrivate);
        }
      } catch (err: any) {
        console.log("Error while fetching user profile: ", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
  return null;
}
  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push("/accounts/signin");
  //   }
  // }, [loading, user]);


  const toggleAccountVisibility = async () => {
    if(isPrivate === null) return null;

    const nextIsPrivate = !isPrivate;
    setIsPrivate(nextIsPrivate);

    try {
      await toggleVisibility(nextIsPrivate);

      toast.success(
        nextIsPrivate ?
        "Your space is quiet now."
        : "Your space is open again."
      );
    } catch(err: any) {
      setIsPrivate(isPrivate);

      toast.error("Something didn’t go through.");
      console.log("Error while changing visibility:", err);
    }
  }

  if (loading) return <Loading />;
  if (!user) return null;

  const signoutHandler = async () => {
      try {
        await signoutUser();
        router.push("/accounts/signin");
        toast("You’ve been logged out. We’ll be here when you return.");
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      }
  };

// const [query, setQuery] = useState("");
// const [foundUser, setFoundUser] = useState<any>(null);
// const [notFound, setNotFound] = useState(false);

// const searchUser = async (value: string) => {
//   setQuery(value);

//   if (!value.trim()) {
//     setFoundUser(null);
//     setNotFound(false);
//     return;
//   }

//   try {
//   const user = await searchUser(query);

//   if (user) {
//     setFoundUser(user);   // user is already the returned object
//     setNotFound(false);
//   } else {
//     setFoundUser(null);
//     setNotFound(true);
//   }
// } catch {
//   setFoundUser(null);
//   setNotFound(true);
// }

// };

  return (
    <main className="relative min-h-screen px-6 py-20 sm:py-16 text-white bg-black overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-[260px] w-[260px] rounded-full bg-orange-400/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-orange-300/8 blur-[120px]" />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto space-y-14">
        <header className="flex items-start gap-5">
          <div className="h-20 w-20 rounded-full overflow-hidden bg-white/5 shrink-0">
            <Image
              src={user.profileImage}
              alt="Your profile photo"
              width={80}
              height={80}
              className="h-full w-full object-cover opacity-90"
              priority/>
          </div>

          <div className="space-y-1">
            <h1 className="text-xl font-extrabold">{user.fullname}</h1>
            <p className="text-sm text-white/70">@{user.username}</p>
            <p className="text-sm text-white/60 mt-2 max-w-md leading-relaxed">{user.about}</p>
          </div>
        </header>


          {/* Search */}
            {/* <section className="relative py-4 px-1"> 

  <div className="absolute flex items-start justify-start pointer-events-none">
    <div className="h-40 rounded-full bg-orange-400/10 blur-[120px]" />
  </div>

  <div className="relative">
    <p className="text-sm text-white/70 font-medium mb-3">
      Thinking of someone?
    </p>

    <div className="relative group">
      <div className="absolute -inset-0.5 rounded-2xl
                      bg-gradient-to-r from-orange-400/5 to-orange-300/10
                      opacity-40 blur
                      group-focus-within:opacity-70 transition" />

      <div className="relative flex items-center rounded-2xl
                      bg-black/80 backdrop-blur-md
                      border border-orange-300/10">

        <svg
          className="ml-4 h-5 w-5 text-white/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>

        <input
          type="text"
          value={query}
          onChange={(e) => searchUser(e.target.value)}
          placeholder="Search people by name or username…"
          className="w-full bg-transparent px-3 py-4 text-sm text-white
                     placeholder-white/40 outline-none"
        />
      </div>
    </div>

    {foundUser && (
      <Link
        href={`/u/${foundUser.username}`}
        className="block mt-3 rounded-xl bg-white/5 hover:bg-white/10
                   border border-white/10 px-4 py-3 transition"
      >
        <p className="text-sm text-white font-medium">
          {foundUser.fullName}
        </p>
        <p className="text-xs text-white/50">
          @{foundUser.username}
        </p>
      </Link>
    )}

    {notFound && (
      <p className="text-xs text-white/40 mt-3">
        No one found by that name. Maybe try a different spelling.
      </p>
    )}

    {!foundUser && !notFound && (
      <p className="text-xs text-white/45 mt-3">
        Type a name and find their quiet corner.
      </p>
    )}
  </div>
            </section> */}


            {/* <section className="relative py-4 px"> 
        <div className="absolute flex items-start justify-start pointer-events-none">
          <div className="h-40 max-w rounded-full bg-orange-400/10 blur-[120px]" />
        </div>

        <div className="relative max-w">
          <p className="text-sm text-white/70 font-medium mb-3">Thinking of someone?</p>

          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-400/5 to-orange-300/10 opacity-40 blur group-focus-within:opacity-70 transition" />

          <div className="relative flex items-center rounded-2xl bg-black/80 backdrop-blur-md border border-orange-300/10">

          <svg className="ml-4 h-5 w-5 text-white/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>

            <input type="text"
            placeholder="Search people by username..."
            className="w-full bg-transparent px-5 py-4 text-sm text-white placeholder-white/40 outline-none"/>
            </div>
          </div>

          <p className="text-xs text-white/45 mt-3">Type a name and find their quiet corner.</p>
        </div>
             </section> */}

        <section className="px">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <div className="space-y-1">
              <p className="text-sm text-white/90">Who can reach you</p>
              <p className="text-xs text-white/45">
              {isPrivate === false
                  ? "Anyone can view your profile, read your thoughts, and send you a message."
                  : "Your space is quiet. Your profile and thoughts are hidden."}
              </p>

            </div>

            <button onClick={toggleAccountVisibility} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${!isPrivate ? "bg-orange-400/80" : "bg-white/20"}`}><span className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform duration-300 ${!isPrivate ? "translate-x-6" : "translate-x-1"}`}/></button>
          </div>
        </section>

        <Link
          href="/me/inbox"
          className="flex items-center justify-between border-b  border-white/10 pb-3 px-2
            hover:border-white/25 transition">
          <div>
            <p className="text-sm text-white">Inbox</p>
            <p className="text-xs text-white/45">
              Things that reached you quietly
            </p>
          </div>

          {user.messagesCount > 0 && (
            <p className="text-xs text-white/40">
              {user.messagesCount} waiting
            </p>
          )}
        </Link>
        <Link
          href="/me/thoughts"
          className="block rounded-2xl bg-gradient-to-r from-white/7 to-white/2
            border border-white/5 px-6 py-5 hover:from-white/9 hover:to-white/4 transition">
          <p className="text-sm font-medium">Your thoughts</p>
          <p className="text-xs text-white/50 mt-1">You’ve written {user.thoughtsCount} reflections</p>
        </Link>

        <footer className="pt-10 px-2 flex items-center justify-between">
          <p className="text-xs text-white/30">This space moves at your pace.</p>

          <button
            onClick={signoutHandler}
            className="text-xs text-white/70 hover:text-white/90 transition">Sign out</button>
        </footer>
      </section>
    </main>
  );
}
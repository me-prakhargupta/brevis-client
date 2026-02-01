"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getPublicThoughts } from "@/services/auth";
import Loading from "@/components/layout/Loading";

type Thought = {
  _id: string;
  content: string;
  createdAt: string;
}

export default function PublicThoughtsPage() {
  const router = useRouter();
  const [openComments, setOpenComments] = useState<string | null>(null);
  const [thoughts, setThoughts] = useState<Thought[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchThoughts = async () => {
    try {
      const res = await getPublicThoughts();
      console.log(res.data);
      setThoughts(res.data);
    } catch(err: any) {
      console.log("Error while fetching thoughts: ", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  useEffect(() => {
    if(!loading && !thoughts) {
      return router.push("/accounts/signin");
    }
  }, [loading, thoughts, router]);

  if(loading) return <Loading/>
  if(!thoughts) return null;

  function timeAgo(dateString: string) {
    const past = new Date(dateString).getTime();
    const now = Date.now();

    const diffMs = now - past;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours   = Math.floor(diffMs / (1000 * 60 * 60));
    const days    = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (seconds < 60) return "just now";
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    if (hours < 24)   return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <section className="max-w-3xl mx-auto space-y-14">
        {/* Header */}
        <header className="space-y-3">

          <h1 className="text-xl sm:text-3xl font-medium">
            Explore <span className="text-orange-400 font-serif italic font-bold">thoughts</span>
          </h1>
          <p className="text-sm text-white/40 max-w-md leading-relaxed">
            Things people chose to leave in the open.  
            You don’t need to respond to everything.
          </p>
        </header>

        {/* Feed */}
        <div className="space-y-12">
          {thoughts.map((t) => (
            <article
              key={t._id}
              className="
                rounded-xl
                bg-white/3
                border border-white/5
                px-6 py-6
                space-y-5
              "
            >
              {/* Content */}
              <p className="text-white/85 leading-relaxed text-[15px]">
                {t.content}
              </p>

              {/* Meta */}
              <p className="text-xs text-white/35">
                Left here · {timeAgo(t.createdAt)}
              </p>

              {/* Reactions (Explore-specific) */}
              {/* <div className="flex items-center gap-6 text-xs text-white/45">
                <button className="hover:text-white/70 transition hover:cursor-pointer">
                  I felt this {t.reactions.felt > 0 && `· ${t.reactions.felt}`}
                </button>
                <button className="hover:text-white/70 transition hover:cursor-pointer">
                  Holding this{" "}
                  {t.reactions.holding > 0 && `· ${t.reactions.holding}`}
                </button>
                <button className="hover:text-white/70 transition hover:cursor-pointer">
                  Let it be{" "}
                  {t.reactions.letting > 0 && `· ${t.reactions.letting}`}
                </button>
              </div> */}

<div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
  {/* Felt */}
  {/* <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition">
    <span>🧡</span>
    <span className="hidden sm:inline">I felt this</span>
    {t.reactions.felt > 0 && (
      <span className="text-white/40">· {t.reactions.felt}</span>
    )}
  </button> */}

  {/* Holding */}
  {/* <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition">
    <span>🫂</span>
    <span className="hidden sm:inline">Holding this</span>
    {t.reactions.holding > 0 && (
      <span className="text-white/40">· {t.reactions.holding}</span>
    )}
  </button> */}

  {/* Let it be */}
  {/* <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition">
    <span>🌿</span>
    <span className="hidden sm:inline">Let it be</span>
    {t.reactions.letting > 0 && (
      <span className="text-white/40">· {t.reactions.letting}</span>
    )}
  </button> */}
</div>


              {/* Actions */}
              <div className="flex items-center gap-6 text-xs text-white/40">
                {/* <button
                  onClick={() =>
                    setOpenComments(
                      openComments === t._id ? null : t._id
                    )
                  }
                  className="hover:text-white/70 transition hover:cursor-pointer"
                >
                  {openComments === t._id
                    ? "Hide responses"
                    : "Read how this landed"}
                </button> */}

                {/* <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `${window.location.origin}/thought/${t._id}`
                    )
                  }
                  className="hover:text-white/70 transition hover:cursor-pointer"
                >
                  Share quietly
                </button> */}
              </div>

              {/* Comments */}
              {/* {openComments === t.id && (
                <div className="pt-4 space-y-4 border-t border-white/10">
                  {t.comments.length > 0 ? (
                    t.comments.map((c) => (
                      <div
                        key={c.id}
                        className="text-sm text-white/70"
                      >
                        <p>{c.text}</p>
                        <p className="text-xs text-white/30 mt-1">
                          {c.time}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-white/30">
                      No one responded yet.
                    </p>
                  )}

                  <input
                    type="text"
                    placeholder="Leave a gentle note…"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm
                      text-white/80 placeholder:text-white/30
                      outline-none focus:bg-white/8 transition"
                  />
                </div>
              )} */}
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-12 text-center">
          <p className="text-xs text-white/30">
            You don’t have to carry everything you read.
          </p>
        </footer>
      </section>
    </main>
  );
}
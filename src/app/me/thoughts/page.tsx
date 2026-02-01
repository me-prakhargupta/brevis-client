"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Layout/Loading";
import { toast } from "sonner";
import { getThoughts, shareThought, deleteThought } from "@/services/auth";

type TThought = {
  _id: string;
  content: string;
  createdAt: string;
  isVisible: string;
};

export default function ThoughtsPage() {
  //Thoughts -> used to fetch user thoughts
  const [thoughts, setThoughts] = useState<TThought[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  //Thought -> Used to save new thought
  const [thought, setThought] = useState("");
  const [sharing, setSharing] = useState(false);
  const [reaction, setReaction] = useState(false);

  const fetchThoughts = async() => {
    try {
      const res = await getThoughts();
      console.log("Fetched thoughts: ", res.data);
      setThoughts(res.data);
    } catch(err: any) {
      console.log("Error while fetching thoughts: ", err);
      setThoughts(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, [])

  const router = useRouter();
  useEffect(() => {
    if(!loading && !thoughts) {
      router.push("/accounts/signin");
    }
  }, [loading, thoughts, router])

  if(loading) return <Loading/>
  if(!thoughts) return null;

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setThought(e.target.value);
  }

  const shareHandler = async () => {
    if(!thought.trim()) {
      return toast.error("Thought cannot be empty or contain only whitespace.");
    }

    setSharing(true);

    try {
      await shareThought(thought);
      toast.success("Your thought has been shared.");
      setThought("");
      fetchThoughts();
      setOpen(false);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to share thought");
    } finally {
      setSharing(false);
    }
  };

const handleDelete = async (id: string) => {
  await deleteThought(id);

  setThoughts(prev => prev?.filter(t => t._id !== id) || null);
};

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
    <main className="min-h-screen bg-black text-white px-6 py-20 sm:py-14">
      <section className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-xl sm:text-3xl font-bold">Your <span className="text-orange-400 font-serif italic font-bold">thoughts</span></h1>
            <p className="text-sm text-white/40">
              What you’ve written, held here.
            </p>
          </div>

          {/* Explore prompt */}
          <section
            className="
              mt-6
              rounded-xl
              bg-gradient-to-r from-white/6 to-white/2
              border border-white/5
              px-6 py-5
              flex items-center justify-between
            "
          >
            <p className="text-sm text-white/70">
              Some thoughts are meant to be seen.
            </p>

            <Link
              href="/me/thoughts/explore"
              className="
                text-xs
                text-white/60
                hover:text-white/90
                transition
                flex items-center gap-1
                hover:cursor-pointer
              "
            >
              Explore
            </Link>
          </section>
        </header>

        
        <section className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-4">

        <button
          onClick={() => setOpen((p) => !p)}
          className="text-sm text-white/60 flex items-start w-full">
          Share your thought
        </button>

        {/* Thoughts sharing input */}

        {open && (<><textarea
                value={thought}
                onChange={changeHandler}
                onFocus={() => setOpen(true)}
                placeholder="Write something you want to put down…"
                rows={4}
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/30 outline-none focus:bg-white/8 transition resize-none"/>

            <div className="flex justify-end">
              <button onClick={shareHandler}
                      disabled={sharing || !thought.trim()}
                      className="text-xs px-4 py-2 rounded-lg bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 disabled:opacity-40 disabled:cursor-not-allowed transition">
                      {sharing ? "Sharing…" : "Share quietly"}
                </button>
              </div></>)}
          </section>
          <div className="space-y-6">
            {thoughts.map((t: any) => (
              <article
                key={t._id}
                className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-4">

                <p className="text-white/80 leading-relaxed">{t.content}</p>

              <div className="flex items-center justify-between text-xs text-white/40">
                <span>{timeAgo(t.createdAt)} {t.createdAt &&  <span className="text-white/70">🧡</span>}</span>

                <div className="flex gap-4">
                  {/* <button className="hover:text-white/70 transition hover:cursor-pointer">
                    {t.isVisible === "public" ? "Hide" : "Make public"}
                  </button> */}
                  <button onDoubleClick={() => handleDelete(t._id)} className="hover:text-red-400 transition hover:cursor-pointer">
                    Delete
                  </button>
                </div>
              </div>

              {/* Reactions */}
              {/* <div className="flex items-center gap-4 pt-2 text-sm text-white/50">
                <button onClick={() => setReaction(!reaction)} className="hover:text-white transition hover:cursor-pointer"> */} 
                  {/* {t.reactions.heart || ""} */}
                {/* </button>
                <button className="hover:text-white transition hover:cursor-pointer"> 🫂  */}
                  {/* {t.reactions.hug || ""} */}
                {/* </button>
                <button className="hover:text-white transition hover:cursor-pointer">🌱  */}
                  {/* {t.reactions.seed || ""} */}
                {/* </button>
              </div> */}

              {/* Actions */}
              {/* <div className="flex items-center gap-6 text-xs text-white/40">
                <button
                  onClick={() =>
                    setOpenComments(openComments === t.id ? null : t.id)
                  }
                  className="hover:text-white/70 transition hover:cursor-pointer"
                >
                  {openComments === t.id
                    ? "Hide responses"
                    : "View responses"}
                </button>

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `${window.location.origin}/thought/${t.id}`
                    )
                  }
                  className="hover:text-white/70 transition hover:cursor-pointer"
                >
                  Share quietly
                </button>
              </div> */}

              {/* Comments */}
              {/* {openComments === t.id && (<div className="pt-4 space-y-4 border-t border-white/10">
                  {t.comments.length > 0 ? (
                    t.comments.map((c) => (
                      <div key={c.id} className="text-sm text-white/70">
                        <p>{c.text}</p>
                        <p className="text-xs text-white/30 mt-1">
                          {c.time}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-white/30">
                      No one has responded yet.
                    </p>
                  )} */}

                  {/* Add comment */}
                  {/* <input
                    type="text"
                    placeholder="Leave a gentle response…"
                    className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm
                      text-white/80 placeholder:text-white/30
                      outline-none focus:bg-white/8 transition"
                  />
                </div>
              )} */}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
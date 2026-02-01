"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getMessages, messageStatus, deleteMessage, getUserProfile } from "@/services/auth";
import Loading from "@/components/layout/Loading";
import { toast } from "sonner";

type TMessage = {
  _id: string;
  content: string;
  createdAt: string;
  status: boolean
}

export default function InboxPage() {
  const router = useRouter();
  const [openId, setOpenId] = useState<string | null>(null);
  // const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  // const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<TMessage[] | null>(null);

  const [username, setUsername] = useState("");

  const goToSendPage = async () => {
    if (!username.trim()) return;
    try {
      const res = await getUserProfile(username);
      router.push(`/me/send/${username.trim()}`);
    } catch (err: any) {
      toast.error("Please enter a valid username to continue.");
      setUsername("");
    }
  };


  // const handleSend = async () => {
  //   if (!newMessage.trim()) return;
  //   try {
  //     setSending(true);
  //     await new Promise((r) => setTimeout(r, 600));
  //     setNewMessage("");
  //   } finally {
  //     setSending(false);
  //   }
  // };

  const fetchMessages = async () => {
    try {
      const res = await getMessages();
      setMessages(res.data);
    } catch(err: any) {
      console.log("Error while fetching messages: ", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, [])

  useEffect(() => {
    if(!loading && !messages) {
      router.push("/accounts/signin");
    }
  }, [loading, messages, router]);

  if(loading) return <Loading/>
  if(!messages) return null;

  const deleteHandler = async (id: string) => {
    await deleteMessage(id);
    setMessages((prev => prev?.filter(msg => msg._id !== id) || null));
  }

  const statusHandler = async (id: string) => {
    await messageStatus(id, true);
    fetchMessages();
  }

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
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-3xl mx-auto space-y-14">

        <header className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-medium sm:font-bold">Inbox</h1>
            <p className="text-sm text-white/40 max-w-md">What reached you. You can open things when you’re ready.</p>
          </div>

          <button className="shrink-0 hover:bg-zinc-900/70 transition-all duration-300 flex items-center rounded-full py-1 px-3 text-xs text-white/50 hover:text-white/80" onClick={fetchMessages}>Check quietly</button>
        </header>

         
        <section className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-4">
          <p className="text-sm text-white/60">Write to someone directly</p>

          <input
            type="text"
            placeholder="Enter username…"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/30 outline-none focus:bg-white/8 transition"/>

          <div className="flex justify-end">
          <button onClick={goToSendPage}
            disabled={!username.trim()}
            className="
            text-xs px-4 py-2 rounded-lg
            bg-orange-500/20 text-orange-300
            hover:bg-orange-500/30
            disabled:opacity-40 disabled:cursor-not-allowed
            transition">Send quietly</button>
          </div>
        </section>


        <div className="space-y-6">
          {messages.map((msg) => (
            <article
              key={msg._id}
              className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-5 space-y-4">
              
              <button onClick={() =>
                  setOpenId(openId === msg._id ? null : msg._id)
                }
                className="w-full text-left">
                <p className={`text-sm leading-relaxed transition ${msg ? "text-white/90" : "text-white/70"}`}>{msg.content}</p>
              </button>

              <div className="flex items-center justify-between text-xs text-white/35">
                <span>{timeAgo(msg.createdAt)}</span>
                {msg.status === false && (<span className="text-white/40">unread</span>)}
              </div>

              {openId === msg._id && (
                <div className="pt-3 space-y-4 border-t border-white/10">
                  <div className="flex items-center gap-6 text-xs text-white/40">
                  {msg.status === false
                   &&
                   <button onClick={() => statusHandler(msg._id)} className="hover:text-white/70 transition">Mark read</button>
                   }
                    <button onDoubleClick={() => deleteHandler(msg._id)} className="hover:text-red-400 transition hover:cursor-pointer">
                    Delete
                  </button>
                  </div>
                </div>)}
            </article>))}
        </div>

        {messages.length === 0 && (
          <p className="text-sm text-white/30">Nothing has reached you yet.</p>)}
      </section>
    </main>
  );
}
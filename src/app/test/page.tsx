// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const user = {
//     about: "",
//     fullname: "",
//     profileImage: "",
//     username: "",
//     isPrivate: true,
//     messagesCount: 0,
//     thoughtsCount: 1
// }

// const toggleAccountVisibility = () => {

// }

// const signoutHandler = () => {

// }

// export default function ProfileDesign() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [aboutText, setAboutText] = useState(user.about);
//   const isPrivate = true;
  
//   // Local state for instant UI feedback
//   const [tempFullname, setTempFullname] = useState(user.fullname);

//   return (
//     <main className="relative min-h-screen px-6 py-20 sm:py-16 text-white bg-black overflow-hidden">
      
//       {/* ATMOSPHERIC GLOW */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-32 -left-32 h-[260px] w-[260px] rounded-full bg-orange-400/10 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-orange-300/8 blur-[120px]" />
//       </div>

//       <section className="relative z-10 max-w-3xl mx-auto space-y-14">
        
//         {/* HEADER WITH UPDATE LOGIC */}
//         <header className="flex flex-col sm:flex-row items-start gap-6 group">
//           <div className="relative">
//              <div className="h-24 w-24 rounded-full overflow-hidden bg-white/5 shrink-0 ring-1 ring-white/10 group-hover:ring-orange-500/30 transition-all duration-700">
//                <Image
//                  src={user.profileImage}
//                  alt="Your profile photo"
//                  width={96}
//                  height={96}
//                  className="h-full w-full object-cover opacity-90"
//                  priority
//                />
//              </div>
//              {/* Edit Avatar Overlay */}
//              <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 rounded-full transition-opacity duration-500 backdrop-blur-sm">
//                 <span className="text-[10px] uppercase tracking-widest font-bold">Change</span>
//              </button>
//           </div>

//           <div className="flex-1 space-y-3 w-full">
//             <div className="flex items-center justify-between">
//               <div className="space-y-1">
//                 {isEditing ? (
//                   <input 
//                     value={tempFullname}
//                     onChange={(e) => setTempFullname(e.target.value)}
//                     className="bg-transparent border-b border-orange-500/30 text-xl font-extrabold outline-none focus:border-orange-500 w-full transition-colors"
//                     autoFocus
//                   />
//                 ) : (
//                   <h1 className="text-xl font-extrabold tracking-tight">{tempFullname}</h1>
//                 )}
//                 <p className="text-sm text-white/50 font-serif italic">@{user.username}</p>
//               </div>

//               <button 
//                 onClick={() => setIsEditing(!isEditing)}
//                 className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-orange-400 transition-colors"
//               >
//                 {isEditing ? "Done" : "Edit Profile"}
//               </button>
//             </div>

//             {isEditing ? (
//               <textarea
//                 value={aboutText}
//                 onChange={(e) => setAboutText(e.target.value)}
//                 rows={3}
//                 className="w-full bg-white/[0.03] rounded-2xl p-4 text-sm text-white/70 leading-relaxed outline-none border border-white/5 focus:border-orange-500/20 transition-all"
//                 placeholder="Write a little about your quiet corner..."
//               />
//             ) : (
//               <p className="text-sm text-white/60 max-w-md leading-relaxed font-serif italic">
//                 &ldquo;{aboutText}&rdquo;
//               </p>
//             )}
//           </div>
//         </header>

//         {/* SEARCH & OTHER SECTIONS (Unchanged but visually integrated) */}
//         {/* ... existing search code ... */}

//         <section className="space-y-6">
//           <div className="flex items-center justify-between rounded-3xl border border-white/[0.05] bg-white/[0.02] px-6 py-5 hover:bg-white/[0.04] transition-all duration-700">
//             <div className="space-y-1">
//               <p className="text-sm text-white/90 font-medium">Privacy Status</p>
//               <p className="text-xs text-white/40 italic">
//               {isPrivate
//                   ? "Your reflections are open to the field."
//                   : "Your space is a hidden sanctuary."}
//               </p>
//             </div>

//             <button 
//               onClick={toggleAccountVisibility} 
//               className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-500 ${!isPrivate ? "bg-orange-500/60" : "bg-white/10"}`}
//             >
//               <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-black transition-transform duration-500 ${!isPrivate ? "translate-x-6" : "translate-x-1.5"}`}/>
//             </button>
//           </div>
//         </section>

//         {/* NAVIGATION LINKS */}
//         <div className="grid gap-4">
//           <Link
//             href="/me/inbox"
//             className="group flex items-center justify-between rounded-3xl border border-white/[0.03] bg-white/[0.01] p-6 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-700"
//           >
//             <div className="space-y-1">
//               <p className="text-sm font-medium">Inbox</p>
//               <p className="text-xs text-white/40">Things that reached you quietly</p>
//             </div>
//             {user.messagesCount > 0 && (
//               <span className="h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center text-[10px] text-orange-400 font-bold border border-orange-500/20">
//                 {user.messagesCount}
//               </span>
//             )}
//           </Link>

//           <Link
//             href="/me/thoughts"
//             className="group flex items-center justify-between rounded-3xl border border-white/[0.03] bg-gradient-to-br from-white/[0.04] to-transparent p-6 hover:from-white/[0.06] transition-all duration-700"
//           >
//             <div className="space-y-1">
//               <p className="text-sm font-medium">Your Thoughts</p>
//               <p className="text-xs text-white/40">You’ve written {user.thoughtsCount} reflections</p>
//             </div>
//             <div className="h-2 w-2 rounded-full bg-white/10 group-hover:bg-orange-500/40 transition-colors" />
//           </Link>
//         </div>

//         <footer className="pt-10 flex items-center justify-between border-t border-white/[0.03]">
//           <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">Move at your pace</p>
//           <button
//             onClick={signoutHandler}
//             className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
//           >
//             Leave quietly
//           </button>
//         </footer>
//       </section>
//     </main>
//   );
// }
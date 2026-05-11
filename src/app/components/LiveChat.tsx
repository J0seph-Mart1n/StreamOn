"use client";

import { useState, useEffect, useRef } from "react";
import { FIREBASE_DB, FIREBASE_AUTH } from "../../../FirebaseConfig";
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, limit } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";

interface Message {
  id: string;
  text: string;
  username: string;
  uid: string;
  timestamp: any;
}

export default function LiveChat({ playbackId }: { playbackId: string | undefined }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Listen to Firestore messages
  useEffect(() => {
    if (!playbackId) return;

    const q = query(
      collection(FIREBASE_DB, "chats", playbackId, "messages"),
      orderBy("timestamp", "asc"),
      limit(100)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages: Message[] = [];
      snapshot.forEach((doc) => {
        fetchedMessages.push({ id: doc.id, ...doc.data() } as Message);
      });
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [playbackId]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user || !playbackId) return;

    const textToSend = newMessage.trim();
    setNewMessage("");

    try {
      await addDoc(collection(FIREBASE_DB, "chats", playbackId, "messages"), {
        text: textToSend,
        username: user.displayName || user.email?.split('@')[0] || "User",
        uid: user.uid,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <aside className="w-full lg:w-[340px] xl:w-[400px] h-[512px] lg:h-full bg-surface-container border-l border-white/10 flex flex-col shrink-0 relative z-30">
      {/* Chat Header */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-white/5 bg-surface-container-highest/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-outline">chat</span>
          <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Live Chat</h3>
        </div>
        <button className="text-outline hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-[20px]">people</span>
        </button>
      </div>

      {/* Chat Messages Feed */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 text-[14px] font-body-md leading-relaxed custom-scrollbar">
        
        {/* Pinned Message */}
        <div className="bg-surface-variant/50 border border-primary/30 rounded p-2 mb-2">
          <div className="flex items-center gap-1 text-primary font-label-sm text-[11px] uppercase tracking-wider mb-1">
            <span className="material-symbols-outlined text-[14px] icon-fill">push_pin</span>
            Pinned by Moderators
          </div>
          <p className="text-on-surface-variant">Welcome to the stream! Keep chat respectful. Log in to participate.</p>
        </div>

        {/* Dynamic Messages */}
        {messages.map((msg) => (
          <div key={msg.id} className="group flex flex-col hover:bg-white/5 -mx-2 px-2 py-1 rounded transition-colors relative">
            <div className="flex items-start gap-2">
              {user?.uid === msg.uid && (
                <div className="flex items-center gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container absolute right-2 shadow-md rounded">
                  <button className="p-1 text-outline hover:text-error transition-colors" title="Delete Message">
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                  </button>
                </div>
              )}
              <div className="break-words w-full pr-8">
                <span className="font-bold text-secondary cursor-pointer hover:underline">{msg.username}</span>
                <span className="text-on-surface-variant ml-2">{msg.text}</span>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Area */}
      <div className="p-4 border-t border-white/5 bg-surface-container-highest">
        <form onSubmit={sendMessage} className="relative flex items-center">
          <input
            className="w-full bg-surface-container text-on-surface font-body-md text-sm rounded-lg border border-outline/20 focus:border-primary focus:ring-1 focus:ring-primary pl-3 pr-24 py-2.5 transition-colors placeholder:text-outline-variant outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={user ? "Send a message..." : "Log in to chat"}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            disabled={!user}
          />
          <div className="absolute right-2 flex items-center gap-1">
            <button type="button" className="p-1.5 text-outline hover:text-primary transition-colors rounded disabled:opacity-50" title="Emotes" disabled={!user}>
              <span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span>
            </button>
            <button type="submit" disabled={!user || !newMessage.trim()} className="bg-primary hover:bg-primary-fixed-dim text-on-primary p-1.5 rounded-md transition-colors shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}

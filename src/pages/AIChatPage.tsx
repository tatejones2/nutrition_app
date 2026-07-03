import { useState } from "react";
import { Send } from "lucide-react";
import { ChatMessageBubble } from "../components/ai/ChatMessageBubble";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAppStore } from "../lib/appStore";
import { sendCoachMessage } from "../lib/aiClient";

const prompts = ["What should I eat before my lift?", "Am I on track for my goal?", "Replace my next meal.", "Help me recover after practice.", "How much water should I drink today?"];

export function AIChatPage() {
  const { state, addAIMessage } = useAppStore();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (text = input) => {
    if (!text.trim() || loading) return;
    setInput("");
    setLoading(true);
    addAIMessage({ id: crypto.randomUUID(), role: "user", content: text, contextType: "chat", createdAt: new Date().toISOString() });
    const reply = await sendCoachMessage(text, state);
    addAIMessage({ id: crypto.randomUUID(), role: "assistant", content: reply, contextType: "chat", createdAt: new Date().toISOString() });
    setLoading(false);
  };

  return (
    <div className="page chat-page">
      <header className="page-header"><span className="eyebrow">AI performance nutrition</span><h1>AI Coach</h1><p>Ask for schedule-aware fueling, recovery, hydration, and meal swaps.</p></header>
      <Card className="chat-card">
        <div className="prompt-row">{prompts.map((prompt) => <button key={prompt} onClick={() => submit(prompt)}>{prompt}</button>)}</div>
        <div className="chat-stream">{state.aiMessages.filter((m) => m.contextType === "chat").map((message) => <ChatMessageBubble key={message.id} message={message} />)}{loading && <div className="chat-bubble assistant">Thinking through your schedule and targets...</div>}</div>
        <form className="chat-input" onSubmit={(e) => { e.preventDefault(); submit(); }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="I missed lunch and have practice in 90 minutes..." />
          <Button><Send size={16} /> Send</Button>
        </form>
      </Card>
    </div>
  );
}

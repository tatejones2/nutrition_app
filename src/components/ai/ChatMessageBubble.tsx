import type { AIMessage } from "../../types/ai";

export function ChatMessageBubble({ message }: { message: AIMessage }) {
  return <div className={`chat-bubble ${message.role}`}>{message.content}</div>;
}

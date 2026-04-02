import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface VoteButtonProps {
  upvotes: number;
  downvotes: number;
}

const VoteButton = ({ upvotes, downvotes }: VoteButtonProps) => {
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  const displayCount = upvotes - downvotes + (vote === "up" ? 1 : vote === "down" ? -1 : 0);

  return (
    <div className="flex items-center gap-0.5 rounded-full border bg-card">
      <button
        onClick={() => setVote(vote === "up" ? null : "up")}
        className={`flex items-center gap-1 rounded-l-full px-3 py-1.5 text-sm font-medium transition-colors ${
          vote === "up" ? "text-upvote bg-upvote/10" : "text-muted-foreground hover:text-upvote hover:bg-upvote/5"
        }`}
      >
        <ChevronUp className="h-4 w-4" />
        <span>{displayCount.toLocaleString()}</span>
      </button>
      <div className="h-5 w-px bg-border" />
      <button
        onClick={() => setVote(vote === "down" ? null : "down")}
        className={`rounded-r-full px-2.5 py-1.5 transition-colors ${
          vote === "down" ? "text-downvote bg-downvote/10" : "text-muted-foreground hover:text-downvote hover:bg-downvote/5"
        }`}
      >
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
};

export default VoteButton;

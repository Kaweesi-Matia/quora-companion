import { MessageSquare, Share2, Bookmark, MoreHorizontal } from "lucide-react";
import { Answer } from "@/data/mockData";
import VoteButton from "./VoteButton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface AnswerCardProps {
  answer: Answer;
}

const AnswerCard = ({ answer }: AnswerCardProps) => {
  return (
    <div className="py-4">
      {/* Author */}
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="h-9 w-9 bg-primary/10 text-primary">
          <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
            {answer.authorAvatar}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground truncate">{answer.authorName}</p>
          <p className="text-xs text-muted-foreground truncate">{answer.authorTitle}</p>
        </div>
        <span className="text-xs text-muted-foreground shrink-0">{answer.timestamp}</span>
      </div>

      {/* Content */}
      <div className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line mb-4">
        {answer.content}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <VoteButton upvotes={answer.upvotes} downvotes={answer.downvotes} />
        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-full hover:bg-secondary">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-full hover:bg-secondary">
          <Share2 className="h-3.5 w-3.5" />
          <span>Share</span>
        </button>
        <div className="flex-1" />
        <button className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-full hover:bg-secondary">
          <Bookmark className="h-3.5 w-3.5" />
        </button>
        <button className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-full hover:bg-secondary">
          <MoreHorizontal className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default AnswerCard;

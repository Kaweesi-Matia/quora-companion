import { MessageSquare, Users } from "lucide-react";
import { Question } from "@/data/mockData";
import TopicTag from "./TopicTag";
import AnswerCard from "./AnswerCard";
import { useState } from "react";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const displayedAnswers = expanded ? question.answers : question.answers.slice(0, 1);

  return (
    <article className="bg-card rounded-lg border shadow-sm overflow-hidden">
      <div className="p-5 pb-0">
        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {question.topics.map((t) => (
            <TopicTag key={t} label={t} />
          ))}
        </div>

        {/* Title */}
        <h2 className="font-heading text-lg font-semibold text-foreground leading-snug mb-2 cursor-pointer hover:text-primary transition-colors">
          {question.title}
        </h2>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <MessageSquare className="h-3.5 w-3.5" />
            {question.answerCount.toLocaleString()} answers
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {question.followers.toLocaleString()} followers
          </span>
        </div>
      </div>

      {/* Answers */}
      <div className="px-5">
        <div className="border-t" />
        {displayedAnswers.map((a) => (
          <AnswerCard key={a.id} answer={a} />
        ))}
      </div>

      {/* Show more */}
      {question.answers.length > 1 && (
        <div className="px-5 pb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-primary hover:underline"
          >
            {expanded ? "Show less" : `View ${question.answers.length - 1} more answer${question.answers.length > 2 ? 's' : ''}`}
          </button>
        </div>
      )}
    </article>
  );
};

export default QuestionCard;

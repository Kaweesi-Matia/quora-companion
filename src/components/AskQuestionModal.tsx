import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import TopicTag from "./TopicTag";
import { topics } from "@/data/mockData";

interface AskQuestionModalProps {
  open: boolean;
  onClose: () => void;
}

const AskQuestionModal = ({ open, onClose }: AskQuestionModalProps) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (t: string) => {
    setSelectedTopics((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : prev.length < 3 ? [...prev, t] : prev
    );
  };

  const handleSubmit = () => {
    onClose();
    setTitle("");
    setDetail("");
    setSelectedTopics([]);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Ask a Question</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div>
            <p className="text-sm font-medium text-foreground mb-1.5">Start your question with "What", "How", "Why", etc.</p>
            <Input
              placeholder='e.g. "What is the best way to learn programming?"'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1.5">Add context (optional)</p>
            <Textarea
              placeholder="Provide additional details or background..."
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              rows={4}
            />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1.5">Topics (up to 3)</p>
            <div className="flex flex-wrap gap-1.5">
              {topics.slice(0, 10).map((t) => (
                <TopicTag key={t} label={t} active={selectedTopics.includes(t)} onClick={() => toggleTopic(t)} />
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!title.trim()}>
            Post Question
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AskQuestionModal;

import { useState, useMemo } from "react";
import AppHeader from "@/components/AppHeader";
import QuestionCard from "@/components/QuestionCard";
import TopicSidebar from "@/components/TopicSidebar";
import AskQuestionModal from "@/components/AskQuestionModal";
import { questions } from "@/data/mockData";

const Index = () => {
  const [askOpen, setAskOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch = !searchQuery || q.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTopic = !activeTopic || q.topics.includes(activeTopic);
      return matchesSearch && matchesTopic;
    });
  }, [searchQuery, activeTopic]);

  return (
    <div className="min-h-screen bg-background">
      <AppHeader onAskQuestion={() => setAskOpen(true)} searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex gap-6">
          {/* Feed */}
          <main className="flex-1 min-w-0 space-y-4">
            {/* Feed tabs */}
            <div className="flex items-center gap-1 border-b pb-2">
              <button className="px-3 py-1.5 text-sm font-medium text-primary border-b-2 border-primary">For You</button>
              <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Following</button>
              <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Recent</button>
            </div>

            {filtered.length > 0 ? (
              filtered.map((q) => <QuestionCard key={q.id} question={q} />)
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg font-heading">No questions found</p>
                <p className="text-sm mt-1">Try a different search or topic</p>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <TopicSidebar activeTopic={activeTopic} onTopicClick={setActiveTopic} />
        </div>
      </div>

      <AskQuestionModal open={askOpen} onClose={() => setAskOpen(false)} />
    </div>
  );
};

export default Index;

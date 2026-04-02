import { TrendingUp, Hash } from "lucide-react";
import { topics } from "@/data/mockData";

interface TopicSidebarProps {
  activeTopic: string | null;
  onTopicClick: (t: string | null) => void;
}

const TopicSidebar = ({ activeTopic, onTopicClick }: TopicSidebarProps) => {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 space-y-6">
        {/* Trending */}
        <div className="bg-card rounded-lg border p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Trending Topics</h3>
          </div>
          <div className="space-y-1">
            {topics.slice(0, 8).map((t) => (
              <button
                key={t}
                onClick={() => onTopicClick(activeTopic === t ? null : t)}
                className={`flex items-center gap-2 w-full rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  activeTopic === t
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Hash className="h-3.5 w-3.5" />
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-muted-foreground space-y-1 px-2">
          <p>About · Careers · Terms · Privacy</p>
          <p>© 2026 Quorra, Inc.</p>
        </div>
      </div>
    </aside>
  );
};

export default TopicSidebar;

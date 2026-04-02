import { Search, PenSquare, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface AppHeaderProps {
  onAskQuestion: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const AppHeader = ({ onAskQuestion, searchQuery, onSearchChange }: AppHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5 shrink-0">
          <span className="text-2xl font-bold font-heading text-primary">Q</span>
          <span className="text-lg font-semibold font-heading text-foreground hidden sm:inline">Quorra</span>
        </a>

        {/* Search */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions, topics, people..."
              className="pl-9 bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary/30"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <User className="h-5 w-5" />
          </Button>
          <Button onClick={onAskQuestion} className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <PenSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Ask</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

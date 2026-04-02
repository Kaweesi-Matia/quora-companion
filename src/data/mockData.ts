export interface Answer {
  id: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string;
  content: string;
  upvotes: number;
  downvotes: number;
  timestamp: string;
}

export interface Question {
  id: string;
  title: string;
  topics: string[];
  answerCount: number;
  followers: number;
  answers: Answer[];
}

export const topics = [
  "Technology", "Science", "Philosophy", "Business", "Health",
  "Psychology", "History", "Travel", "Programming", "Design",
  "Economics", "Literature", "Politics", "Education", "Music"
];

export const questions: Question[] = [
  {
    id: "1",
    title: "What is the single most important habit that changed your life?",
    topics: ["Psychology", "Health"],
    answerCount: 847,
    followers: 12400,
    answers: [
      {
        id: "a1",
        authorName: "Elena Rodriguez",
        authorTitle: "Clinical Psychologist · 15 years experience",
        authorAvatar: "ER",
        content: "Journaling every morning for 10 minutes. It sounds simple, almost trivially so, but the compounding effect over months is extraordinary. You begin to notice patterns in your thinking — loops of anxiety, bursts of creativity at odd hours, recurring frustrations that point to deeper unresolved issues.\n\nAfter six months of consistent morning pages, I had essentially mapped the architecture of my own mind. Decisions became faster. Emotional regulation improved. I stopped reacting and started responding.\n\nThe key insight: your brain processes far more than your conscious mind tracks. Writing externalizes that processing. It's like giving your subconscious a whiteboard.",
        upvotes: 3420,
        downvotes: 45,
        timestamp: "14h ago",
      },
      {
        id: "a2",
        authorName: "Marcus Chen",
        authorTitle: "Software Engineer at Google · Stanford CS '18",
        authorAvatar: "MC",
        content: "Learning to say no without guilt. Early in my career I said yes to everything — every meeting, every side project, every coffee chat. I was productive but never on the things that actually mattered.\n\nThe shift happened when I started treating my time like a budget. Every yes is a no to something else. Now I protect my deep work blocks ruthlessly, and my output has tripled while my stress has halved.",
        upvotes: 2180,
        downvotes: 32,
        timestamp: "1d ago",
      }
    ],
  },
  {
    id: "2",
    title: "Why do some startups succeed while most fail, even with good ideas?",
    topics: ["Business", "Technology"],
    answerCount: 523,
    followers: 8900,
    answers: [
      {
        id: "a3",
        authorName: "Sarah Okonkwo",
        authorTitle: "3x Founder · YC W21 · Forbes 30 Under 30",
        authorAvatar: "SO",
        content: "Execution timing. Most people focus on the idea, the team, or the funding. But the single biggest predictor I've observed across dozens of startups is whether the market is ready for the solution at that exact moment.\n\nUber didn't invent ride-sharing. They launched when smartphones had GPS, app stores existed, and the 2008 recession created a huge pool of willing drivers. The same idea in 2005 would have been impossible.\n\nGood founders develop an instinct for timing. They watch adoption curves, regulatory shifts, and cultural moments. The idea is maybe 10% of it.",
        upvotes: 1890,
        downvotes: 67,
        timestamp: "3h ago",
      }
    ],
  },
  {
    id: "3",
    title: "What's the most mind-blowing fact about the universe that most people don't know?",
    topics: ["Science", "Philosophy"],
    answerCount: 1203,
    followers: 34200,
    answers: [
      {
        id: "a4",
        authorName: "Dr. James Park",
        authorTitle: "Astrophysicist · MIT · Author of 'Cosmic Edges'",
        authorAvatar: "JP",
        content: "There are more possible configurations of a chess game than there are atoms in the observable universe. Let that sink in.\n\nThe Shannon number — a conservative lower bound on the number of possible chess games — is roughly 10^120. The number of atoms in the observable universe is estimated at 10^80. So there are about 10^40 times more possible chess games than atoms.\n\nThis illustrates something profound about combinatorial explosion. Simple rules (how chess pieces move) can generate complexity that dwarfs the physical universe. It's the same principle behind why consciousness might emerge from relatively simple neural connections.",
        upvotes: 5670,
        downvotes: 89,
        timestamp: "6h ago",
      }
    ],
  },
  {
    id: "4",
    title: "How do experienced programmers think differently from beginners?",
    topics: ["Programming", "Technology", "Education"],
    answerCount: 672,
    followers: 15800,
    answers: [
      {
        id: "a5",
        authorName: "Yuki Tanaka",
        authorTitle: "Principal Engineer · 20 years in distributed systems",
        authorAvatar: "YT",
        content: "Beginners think about writing code. Experienced programmers think about deleting code.\n\nThe biggest shift isn't learning more syntax or frameworks. It's developing the judgment to know what NOT to build. Every line of code is a liability — it needs testing, maintenance, documentation, and debugging. Senior engineers are obsessed with finding the simplest possible solution.\n\nI've seen junior developers spend weeks building elaborate abstractions that a senior would replace with a 10-line script and a cron job. The senior isn't smarter — they've just internalized the cost of complexity through painful experience.",
        upvotes: 4230,
        downvotes: 56,
        timestamp: "2d ago",
      }
    ],
  },
  {
    id: "5",
    title: "What book genuinely changed the way you see the world?",
    topics: ["Literature", "Philosophy", "Education"],
    answerCount: 1567,
    followers: 28300,
    answers: [
      {
        id: "a6",
        authorName: "Amara Washington",
        authorTitle: "Literature Professor · Columbia University",
        authorAvatar: "AW",
        content: "'Thinking, Fast and Slow' by Daniel Kahneman. Not because it's the best-written book, but because it made me distrust my own brain in the most productive way possible.\n\nAfter reading it, I started noticing my cognitive biases in real-time: the anchoring effect when negotiating, the availability heuristic when assessing risks, the sunk cost fallacy when persisting with bad decisions. It's like getting X-ray vision for your own irrationality.\n\nThe most humbling part? Knowing about biases doesn't make you immune to them. But it gives you a fighting chance.",
        upvotes: 3100,
        downvotes: 42,
        timestamp: "8h ago",
      }
    ],
  },
];

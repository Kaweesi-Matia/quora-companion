interface TopicTagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const TopicTag = ({ label, active, onClick }: TopicTagProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-topic-bg text-topic-fg hover:bg-primary/10"
      }`}
    >
      {label}
    </button>
  );
};

export default TopicTag;

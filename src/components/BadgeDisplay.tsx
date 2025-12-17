import { Award } from 'lucide-react';

interface BadgeDisplayProps {
  badges: string[];
}

const BadgeDisplay = ({ badges }: BadgeDisplayProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cosmic-gold/20 to-cosmic-gold/10 border border-cosmic-gold/50 rounded-full text-sm font-semibold text-cosmic-gold"
        >
          <Award className="w-4 h-4" />
          {badge}
        </div>
      ))}
      {badges.length === 0 && (
        <p className="text-muted-foreground">
          Complete lessons and quizzes to earn badges!
        </p>
      )}
    </div>
  );
};

export default BadgeDisplay;

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    excerpt: string;
  };
}

const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <Link to={`/lessons/${lesson.id}`}>
      <Card className="group h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {lesson.title}
            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {lesson.excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <span className="text-sm text-stellar-cyan group-hover:underline">
            Start lesson →
          </span>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LessonCard;

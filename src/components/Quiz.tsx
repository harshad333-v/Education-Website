import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizQuestion {
  id: number;
  q: string;
  options: string[];
  a: number;
}

interface QuizProps {
  quiz: QuizQuestion[];
  lessonId: string;
}

const Quiz = ({ quiz }: QuizProps) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const select = (qid: number, idx: number) => {
    if (!submitted) {
      setAnswers((prev) => ({ ...prev, [qid]: idx }));
    }
  };

  const submit = () => {
    let s = 0;
    quiz.forEach((q) => {
      if (answers[q.id] === q.a) s++;
    });
    setScore(s);
    setSubmitted(true);
  };

  const reset = () => {
    setAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  return (
    <div className="space-y-4">
      {quiz.map((q) => (
        <Card key={q.id} className="bg-card/50">
          <CardContent className="p-4">
            <div className="font-medium mb-3 flex items-start gap-2">
              {submitted && (
                answers[q.id] === q.a ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                )
              )}
              <span>{q.q}</span>
            </div>
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const isSelected = answers[q.id] === i;
                const isCorrect = q.a === i;
                const showCorrect = submitted && isCorrect;
                const showWrong = submitted && isSelected && !isCorrect;

                return (
                  <button
                    key={i}
                    onClick={() => select(q.id, i)}
                    disabled={submitted}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      showCorrect
                        ? 'bg-green-500/20 border-2 border-green-500'
                        : showWrong
                        ? 'bg-red-500/20 border-2 border-red-500'
                        : isSelected
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80'
                    } ${submitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex items-center gap-4">
        {!submitted ? (
          <Button
            onClick={submit}
            disabled={Object.keys(answers).length !== quiz.length}
            className="bg-gradient-nebula hover:opacity-90"
          >
            Submit Quiz
          </Button>
        ) : (
          <Button onClick={reset} variant="outline">
            Try Again
          </Button>
        )}
        {score !== null && (
          <div className="text-lg font-semibold">
            Score: <span className="text-primary">{score}/{quiz.length}</span>
            {score === quiz.length && (
              <span className="ml-2 text-cosmic-gold">🌟 Perfect!</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

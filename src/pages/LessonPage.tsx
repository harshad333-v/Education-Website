import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Quiz from '@/components/Quiz';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Lesson {
  title: string;
  content: string;
  details: string[];
}

const LESSONS: Record<string, Lesson> = {
  planets: {
    title: 'Planets 101',
    content:
      'Planets are celestial bodies that orbit stars. Our solar system has 8 major planets, each with unique characteristics and features.',
    details: [
      'Mercury: The smallest planet and closest to the Sun',
      'Venus: The hottest planet with a thick atmosphere',
      'Earth: Our home, the only known planet with life',
      'Mars: The red planet with evidence of past water',
      'Jupiter: The largest planet, a gas giant',
      'Saturn: Famous for its spectacular ring system',
      'Uranus: An ice giant rotating on its side',
      'Neptune: The windiest planet in our solar system',
    ],
  },
  rovers: {
    title: 'Mars Rovers',
    content:
      'Mars rovers are robotic explorers sent to study the Martian surface, geology, and search for signs of past water and microbial life.',
    details: [
      'Sojourner (1997): The first successful Mars rover',
      'Spirit & Opportunity (2004): Twin rovers that exceeded expectations',
      'Curiosity (2012): Still active, studying Mars geology and climate',
      'Perseverance (2021): Searching for signs of ancient life',
      'Ingenuity: The first helicopter to fly on another planet',
    ],
  },
  stars: {
    title: 'Stars & Life Cycle',
    content:
      'Stars are massive spheres of hot gas that produce energy through nuclear fusion. They have fascinating life cycles that depend on their mass.',
    details: [
      'Birth: Stars form from collapsing clouds of gas and dust',
      'Main Sequence: Stars spend most of their lives fusing hydrogen',
      'Red Giant: Larger stars expand when hydrogen runs out',
      'Death: Low-mass stars become white dwarfs',
      'Supernovae: Massive stars explode spectacularly',
      'Remnants: Neutron stars or black holes form from massive stars',
    ],
  },
};

const QUIZZES: Record<
  string,
  Array<{ id: number; q: string; options: string[]; a: number }>
> = {
  planets: [
    {
      id: 1,
      q: 'How many major planets are in our solar system?',
      options: ['7', '8', '9', '10'],
      a: 1,
    },
    {
      id: 2,
      q: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
      a: 1,
    },
    {
      id: 3,
      q: 'Which is the largest planet in our solar system?',
      options: ['Saturn', 'Neptune', 'Jupiter', 'Uranus'],
      a: 2,
    },
  ],
  rovers: [
    {
      id: 1,
      q: 'Which rover is currently active on Mars (as of 2024)?',
      options: ['Spirit', 'Curiosity', 'Opportunity', 'Sojourner'],
      a: 1,
    },
    {
      id: 2,
      q: 'What was special about Ingenuity?',
      options: [
        'Largest rover',
        'First helicopter on Mars',
        'Fastest rover',
        'First underwater rover',
      ],
      a: 1,
    },
  ],
  stars: [
    {
      id: 1,
      q: 'What process produces energy in stars?',
      options: [
        'Chemical burning',
        'Nuclear fusion',
        'Combustion',
        'Photosynthesis',
      ],
      a: 1,
    },
    {
      id: 2,
      q: 'What happens to massive stars at the end of their life?',
      options: [
        'They become white dwarfs',
        'They explode as supernovae',
        'They turn into planets',
        'They disappear',
      ],
      a: 1,
    },
  ],
};

const LessonPage = () => {
  const { id } = useParams<{ id: string }>();
  const lessonId = id || 'planets';
  const lesson = LESSONS[lessonId] || LESSONS['planets'];
  const quiz = QUIZZES[lessonId] || QUIZZES['planets'];

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-4xl flex items-center gap-3">
                <BookOpen className="w-10 h-10 text-primary" />
                {lesson.title}
              </CardTitle>
              <CardDescription className="text-lg">
                {lesson.content}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Key Facts:</h3>
                <ul className="space-y-2">
                  {lesson.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-stellar-cyan mt-1">★</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl">Test Your Knowledge</CardTitle>
              <CardDescription>
                Answer these questions to check your understanding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Quiz quiz={quiz} lessonId={lessonId} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;

import { Link } from 'react-router-dom';
import MarsGallery from '@/components/MarsGallery';
import LessonCard from '@/components/LessonCard';
import SpaceCarousel from '@/components/SpaceCarousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Users, Trophy, User } from 'lucide-react';

const sampleLessons = [
  { id: 'planets', title: 'Planets 101', excerpt: 'Explore planets in our solar system and their unique features.' },
  { id: 'rovers', title: 'Mars Rovers', excerpt: 'Learn about Curiosity, Perseverance, and the Ingenuity helicopter.' },
  { id: 'stars', title: 'Stars & Life Cycle', excerpt: 'Discover how stars form, live, and eventually die.' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <div className="container mx-auto px-4 py-8">
        <header className="py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-nebula bg-clip-text text-transparent">
            Space Education Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive lessons, quizzes, NASA imagery, and a community of space enthusiasts
          </p>
        </header>

        {/* Stunning Space Carousel */}
        <section className="mb-12">
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-cosmic-gold" />
                Journey Through the Cosmos
              </CardTitle>
              <CardDescription>
                Explore breathtaking views from across the universe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SpaceCarousel />
            </CardContent>
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-stellar-cyan" />
                  Featured: Mars Surface Photos
                </CardTitle>
                <CardDescription>
                  Real images from NASA's Curiosity rover on Mars
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MarsGallery />
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-4">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  to="/lessons/planets"
                  className="flex items-center gap-2 text-stellar-cyan hover:underline"
                >
                  <Sparkles className="w-4 h-4" />
                  Start: Planets 101
                </Link>
                <Link
                  to="/leaderboard"
                  className="flex items-center gap-2 text-stellar-cyan hover:underline"
                >
                  <Trophy className="w-4 h-4" />
                  Leaderboard
                </Link>
                <Link
                  to="/community"
                  className="flex items-center gap-2 text-stellar-cyan hover:underline"
                >
                  <Users className="w-4 h-4" />
                  Community Board
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-stellar-cyan hover:underline"
                >
                  <User className="w-4 h-4" />
                  Your Profile
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Explore Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground py-6 border-t border-border">
          Space Education Portal — STEM Learning for Everyone
        </footer>
      </div>
    </div>
  );
};

export default Index;

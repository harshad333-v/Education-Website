import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BadgeDisplay from '@/components/BadgeDisplay';
import { User, Star, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Profile = () => {
  const user = {
    name: 'Space Explorer',
    points: 120,
    level: 3,
    badges: ['Mars Explorer', 'Quiz Whiz', 'Community Star'],
    lessonsCompleted: 3,
    totalLessons: 10,
  };

  const progressPercentage = (user.lessonsCompleted / user.totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-nebula flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <CardTitle className="text-4xl">{user.name}</CardTitle>
                  <CardDescription className="text-lg">
                    Level {user.level} • {user.points} Points
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 text-cosmic-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">
                  {user.points}
                </div>
                <div className="text-sm text-muted-foreground">Total Points</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-nebula-purple mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">
                  {user.badges.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Badges Earned
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <User className="w-8 h-8 text-stellar-cyan mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">
                  {user.level}
                </div>
                <div className="text-sm text-muted-foreground">
                  Current Level
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>
                {user.lessonsCompleted} of {user.totalLessons} lessons completed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progressPercentage} className="h-3" />
              <p className="mt-2 text-sm text-muted-foreground">
                {Math.round(progressPercentage)}% complete
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-6 h-6 text-cosmic-gold" />
                Your Badges
              </CardTitle>
              <CardDescription>
                Achievements earned through learning and participation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BadgeDisplay badges={user.badges} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;

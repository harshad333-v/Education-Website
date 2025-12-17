import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Medal, Award } from 'lucide-react';

const leaderboardData = [
  { name: 'Asha Kumar', points: 340, rank: 1 },
  { name: 'Ravi Patel', points: 290, rank: 2 },
  { name: 'Priya Singh', points: 210, rank: 3 },
  { name: 'Dev Sharma', points: 185, rank: 4 },
  { name: 'Maya Chen', points: 170, rank: 5 },
  { name: 'Amit Desai', points: 155, rank: 6 },
  { name: 'Sana Ahmed', points: 140, rank: 7 },
  { name: 'Rahul Verma', points: 125, rank: 8 },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="w-6 h-6 text-cosmic-gold" />;
    case 2:
      return <Medal className="w-6 h-6 text-slate-400" />;
    case 3:
      return <Medal className="w-6 h-6 text-amber-700" />;
    default:
      return <Award className="w-6 h-6 text-muted-foreground" />;
  }
};

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-4xl flex items-center gap-3">
              <Trophy className="w-10 h-10 text-cosmic-gold" />
              Leaderboard
            </CardTitle>
            <CardDescription>
              Top space explorers and their learning achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboardData.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                    user.rank <= 3
                      ? 'bg-gradient-to-r from-primary/20 to-transparent border border-primary/30'
                      : 'bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12">
                      {getRankIcon(user.rank)}
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{user.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Rank #{user.rank}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {user.points}
                    </div>
                    <div className="text-sm text-muted-foreground">points</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Post {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

const initialPosts: Post[] = [
  {
    id: 1,
    user: 'Anju Reddy',
    text: 'How do Mars rovers collect and analyze soil samples? I just finished the rovers lesson!',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    user: 'Dev Kumar',
    text: 'Fun fact: Venus is the hottest planet even though Mercury is closest to the Sun! 🌡️',
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    user: 'Leela Patel',
    text: 'Just got my first badge! The Planets 101 quiz was challenging but fun.',
    timestamp: '1 day ago',
  },
];

const Community = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [text, setText] = useState('');
  const { toast } = useToast();

  const addPost = () => {
    if (!text.trim()) {
      toast({
        title: 'Empty post',
        description: 'Please write something before posting.',
        variant: 'destructive',
      });
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      user: 'You',
      text: text.trim(),
      timestamp: 'Just now',
    };

    setPosts([newPost, ...posts]);
    setText('');
    toast({
      title: 'Post shared!',
      description: 'Your message has been added to the community board.',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-4xl flex items-center gap-3">
              <MessageSquare className="w-10 h-10 text-stellar-cyan" />
              Community Board
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ask a question or share a discovery about space..."
                rows={4}
                className="resize-none bg-muted/50"
              />
              <Button
                onClick={addPost}
                className="bg-gradient-nebula hover:opacity-90"
              >
                <Send className="w-4 h-4 mr-2" />
                Post
              </Button>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-semibold text-primary">
                        {post.user}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.timestamp}
                      </span>
                    </div>
                    <p className="text-foreground">{post.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;

import { Link, useLocation } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Rocket className="w-8 h-8 text-primary" />
            <span className="bg-gradient-nebula bg-clip-text text-transparent">
              STEM for All
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/leaderboard" 
              className={`transition-colors ${isActive('/leaderboard') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Leaderboard
            </Link>
            <Link 
              to="/community" 
              className={`transition-colors ${isActive('/community') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Community
            </Link>
            <Link 
              to="/profile" 
              className={`transition-colors ${isActive('/profile') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

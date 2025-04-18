import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Social Media Analytics
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Feed
        </Button>
        <Button color="inherit" component={Link} to="/top-users">
          Top Users
        </Button>
        <Button color="inherit" component={Link} to="/trending-posts">
          Trending Posts
        </Button>
      </Toolbar>
    </AppBar>
  );
}
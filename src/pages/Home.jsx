import { Button, TextField, AppBar, Toolbar, Typography } from '@mui/material';

function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <TextField label="Enter your name" />
    </div>
  );
}

export default Home;
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate, useNavigationType } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
  });
  return (

    <div>
      <ThemeProvider theme={theme}>
        <header>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Password Rest Flow
                </Typography>
                <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
                <Button color="inherit" onClick={() => navigate("/signup")}>Signup</Button>
              </Toolbar>
            </AppBar>
          </Box>
        </header>
      </ThemeProvider>
      <main>
        <section className="main-parallax">
          <div className="inner-parallax">
            <br />
            <div className="web-heading">
              <h1>
              Password Rest Flow
              </h1>
            </div>
            <br />
            <i>Login</i>
          </div>
        </section>
      </main>
      <footer>
        <p>Contact : passwordreset@gmail.com</p>
      </footer>

    </div>
  );
}

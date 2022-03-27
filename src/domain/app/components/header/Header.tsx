import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Drawer } from '@mui/material';
import NavLink from './NavLink';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/form">
            <Button color="secondary">Form</Button>
          </NavLink>
          <NavLink to="/countries-home/countries">
            <Button color="secondary">Countries</Button>
          </NavLink>
        </Toolbar>
        <Drawer
          variant="temporary"
          ModalProps={{
            keepMounted: true
          }}
        />
      </AppBar>
    </Box>
  );
}

export default Header;

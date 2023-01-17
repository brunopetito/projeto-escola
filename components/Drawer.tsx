import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ContactsIcon from '@mui/icons-material/Contacts';
import MapIcon from '@mui/icons-material/Map';
import MenuIcon from '@mui/icons-material/Menu';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

type Anchor = any;

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem disablePadding>
        <ListItemButton href="/">
          <ListItemIcon>
            <HomeIcon></HomeIcon>
          </ListItemIcon>
          <ListItemText primary={'Início'} />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton href="/postagens">
          <ListItemIcon>
            <PhotoLibraryIcon></PhotoLibraryIcon>
          </ListItemIcon>
          <ListItemText primary={'Postagens'} />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton href="/contato">
          <ListItemIcon>
            <ContactsIcon></ContactsIcon>
          </ListItemIcon>
          <ListItemText primary={'Contato'} />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton href="/localizacao">
          <ListItemIcon>
            <MapIcon></MapIcon>
          </ListItemIcon>
          <ListItemText primary={'Localização'} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{ background: '#771d1D', color: '#F9B826' }}
            onClick={toggleDrawer(anchor, true)}
            variant="text"
          >
            <MenuIcon />
          </Button>
          <Drawer
            anchor={'left'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { useAuthState } from './hooks/useAuthState';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { loginByGoogle, logout } from '../libs/firebase/auth/login';
import { AccountCircle } from '@mui/icons-material';

interface Props {
  children: React.ReactNode;
}

const LoginButton: React.VFC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const loginByGoogleAndClose = () =>
    loginByGoogle().finally(() => setOpen(false));
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        ログイン
      </Button>

      {ReactDOM.createPortal(
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="ログインの対象一覧モーダル"
        >
          <Box
            css={css({
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              boxShadow: '24px',
              padding: '1.2em 1.6em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })}
          >
            <Button variant="contained" onClick={loginByGoogleAndClose}>
              Googleでログイン
            </Button>
          </Box>
        </Modal>,
        document.body
      )}
    </>
  );
};

const UserMenu: React.VFC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={() => setOpen(true)}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <MenuItem onClick={() => setOpen(false)}>日記を書く</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>自分の日記一覧</MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            logout().finally(() => {
              setOpen(false);
            });
          }}
        >
          ログアウト
        </MenuItem>
      </Menu>
    </>
  );
};

const component: React.VFC<Props> = ({ children }) => {
  const auth = getAuth();
  const { user, isCompleted, error } = useAuthState(auth);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" css={css({ flexGrow: 1 })}>
            サウナ日記
          </Typography>
          {isCompleted && (user ? <UserMenu /> : <LoginButton />)}
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export const Layout = component;

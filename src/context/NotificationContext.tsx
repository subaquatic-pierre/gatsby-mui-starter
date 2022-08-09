import React, { createContext, useState } from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';

export const NotificationContext = createContext(
  (_s: AlertColor, _m: string) => {
    return;
  }
);

type Props = React.PropsWithChildren;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification: React.FC<Props> = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor>('success');
  const [message, setMessage] = useState('');

  const handleOpen = (severity: AlertColor, message: string) => {
    setSeverity(severity);
    setMessage(message);
    setOpen(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={handleOpen}>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </NotificationContext.Provider>
  );
};

export default Notification;

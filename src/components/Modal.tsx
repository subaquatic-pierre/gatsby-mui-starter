import React from 'react';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props {
  handleClose: () => void;
}

const Modal: React.FC<Props> = ({ handleClose }) => {
  return (
    <Box>
      <DialogTitle>Optional sizes</DialogTitle>
      <DialogContent>Cool Life</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Box>
  );
};

export default Modal;

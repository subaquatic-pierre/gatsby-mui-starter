import React, { createContext } from 'react';

import Dialog, { DialogProps } from '@mui/material/Dialog';

export const ModalContext = createContext([]);

type Props = React.PropsWithChildren;

const ModalContextProvider: React.FC<Props> = ({ children }) => {
  const [Component, setComponent] = React.useState('');
  const [width, setWidth] = React.useState<DialogProps['maxWidth']>('md');
  const [open, setOpen] = React.useState(false);

  return (
    <ModalContext.Provider value={[setComponent, setOpen, setWidth]}>
      <Dialog
        fullWidth={true}
        maxWidth={width}
        open={open}
        onClose={() => setOpen(false)}
      >
        {Component}
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

import { useContext } from 'react';

import { ModalContext } from 'context/ModalContext';

const useModal = () => {
  const [setComponent, setOpen, setWidth] = useContext(ModalContext);
  return [setComponent, setOpen, setWidth];
};

export default useModal;

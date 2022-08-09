import { useContext } from 'react';

import { NotificationContext } from 'context/NotificationContext';

const useNotification = () => {
  const setNotification = useContext(NotificationContext);
  return setNotification;
};

export default useNotification;

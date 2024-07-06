import { toast } from 'react-toastify';

const options = {
  position: 'top-center',
  pauseOnHover: false,
  theme: 'dark',
};

/* eslint-disable consistent-return */
export const handleSuccess = (data, navigate) => {
  const notify = () => toast.success(data.message, options);

  if (data.code === 'SUCCESS') {
    navigate('/');
    return notify();
  }
};

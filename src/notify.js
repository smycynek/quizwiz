import { toast } from 'react-toastify';

export const notifySuccess = (text) => {
  toast.info(text, {
    hideProgressBar: true,
    autoClose: 2000,
  });
};

export const notifyFailure = (text) => {
  toast.error(text, {
    hideProgressBar: true,
    autoClose: 8000,
  });
};

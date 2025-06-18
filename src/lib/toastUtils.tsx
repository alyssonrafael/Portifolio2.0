import { toast, ToastOptions } from "react-toastify";

const base: ToastOptions = {
  autoClose: 5000,
  position: "top-right",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 60,
  theme: undefined,
  //ajustes para responsividade
  style: {
    maxWidth: "calc(100% - 1rem)",
    margin: "0.5rem",
    width: "auto",
    minWidth: "300px",
  },
};

export const toastSuccess = (msg: string) =>
  toast(msg, {
    ...base,
    type: "success",
    className: `
      !bg-green-50 dark:!bg-green-900/80 
      !text-green-800 dark:!text-green-100 
      !border !border-green-200 dark:!border-green-700
      !shadow-lg !shadow-green-100/50 dark:!shadow-green-900/20
      !rounded-lg !my-2 !mx-2 !p-4
      backdrop-blur-sm dark:backdrop-blur-sm
    `,
    progressClassName: "!bg-green-500 !h-1",
  });

export const toastError = (msg: string) =>
  toast(msg, {
    ...base,
    type: "error",
    className: `
      !bg-red-50 dark:!bg-red-900/80 
      !text-red-800 dark:!text-red-100 
      !border !border-red-200 dark:!border-red-700
      !shadow-lg !shadow-red-100/50 dark:!shadow-red-900/20
      !rounded-lg !my-2 !mx-2 !p-4
      backdrop-blur-sm dark:backdrop-blur-sm
    `,
    progressClassName: "!bg-red-500 !h-1",
  });

  export const toastInfo = (msg: string) =>
  toast(msg, {
    ...base,
    type: "info",
    className: `
      !bg-blue-50 dark:!bg-blue-900/80 
      !text-blue-800 dark:!text-blue-100 
      !border !border-blue-200 dark:!border-blue-700
      !shadow-lg !shadow-blue-100/50 dark:!shadow-blue-900/20
      !rounded-lg !my-2 !mx-2 !p-4
      backdrop-blur-sm dark:backdrop-blur-sm
    `,
    progressClassName: "!bg-blue-500 !h-1",
  });


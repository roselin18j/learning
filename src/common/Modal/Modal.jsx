import { IoClose } from "react-icons/io5";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  width = "max-w-lg",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

      <div className={`relative w-full ${width} rounded-2xl bg-white shadow-xl`}>

        <div className="flex items-center justify-between border-b px-6 py-4">

          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <button onClick={onClose}>
            <IoClose size={24} />
          </button>

        </div>

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
};

export default Modal;
import { useState } from "react";

export default function Modal({ children, trigger }) {
  console.log({ children, trigger });
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <>
      {trigger({ open })}
      {isOpen && (
        <>
          <div className="modal-backdrop" onClick={close} />
          <div className="modal">{children({ close })}</div>
        </>
      )}
    </>
  );
}

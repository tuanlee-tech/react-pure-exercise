import { createContext, useContext, useEffect, useRef, useState } from "react";

const DropdownContext = createContext();

export default function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <div className="dropdown" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Toggle = function DropdownToggle({ children }) {
  const { toggle } = useContext(DropdownContext);

  return (
    <button className="dropdown-toggle" onClick={toggle}>
      {children}
    </button>
  );
};

Dropdown.Menu = function DropdownMenu({ children }) {
  const { isOpen } = useContext(DropdownContext);

  if (!isOpen) return null;

  return <div className="dropdown-menu">{children}</div>;
};

Dropdown.Item = function DropdownItem({ children, onClick }) {
  const { close } = useContext(DropdownContext);

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <button className="dropdown-item" onClick={handleClick}>
      {children}
    </button>
  );
};

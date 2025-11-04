export default function Form({ onSubmit, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(new FormData(e.target));
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
}

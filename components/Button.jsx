export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-accent text-white py-2 px-4 rounded hover:bg-primary"
      >
        {children}
      </button>
    );
  }
  
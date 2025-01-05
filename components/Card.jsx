export default function Card({ title, children }) {
    return (
      <div className="border p-4 rounded shadow-md bg-white">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <div>{children}</div>
      </div>
    );
  }
  
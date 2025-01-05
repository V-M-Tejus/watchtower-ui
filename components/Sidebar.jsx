export default function Sidebar() {
    return (
      <aside className="bg-secondary h-screen w-64 p-4 text-white">
        <ul>
          <li className="py-2"><a href="/dashboard/admin">Admin Dashboard</a></li>
          <li className="py-2"><a href="/dashboard/hcp">HCP Dashboard</a></li>
          <li className="py-2"><a href="/dashboard/patient">Patient Dashboard</a></li>
        </ul>
      </aside>
    );
  }
  
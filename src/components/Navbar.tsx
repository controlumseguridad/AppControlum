import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between">
      <div className="font-bold text-lg">AppControlum</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Inicio</Link>
        <Link to="/example" className="hover:text-blue-500">Ejemplo</Link>
        <Link to="/clients" className="hover:text-blue-500">Clientes</Link>
      </div>
    </nav>
  );
}

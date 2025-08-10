import { useState } from "react";

type Client = { id: string; nombre: string; email: string; telefono?: string };

export default function Clients() {
  const [clientes, setClientes] = useState<Client[]>([
    { id: "c-001", nombre: "Acme Seguridad", email: "contacto@acme.com", telefono: "600 000 001" },
    { id: "c-002", nombre: "Vigilantia S.L.", email: "hola@vigilantia.es", telefono: "600 000 002" },
  ]);
  const [nuevo, setNuevo] = useState<Client>({ id: "", nombre: "", email: "", telefono: "" });

  const addCliente = () => {
    if (!nuevo.nombre || !nuevo.email) return;
    setClientes((prev) => [
      ...prev,
      { ...nuevo, id: `c-${String(prev.length + 1).padStart(3, "0")}` },
    ]);
    setNuevo({ id: "", nombre: "", email: "", telefono: "" });
  };

  return (
    <section className="max-w-5xl mx-auto mt-10 space-y-6">
      <h1 className="text-3xl font-semibold">Clientes</h1>

      <div className="bg-white shadow rounded p-6">
        <h2 className="font-medium mb-4">Nuevo cliente</h2>
        <div className="grid md:grid-cols-4 gap-3">
          <input className="border rounded px-3 py-2" placeholder="Nombre"
                 value={nuevo.nombre} onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}/>
          <input className="border rounded px-3 py-2" placeholder="Email"
                 value={nuevo.email} onChange={(e) => setNuevo({ ...nuevo, email: e.target.value })}/>
          <input className="border rounded px-3 py-2" placeholder="Teléfono (opcional)"
                 value={nuevo.telefono} onChange={(e) => setNuevo({ ...nuevo, telefono: e.target.value })}/>
          <button onClick={addCliente} className="px-4 py-2 rounded bg-black text-white">Añadir</button>
        </div>
      </div>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(c => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-3">{c.id}</td>
                <td className="px-4 py-3">{c.nombre}</td>
                <td className="px-4 py-3">{c.email}</td>
                <td className="px-4 py-3">{c.telefono ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

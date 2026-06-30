import { useTest } from "../../hooks/useTest";

export default function Products() {
  const { test } = useTest();
  const msg = test ? "sim" : "não";
  return (
    <main className="p-10 max-w-4xl mx-auto space-y-4">
      <h3 className="text-3xl font-extrabold">Produtos</h3>
      <p className="text-lg opacity-80">Página de produtos</p>
      <p>Contexto: {msg}</p>
    </main>
  );
}

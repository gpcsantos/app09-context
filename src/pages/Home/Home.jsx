export default function Home() {
  return (
    <main className="p-10 max-w-4xl mx-auto space-y-4">
      <h3 className="text-3xl font-extrabold">Bem-vindos à aula de React!</h3>
      <p className="text-lg opacity-80">
        Este texto altera sua cor automaticamente porque o componente pai (App)
        está reagindo à mudança de estado do Contexto.
      </p>
    </main>
  );
}

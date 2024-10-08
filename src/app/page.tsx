export default function Main() {
  return (
    <main>
      <div className="h-dvh border border-1 border-black max-w-lg m-auto flex flex-col">
        <header className="bg-black text-white p-2">
          <h1 className="text-3xl">The Daily Challenge</h1>
          <p>Unique, daily challenges for self-improvement.</p>
        </header>
        <div className="flex-1 flex p-2">
          <div className="m-auto border border-black">
            <h2 className="bg-orange-200 p-2 font-bold">Fitness & Health</h2>
            <div className="p-2">
              <h3>Challenge</h3>
              <p>Complete 20 minutes of stretching exercises today.</p>
            </div>
            <div className="p-2">
              <h3>Explanation</h3>
              <p>
                Stretching helps improve flexibility, relieve tension, and boost
                muscle recovery after workouts.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-700 text-white p-2 text-center">
          <p>Made with ❤️ by Rafael Negron</p>
        </div>
      </div>
    </main>
  );
}

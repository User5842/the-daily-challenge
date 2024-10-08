import Link from "next/link";

export default function Main() {
  return (
    <main>
      <div className="h-dvh max-w-lg m-auto flex">
        <div className="m-auto flex flex-col gap-2">
          <header className="bg-black text-white p-2">
            <h1 className="text-3xl">The Daily Challenge</h1>
            <p>Unique, daily challenges for self-improvement.</p>
          </header>
          <div>
            <ul className="flex gap-2 justify-end">
              <li className="bg-black p-2 text-white">
                <Link href="#">Account</Link>
              </li>
              <li className="bg-black p-2 text-white">
                <Link href="#">About</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <div className="m-auto flex flex-col gap-2">
              <div className="border border-black">
                <h2 className="bg-orange-200 p-2 font-bold text-xl">
                  Fitness & Health
                </h2>
                <div className="p-2">
                  <h3 className="font-semibold">Challenge</h3>
                  <p>Complete 20 minutes of stretching exercises today.</p>
                </div>
                <div className="p-2">
                  <h3 className="font-semibold">Explanation</h3>
                  <p>
                    Stretching helps improve flexibility, relieve tension, and
                    boost muscle recovery after workouts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-end">
                <div className="flex gap-2 border border-black p-2">
                  <div className="cursor-pointer">👍</div>
                  <div>0</div>
                </div>
                <div className="flex gap-2 border border-black p-2">
                  <div className="cursor-pointer">👎</div>
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-slate-700 text-white p-2 text-center">
            <p>Made with ❤️ by Rafael Negron</p>
          </footer>
        </div>
      </div>
    </main>
  );
}

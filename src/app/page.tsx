export default function Main() {
  return (
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
              Stretching helps improve flexibility, relieve tension, and boost
              muscle recovery after workouts.
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
  );
}

export default function Account() {
  return (
    <div className="flex flex-col gap-4">
      <p className="bg-orange-200 p-2 border border-black dark:text-black dark:border-white">
        Keep track of how many challenges you&apos;ve completed and upvote or
        downvote specific challenges.
      </p>
      <p className="bg-orange-200 p-2 border border-black dark:text-black dark:border-white">
        Keep it up, and go on a streak! How long can you maintain it? 🔥
      </p>
      <form action="" method="post" className="flex flex-col gap-2">
        <div>
          <label htmlFor="email">Enter your email: </label>
          <input
            className="border border-black p-1"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Enter your password: </label>
          <input
            className="border border-black p-1"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
        <div className="bg-black text-white p-2 w-fit dark:border-white dark:border">
          <button type="submit">Create account</button>
        </div>
      </form>
    </div>
  );
}

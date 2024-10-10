import { auth, signIn, signOut } from "@/../auth";

export default async function Account() {
  const signedInHTML = (
    <>
      <p className="bg-orange-200 p-2 border border-black dark:text-black dark:border-white">
        Challenges completed: 0
      </p>
      <p className="bg-red-200 p-2 border border-black dark:text-black dark:border-white">
        Current streak: 0
      </p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="flex flex-col gap-2"
      >
        <div className="bg-black text-white p-2 w-fit dark:border-white dark:border">
          <button type="submit">Sign out</button>
        </div>
      </form>
    </>
  );

  const signedOutHTML = (
    <>
      <p className="bg-orange-200 p-2 border border-black dark:text-black dark:border-white">
        Keep track of how many challenges you&apos;ve completed and upvote or
        downvote specific challenges.
      </p>
      <p className="bg-orange-200 p-2 border border-black dark:text-black dark:border-white">
        Keep it up, and go on a streak! How long can you maintain it? 🔥
      </p>
      <p className="bg-blue-200 p-2 border border-black dark:text-black dark:border-white">
        🛈 The following sign in method relies on an email magic link. You'll
        have 24 hours to click on the link to the provided email to sign
        in/create an account.
      </p>
      <form
        action={async () => {
          "use server";
          await signIn("email", { redirectTo: "/" });
        }}
        className="flex flex-col gap-2"
      >
        <div className="bg-black text-white p-2 w-fit dark:border-white dark:border">
          <button type="submit">Sign in</button>
        </div>
      </form>
    </>
  );

  const session = await auth();

  const resultantHTML = session?.user ? signedInHTML : signedOutHTML;

  return <div className="flex flex-col gap-4">{resultantHTML}</div>;
}

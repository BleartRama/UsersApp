import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            React Users App
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
            Explore users from an external API
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-8 text-slate-400">
            A React application built with TypeScript, React Router and
            TanStack Query.
          </p>

          <Link
            to="/users"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            View Users
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
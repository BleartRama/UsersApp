import { useQuery } from "@tanstack/react-query";
import fetchUsers from "../services/userApi";
import UserCard from "../components/UserCard";

const UsersPage = () => {
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return (
      <main className="h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-lg text-slate-400">
            Loading users...
          </p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-lg font-medium text-red-400">
            We couldn't load the users.
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Please try again later.
          </p>
        </div>
      </main>
    );
  }

  if (!data || data.length === 0) {
    return (
      <main className="h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-lg text-slate-400">
            No users found.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-65px)] bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Users
          </p>

          <h1 className="mb-3 text-4xl font-bold tracking-tight">
            All Users
          </h1>

          <p className="max-w-xl text-slate-400">
            Browse users retrieved from our external API.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default UsersPage;
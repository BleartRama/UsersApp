import type { User } from "../types/User";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          {user.profile.name}
        </h2>

        <p className="text-sm text-blue-400">
          @{user.username}
        </p>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <p className="text-slate-500">Email</p>
          <p className="text-slate-300">
            {user.profile.email}
          </p>
        </div>

        <div>
          <p className="text-slate-500">Location</p>
          <p className="text-slate-300">
            {user.profile.address.city}
          </p>
        </div>

        <div>
          <p className="text-slate-500">Address</p>
          <p className="text-slate-300">
            {user.profile.address.street},{" "}
            {user.profile.address.zipCode}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {user.roles.map((role) => (
          <span
            key={role}
            className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
          >
            {role}
          </span>
        ))}
      </div>
    </article>
  );
};

export default UserCard;
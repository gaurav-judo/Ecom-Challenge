import { useForm } from "react-hook-form";

export default function LoginPage({setToggle}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="w-full max-w-md px-8 py-10 rounded-3xl bg-white/5 backdrop-blur-xl shadow-2xl">
        <h1 className="text-3xl font-semibold mb-1">Log in</h1>
        <p className="text-sm text-gray-300 mb-8">
          Welcome back, sign in to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full bg-transparent text-sm py-2 placeholder:text-slate-500 outline-none border-b border-slate-600 focus:border-indigo-400"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full bg-transparent text-sm py-2 placeholder:text-slate-500 outline-none border-b border-slate-600 focus:border-indigo-400"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-xs text-red-400 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-sm font-medium shadow-lg shadow-fuchsia-500/30 hover:brightness-110 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-300">
          Don&apos;t have an account?{" "}
          <button className="text-indigo-300 font-medium hover:underline" onClick={() => setToggle((prev) => !prev)}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

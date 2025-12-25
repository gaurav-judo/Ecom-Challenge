import { useForm } from "react-hook-form";

export default function RegisterPage({setToggle}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="w-full max-w-md px-8 py-10 rounded-3xl bg-white/5 backdrop-blur-xl shadow-2xl">
        <h1 className="text-3xl font-semibold mb-1">Create account</h1>
        <p className="text-sm text-gray-300 mb-8">Sign up to get started</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full bg-transparent text-sm py-2 placeholder:text-slate-500 outline-none border-b border-slate-600 focus:border-indigo-400"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-xs text-red-400 mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full bg-transparent text-sm py-2 placeholder:text-slate-500 outline-none border-b border-slate-600 focus:border-indigo-400"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full bg-transparent text-sm py-2 placeholder:text-slate-500 outline-none border-b border-slate-600 focus:border-indigo-400"
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p className="text-xs text-red-400 mt-1">
                {errors.phone.message}
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
                minLength: { value: 6, message: "Min 6 characters" },
              })}
              className="w-full bg-transparent text-sm py-2 placeholder:text-slate-500 outline-none border-b border-slate-600 focus:border-indigo-400"
              placeholder="Create a strong password"
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
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-300">
          Already have an account?{" "}
          <button className="text-indigo-300 font-medium hover:underline" onClick={() => setToggle((prev) => !prev)}>
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

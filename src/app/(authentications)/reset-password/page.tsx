"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";

interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="bg-black text-orange-500 min-h-screen flex items-center justify-center">Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!token) {
      setError("Reset link is missing or invalid");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password: data.password,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "Unable to reset password");
        return;
      }

      setSuccessMessage("Your password has been reset. Redirecting to sign in...");
      router.replace("/signin?reset=success");
    } catch {
      setError("Unable to reset password right now");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative" style={{ backgroundImage: "url(/images/logos/background-1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-black/80"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md bg-gray-900/90 backdrop-blur-sm shadow-2xl overflow-hidden border border-orange-600/30"
      >
        <div className="bg-orange-800/80 p-8 text-center border-b border-orange-600/20">
          <Link href="/" className="inline-block">
            <div className="mx-auto h-20 w-20 bg-orange-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl font-orbitron">CE</span>
            </div>
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-white font-orbitron uppercase tracking-wider">Choose New Password</h1>
          <p className="mt-2 text-gray-300 font-rajdhani">Enter a new password for your admin account</p>
        </div>

        <div className="p-8 bg-orange-900/50">
          {error && (
            <div className="mb-6 p-4 bg-orange-900/50 text-orange-300 text-sm border border-orange-500/30 font-rajdhani">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-900/30 text-emerald-200 text-sm border border-emerald-500/30 font-rajdhani">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2 font-rajdhani">
                New Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className={`w-full px-4 py-3 bg-white text-orange-950 font-rajdhani ${errors.password ? "border-orange-500" : "border-orange-600/30"} border focus:ring-2 focus:ring-gray-600 focus:border-orange-600/30 placeholder-gray-800/60`}
                placeholder="Enter your new password"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-orange-400 font-rajdhani">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2 font-rajdhani">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                className={`w-full px-4 py-3 bg-white text-orange-950 font-rajdhani ${errors.confirmPassword ? "border-orange-500" : "border-orange-600/30"} border focus:ring-2 focus:ring-gray-600 focus:border-orange-600/30 placeholder-gray-800/60`}
                placeholder="Confirm your new password"
              />
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-orange-400 font-rajdhani">{errors.confirmPassword.message}</p>
              )}
            </div>

            <motion.button
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              type="submit"
              disabled={loading || !token}
              className={`group relative w-full flex justify-center items-center py-4 px-4 border border-transparent shadow-lg text-sm font-bold font-orbitron uppercase tracking-wider text-white overflow-hidden transition-all duration-300 ${loading || !token ? "bg-orange-600 cursor-not-allowed" : "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600"}`}
            >
              <span className="relative flex items-center">
                {loading ? "Resetting Password..." : "Update Password"}
              </span>
            </motion.button>
          </form>

          <div className="mt-8 text-center text-sm text-orange-200 font-rajdhani">
            <Link href="/signin" className="font-medium text-orange-600 hover:text-orange-300">
              Back to sign in
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
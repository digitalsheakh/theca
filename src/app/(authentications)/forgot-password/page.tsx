"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface ForgotPasswordFormData {
  email: string;
}

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [devResetUrl, setDevResetUrl] = useState("");

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setLoading(true);
    setError("");
    setSuccessMessage("");
    setDevResetUrl("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "Unable to send password reset email");
        return;
      }

      setSuccessMessage(result.message || "Check your email for a password reset link.");
      if (typeof result.resetUrl === "string") {
        setDevResetUrl(result.resetUrl);
      }
    } catch {
      setError("Unable to process your request right now");
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
          <h1 className="mt-6 text-3xl font-bold text-white font-orbitron uppercase tracking-wider">Reset Password</h1>
          <p className="mt-2 text-gray-300 font-rajdhani">Enter your email and we will send you a reset link</p>
        </div>

        <div className="p-8 bg-orange-900/50">
          {error && (
            <div className="mb-6 p-4 bg-orange-900/50 text-orange-300 text-sm border border-orange-500/30 font-rajdhani">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-900/30 text-emerald-200 text-sm border border-emerald-500/30 font-rajdhani space-y-3">
              <p>{successMessage}</p>
              {devResetUrl && (
                <p className="break-all">
                  Development reset link: <a href={devResetUrl} className="underline text-emerald-100">{devResetUrl}</a>
                </p>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2 font-rajdhani">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-3 bg-white text-orange-950 font-rajdhani ${errors.email ? "border-orange-500" : "border-orange-600/30"} border focus:ring-2 focus:ring-gray-600 focus:border-orange-600/30 placeholder-gray-800/60`}
                placeholder="admin@thecaredition.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-orange-400 font-rajdhani">{errors.email.message}</p>
              )}
            </div>

            <motion.button
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center items-center py-4 px-4 border border-transparent shadow-lg text-sm font-bold font-orbitron uppercase tracking-wider text-white overflow-hidden transition-all duration-300 ${loading ? "bg-orange-600 cursor-not-allowed" : "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600"}`}
            >
              <span className="relative flex items-center">
                {loading ? "Sending Reset Link..." : "Send Reset Link"}
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
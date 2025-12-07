import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export type AuthMode = "login" | "register";

export default function Auth({ mode = "login" }: { mode?: AuthMode }) {
  const { userLoggedIn, loading, signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const [authMode, setAuthMode] = useState<AuthMode>(mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (userLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [userLoggedIn, navigate]);

  // If auth state still loading, show nothing (or a spinner)
  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  // If already logged in, render child routes
  if (userLoggedIn) return <Outlet />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      if (authMode === "login") {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      // onAuthStateChanged will redirect via effect
    } catch (err: any) {
      setError(err.message || "Authentication error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#1c2e4a] text-center">
            {authMode === "login" ? "Sign in to BankDash" : "Create BankDash Account"}
          </h2>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <label className="block text-base font-medium text-[#374151]">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="w-full mt-3 pl-4 pr-4 py-3 rounded-lg bg-white border border-[#d1d5db] placeholder:text-[#9ca3af] focus:outline-none"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-base font-medium text-[#374151]">
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              minLength={6}
              className="w-full mt-3 pl-4 pr-4 py-3 rounded-lg bg-white border border-[#d1d5db] placeholder:text-[#9ca3af] focus:outline-none"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-lg bg-[#1c2e4a] text-white text-lg font-medium shadow hover:bg-[#233956] transition disabled:opacity-60"
          >
            {submitting ? "Please wait..." : authMode === "login" ? "Sign in" : "Create account"}
          </button>

          <div className="text-center text-sm text-[#6b7280]">
            {authMode === "login" ? (
              <>
                Don't have an account?{' '}
                <button type="button" onClick={() => setAuthMode("register")} className="text-[#1c2e4a] underline">
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" onClick={() => setAuthMode("login")} className="text-[#1c2e4a] underline">
                  Sign in
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

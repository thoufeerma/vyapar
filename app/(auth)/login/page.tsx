import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
      <p className="mt-1.5 text-[13px] text-[var(--text-secondary)]">
        Log in to continue to your books.
      </p>

      <div className="mt-8">
        <Suspense fallback={<div className="h-48 animate-pulse rounded-lg bg-[var(--surface-2)]" />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}

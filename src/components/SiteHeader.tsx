import { Link, useNavigate } from "@tanstack/react-router";
import { Compass, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";

export function SiteHeader() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/", replace: true });
  }

  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Compass className="h-5 w-5 text-primary" />
          <span className="text-display text-lg font-medium text-primary">Compass</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <Link to="/features" className="btn-ghost">Features</Link>
          {user && <Link to="/dashboard" className="btn-ghost">Dashboard</Link>}
          {user && <Link to="/history" className="btn-ghost">History</Link>}
        </nav>
        <div className="flex items-center gap-2">
          {loading ? null : user ? (
            <button onClick={handleSignOut} className="btn-outline">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          ) : (
            <>
              <Link to="/auth" className="btn-ghost">Sign in</Link>
              <Link to="/auth" className="btn-primary">Get started</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

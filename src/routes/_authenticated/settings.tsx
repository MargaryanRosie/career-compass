import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { getProfile, updateProfileName } from "@/services/assessments";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/_authenticated/settings")({
  head: () => ({ meta: [{ title: "Profile settings — Compass" }] }),
  component: Settings,
});

function Settings() {
  const { user } = useAuth();
  const userId = user?.id ?? "";
  const qc = useQueryClient();
  const { data: profile } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getProfile(userId),
    enabled: !!userId,
  });
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (profile?.full_name) setName(profile.full_name);
  }, [profile?.full_name]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      await updateProfileName(userId, name);
      qc.invalidateQueries({ queryKey: ["profile", userId] });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <p className="gold-chip">Settings</p>
      <h1 className="mt-3 text-4xl text-display">Your profile</h1>

      <form onSubmit={handleSave} className="card-elegant mt-8 space-y-5 p-8">
        <div>
          <label className="text-sm text-muted-foreground">Email</label>
          <input className="field-input mt-1" value={user?.email ?? ""} disabled />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Full name</label>
          <input
            className="field-input mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" disabled={busy} className="btn-primary">
            {busy ? "Saving…" : "Save changes"}
          </button>
          {saved && <span className="text-sm text-muted-foreground">Saved ✓</span>}
        </div>
      </form>
    </div>
  );
}

import { createFileRoute, redirect } from "@tanstack/react-router";

// Bilal's profile now lives at /MBK (mirroring /haroon).
// The root URL redirects there so existing links keep working.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/MBK" });
  },
});

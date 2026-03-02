import { AppShell } from "@/components/app-shell";
import { rooms } from "@/lib/rooms";

export default function HomePage(): React.JSX.Element {
  return <AppShell rooms={rooms} />;
}

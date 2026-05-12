import { UnlockSetter } from "@/components/os/unlock-setter";

export default function OSLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <UnlockSetter />
      {children}
    </>
  );
}

import { Header } from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
      {children}
    </div>
  );
} 
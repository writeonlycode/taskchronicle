import "./globals.css";

export const metadata = {
  title: "Task Chronicle ",
  description:
    "Task Chronicle is a user-friendly time tracking application designed to assist individuals in efficiently logging and managing their working hours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}

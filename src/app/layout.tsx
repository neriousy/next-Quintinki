import '@/app/ui/global.css';
import Navbar from './ui/Navbar/Navbar';

export const metadata = {
  title: 'Quintinki',
  description: 'Site for Family Quintin in Nostale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

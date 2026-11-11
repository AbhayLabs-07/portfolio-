import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4F1E8] text-[#242521] flex flex-col justify-between p-6 sm:p-12 md:p-16">
      <header className="border-b border-[#E2DDD1] pb-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E65B35] font-semibold flex items-center gap-2">
          <Compass size={14} />
          <span>ROUTE DISCONNECTED // 404</span>
        </span>
      </header>

      <main className="max-w-2xl py-16">
        <div className="font-mono text-xs text-[#9B998E] mb-2 uppercase tracking-wider">
          STATUS CODE // 404_PAGE_NOT_FOUND
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#242521] tracking-tight leading-tight">
          Target System or Coordinate Not Located
        </h1>
        <p className="mt-6 font-body text-base sm:text-lg text-[#5A5950] leading-relaxed">
          The requested path does not exist on this domain or has been retired. All engineering flagships, research dossiers, and verified telemetry are accessible from the main index.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#242521] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#E65B35] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E65B35]"
          >
            <ArrowLeft size={14} />
            <span>Return to Portfolio Index</span>
          </Link>
        </div>
      </main>

      <footer className="border-t border-[#E2DDD1] pt-6 flex items-center justify-between font-mono text-xs text-[#77766F]">
        <span>Abhay Vishwakarma</span>
        <span>© 2026 · All Rights Reserved</span>
      </footer>
    </div>
  );
}

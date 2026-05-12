'use client';
import Link from 'next/link';

export function TradingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1FD9B6]/10 bg-[#0F1F1F] backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#1FD9B6] to-[#0FB5A6] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[#1FD9B6]/30 transition-all duration-300">
            <span className="text-sm font-bold text-[#0A1515]">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white group-hover:text-[#1FD9B6] transition-colors">
              TradeHub
            </span>
            <span className="text-xs text-[#1FD9B6] font-medium">Professional Trading</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          <a
            href="#features"
            className="px-4 py-2 text-sm text-gray-300 hover:text-[#1FD9B6] hover:bg-[#1FD9B6]/10 rounded-lg transition-all duration-300"
          >
            Features
          </a>
          <a
            href="#security"
            className="px-4 py-2 text-sm text-gray-300 hover:text-[#1FD9B6] hover:bg-[#1FD9B6]/10 rounded-lg transition-all duration-300"
          >
            Security
          </a>
          <a
            href="#team"
            className="px-4 py-2 text-sm text-gray-300 hover:text-[#1FD9B6] hover:bg-[#1FD9B6]/10 rounded-lg transition-all duration-300"
          >
            Team
          </a>
          <a
            href="https://docs.tradehub.com"
            className="px-4 py-2 text-sm text-gray-300 hover:text-[#1FD9B6] hover:bg-[#1FD9B6]/10 rounded-lg transition-all duration-300"
          >
            Docs
          </a>
        </nav>

        {/* CTA Button */}
        <Link
          href="#cta"
          className="px-6 py-2.5 bg-[#1FD9B6] text-[#0F2A2A] font-semibold rounded-lg hover:bg-[#1AC99F] hover:shadow-lg hover:shadow-[#1FD9B6]/30 transition-all duration-300 text-sm"
        >
          Open Account
        </Link>
      </div>
    </header>
  );
}

import { routes } from "@/lib/config";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center p-8 sm:p-20 bg-background">
      <main className="flex flex-col gap-12 items-center w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Better Shadcn Auth Template</h1>
        <p className="text-center text-muted-foreground max-w-xl mb-2">
          Modern authentication template built with <span className="font-semibold">Next.js</span>, <span className="font-semibold">shadcn/ui</span>, <span className="font-semibold">NeonDB</span>, <span className="font-semibold">better-auth</span> and <span className="font-semibold">Drizzle ORM</span>.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center justify-center w-full">
          {/* Next.js */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_408_139" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                <circle cx="90" cy="90" r="90" fill="black"/>
              </mask>
              <g mask="url(#mask0_408_139)">
                <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6"/>
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
                <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xs mt-1">Next.js</span>
          </div>
          {/* shadcn/ui */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#fff" strokeWidth="25" strokeLinecap="round" d="M208 128l-80 80M192 40L40 192"/></svg>
            <span className="text-xs mt-1">shadcn/ui</span>
          </div>
          {/* NeonDB */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><defs><linearGradient id="a" x1="100%" x2="12.069%" y1="100%" y2="0%"><stop offset="0%" stopColor="#62F755"/><stop offset="100%" stopColor="#8FF986" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="100%" x2="40.603%" y1="100%" y2="76.897%"><stop offset="0%" stopOpacity=".9"/><stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"/></linearGradient></defs><path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"/><path fill="url(#a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"/><path fill="url(#b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"/><path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"/></svg>
            <span className="text-xs mt-1">NeonDB</span>
          </div>
          {/* better-auth */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500"><path fill="#fff" d="M0 0h500v500H0z"/><path fill="#000" d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z"/><path fill="#000" d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z"/><path fill="#000" d="M252.762 204.455v92.089h-96.774v-92.089z"/></svg>
            <span className="text-xs mt-1">better-auth</span>
          </div>
          {/* Drizzle ORM */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 160"><rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"/><rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"/><rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"/><rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"/></svg>
            <span className="text-xs mt-1">Drizzle ORM</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center mt-8">
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href={routes.login}
            >
              Login
            </Link>
            <Link
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href={routes.register}
            >
              Register
            </Link>
          </div>
          <div className="text-xs text-muted-foreground text-center mt-2">
            <span className="font-medium">Email</span> login is available now.<br />
            <span className="font-medium">GitHub</span> and <span className="font-medium">Google</span> login coming soon.
          </div>
        </div>
      </main>
      <footer className="mt-16 flex gap-6 flex-wrap items-center justify-center text-xs text-muted-foreground">
        <a href="https://github.com/ted2xmen/better-shadcn-auth" target="_blank" rel="noopener noreferrer" className="hover:underline">View on GitHub</a>
        <span>•</span>
        <span> {new Date().getFullYear()} better-auth template</span>
      </footer>
    </div>
  );
}

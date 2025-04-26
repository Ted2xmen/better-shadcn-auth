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
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 items-center justify-center w-full">


          {/* Next.js */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_408_139" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                <circle cx="90" cy="90" r="90" fill="black" />
              </mask>
              <g mask="url(#mask0_408_139)">
                <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)" />
                <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xs mt-1">Next.js</span>
          </div>
          {/* shadcn/ui */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z" /><path fill="none" stroke="#fff" strokeWidth="25" strokeLinecap="round" d="M208 128l-80 80M192 40L40 192" /></svg>
            <span className="text-xs mt-1">shadcn/ui</span>
          </div>

          {/* React Query */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 633 633"><defs><linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="71.65%"><stop offset="0%" stopColor="#6BDAFF" /><stop offset="31.922%" stop-color="#F9FFB5" /><stop offset="70.627%" stop-color="#FFA770" /><stop offset="100%" stop-color="#FF7373" /></linearGradient><linearGradient id="d" x1="43.996%" x2="53.441%" y1="8.54%" y2="93.872%"><stop offset="0%" stop-color="#673800" /><stop offset="100%" stop-color="#B65E00" /></linearGradient><linearGradient id="e" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2F8A00" /><stop offset="100%" stop-color="#90FF57" /></linearGradient><linearGradient id="f" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2F8A00" /><stop offset="100%" stop-color="#90FF57" /></linearGradient><linearGradient id="g" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2F8A00" /><stop offset="100%" stop-color="#90FF57" /></linearGradient><linearGradient id="h" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2F8A00" /><stop offset="100%" stop-color="#90FF57" /></linearGradient><linearGradient id="i" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2F8A00" /><stop offset="100%" stop-color="#90FF57" /></linearGradient><linearGradient id="j" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2F8A00" /><stop offset="100%" stop-color="#90FF57" /></linearGradient><linearGradient id="k" x1="92.9%" x2="8.641%" y1="45.768%" y2="54.892%"><stop offset="0%" stop-color="#EE2700" /><stop offset="100%" stop-color="#FF008E" /></linearGradient><linearGradient id="l" x1="61.109%" x2="43.717%" y1="3.633%" y2="43.072%"><stop offset="0%" stop-color="#FFF400" /><stop offset="100%" stop-color="#3C8700" /></linearGradient><linearGradient id="m" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFDF00" /><stop offset="100%" stop-color="#FF9D00" /></linearGradient><linearGradient id="n" x1="127.279%" x2="0%" y1="49.778%" y2="50.222%"><stop offset="0%" stop-color="#FFA400" /><stop offset="100%" stop-color="#FF5E00" /></linearGradient><linearGradient id="o" x1="127.279%" x2="0%" y1="47.531%" y2="52.469%"><stop offset="0%" stop-color="#FFA400" /><stop offset="100%" stop-color="#FF5E00" /></linearGradient><linearGradient id="p" x1="127.279%" x2="0%" y1="46.195%" y2="53.805%"><stop offset="0%" stop-color="#FFA400" /><stop offset="100%" stop-color="#FF5E00" /></linearGradient><linearGradient id="q" x1="127.279%" x2="0%" y1="35.33%" y2="64.67%"><stop offset="0%" stop-color="#FFA400" /><stop offset="100%" stop-color="#FF5E00" /></linearGradient><linearGradient id="r" x1="127.279%" x2="0%" y1="4.875%" y2="95.125%"><stop offset="0%" stop-color="#FFA400" /><stop offset="100%" stop-color="#FF5E00" /></linearGradient><linearGradient id="s" x1="78.334%" x2="31.668%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFA400" /><stop offset="100%" stop-color="#FF5E00" /></linearGradient><linearGradient id="t" x1="57.913%" x2="44.88%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFA400" /><stop offset="100%" stop-color="#FF5E00" /></linearGradient><linearGradient id="u" x1="50.495%" x2="49.68%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFA400" /><stop offset="100%" stop-color="#FF5E00" /></linearGradient><circle id="a" cx="308.5" cy="308.5" r="308.5" /><circle id="v" cx="307.5" cy="308.5" r="316.5" /></defs><g fill="none" fill-rule="evenodd" transform="translate(9 8)"><mask id="c" fill="#fff"><use xlinkHref="#a" /></mask><use xlinkHref="#a" fill="url(#b)" /><ellipse cx="81.5" cy="602.5" fill="#015064" stroke="#00CFE2" stroke-width="25" mask="url(#c)" rx="214.5" ry="185.968" /><ellipse cx="535.5" cy="602.5" fill="#015064" stroke="#00CFE2" stroke-width="25" mask="url(#c)" rx="214.5" ry="185.968" /><ellipse cx="81.5" cy="640.5" fill="#015064" stroke="#00A8B8" stroke-width="25" mask="url(#c)" rx="214.5" ry="185.968" /><ellipse cx="535.5" cy="640.5" fill="#015064" stroke="#00A8B8" stroke-width="25" mask="url(#c)" rx="214.5" ry="185.968" /><ellipse cx="81.5" cy="676.5" fill="#015064" stroke="#007782" stroke-width="25" mask="url(#c)" rx="214.5" ry="185.968" /><ellipse cx="535.5" cy="676.5" fill="#015064" stroke="#007782" stroke-width="25" mask="url(#c)" rx="214.5" ry="185.968" /><g mask="url(#c)"><path fill="url(#d)" stroke="#6E3A00" stroke-width="6.088" d="M98.318 88.007c7.691 37.104 16.643 72.442 26.856 106.013 10.212 33.571 25.57 68.934 46.07 106.088l-51.903 11.67c-10.057-60.01-17.232-99.172-21.525-117.487-4.293-18.315-10.989-51.434-20.089-99.357l20.591-6.927" transform="scale(-1 1) rotate(25 -300.37 -553.013)" /><g stroke="#2F8A00"><path fill="url(#e)" stroke-width="9.343" d="M108.544 66.538s-13.54-21.305-37.417-27.785c-15.917-4.321-33.933.31-54.048 13.892C33.464 65.975 47.24 73.52 58.405 75.28c16.749 2.64 50.14-8.74 50.14-8.74Z" transform="rotate(1 -6061.691 5926.397)" /><path fill="url(#f)" stroke-width="9.343" d="M108.544 67.138s-47.187-5.997-81.077 19.936C4.873 104.362-3.782 137.794 1.502 187.369c28.42-29.22 48.758-50.836 61.016-64.846 18.387-21.016 46.026-55.385 46.026-55.385Z" transform="rotate(1 -6061.691 5926.397)" /><path fill="url(#g)" stroke-width="9.343" d="M108.544 66.538c-1.96-21.705 3.98-38.018 17.82-48.94C140.203 6.674 154.85.808 170.303 0c-4.865 21.527-12.373 36.314-22.524 44.361-10.151 8.048-23.23 15.44-39.236 22.177Z" transform="rotate(1 -6061.691 5926.397)" /><path fill="url(#h)" stroke-width="9.343" d="M108.544 67.138c29.838-31.486 61.061-42.776 93.669-33.869C234.82 42.176 253.749 60.785 259 89.096c-34.898-3.657-59.974-6.343-75.228-8.058-15.254-1.716-40.33-6.349-75.228-13.9Z" transform="rotate(1 -6061.691 5926.397)" /><path fill="url(#i)" stroke-width="9.343" d="M108.544 67.138c34.868-9.381 64.503-3.658 88.905 17.17 24.402 20.829 39.656 46.686 45.762 77.571-39.626-7.574-68.4-20.115-86.322-37.624a395.051 395.051 0 0 1-48.345-57.117Z" transform="rotate(1 -6061.691 5926.397)" /><path fill="url(#j)" stroke-width="9.343" d="M108.544 67.138C76.206 82.6 57.608 105.366 52.75 135.436c-4.858 30.07-.292 62.89 13.698 98.462 24.873-41.418 38.905-71.368 42.096-89.849 3.191-18.48 3.191-44.118 0-76.91Z" transform="rotate(1 -6061.691 5926.397)" /><path stroke-linecap="round" stroke-width="5.91" d="M211.284 173.477c-13.851 21.992-23.291 42.022-28.32 60.093-5.03 18.071-8.175 33.143-9.436 45.216" /><path stroke-linecap="round" stroke-width="5.91" d="M209.814 176.884c-23.982 2.565-42.792 10.469-56.428 23.714-13.639 13.245-23.483 26.136-29.536 38.674M219.045 167.299c29.028-7.723 50.972-10.173 65.831-7.352 14.859 2.822 26.807 7.659 35.842 14.51M211.31 172.618c20.29 9.106 38.353 19.052 54.186 29.837 15.833 10.786 27.714 20.99 35.643 30.617" /></g><path stroke="#830305" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="6.937" d="m409.379 398.157-23.176 18.556M328.04 375.516l-22.313 28.398M312.904 353.698l53.18 59.816" /><path fill="url(#k)" d="M67.585 27.463H5.68C1.893 28.148 0 30.38 0 34.16c0 3.78 1.893 6.211 5.68 7.293h67.17l41.751-30.356c2.488-2.646 2.794-5.315.92-8.006s-4.6-3.626-8.177-2.803l-39.76 27.174Z" transform="scale(-1 1) rotate(-9 2092.128 2856.854)" /><path fill="#D8D8D8" stroke="#FFF" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="4.414" d="m402.861 391.51.471-4.088M382.21 388.752l.472-4.087M361.546 385.404l.485-3.845M337.59 371.883l2.56-2.498M324.276 359.567l2.56-2.497" /></g><ellipse cx="308.5" cy="720.5" fill="url(#l)" mask="url(#c)" rx="266" ry="316.5" /><ellipse cx="308.5" cy="720.5" stroke="#6DA300" stroke-opacity=".502" stroke-width="26" mask="url(#c)" rx="253" ry="303.5" /><g mask="url(#c)"><g transform="translate(389 -32)"><circle cx="168.5" cy="113.5" r="113.5" fill="url(#m)" /><circle cx="168.5" cy="113.5" r="106" stroke="#FFC900" stroke-opacity=".529" stroke-width="15" /><path stroke="url(#n)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12" d="M30 113H0" /><path stroke="url(#o)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12" d="M33.5 79.5 7 74" /><path stroke="url(#p)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12" d="m34 146-29 8" /><path stroke="url(#q)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12" d="m45 177-24 13" /><path stroke="url(#r)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12" d="m67 204-20 19" /><path stroke="url(#s)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12" d="m94.373 227-13.834 22.847" /><path stroke="url(#t)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12" d="M127.5 243.5 120 268" /><path stroke="url(#u)" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="12" d="m167.5 252.5.5 24.5" /></g></g><circle cx="307.5" cy="308.5" r="304" stroke="#000" stroke-width="25" /></g></svg>
            <span className="text-xs mt-1">react query</span>
          </div>

          {/* NeonDB */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><defs><linearGradient id="a" x1="100%" x2="12.069%" y1="100%" y2="0%"><stop offset="0%" stopColor="#62F755" /><stop offset="100%" stopColor="#8FF986" stopOpacity="0" /></linearGradient><linearGradient id="b" x1="100%" x2="40.603%" y1="100%" y2="76.897%"><stop offset="0%" stopOpacity=".9" /><stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" /></linearGradient></defs><path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z" /><path fill="url(#a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z" /><path fill="url(#b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z" /><path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z" /></svg>
            <span className="text-xs mt-1">NeonDB</span>
          </div>
          {/* better-auth */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500"><path fill="#fff" d="M0 0h500v500H0z" /><path fill="#000" d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z" /><path fill="#000" d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z" /><path fill="#000" d="M252.762 204.455v92.089h-96.774v-92.089z" /></svg>
            <span className="text-xs mt-1">better-auth</span>
          </div>
          {/* Drizzle ORM */}
          <div className="flex flex-col items-center gap-2">
            <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 160"><rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)" /><rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)" /><rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)" /><rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)" /></svg>
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

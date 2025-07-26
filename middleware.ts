import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("✅ Middleware triggered:", request.nextUrl.pathname);

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // 👈 This goes here, not next.config.js
};

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   const locales = ["en-us", "es-es"];
//   console.log("💡 Middleware triggered:", request.nextUrl.pathname); // 👈 Add this

//   if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
//     return NextResponse.next();
//   }

//   const cookieLang = request.cookies.get("NEXT_LOCALE")?.value;
//   const acceptLang = request.headers.get("accept-language")?.toLowerCase();
//   const browserLang = acceptLang?.includes("es") ? "es-es" : "en-us";

//   const lang = cookieLang || browserLang;

//   return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
// }

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("caca");
  console.log("caca");
  console.log("caca");
  console.log("caca");
  console.log("caca");
  console.log("caca");
  console.log("caca");
  console.log("caca");
  console.log("caca");
  console.log("caca");
  console.log("caca");
  try {
    console.log("✅ Middleware triggered:", request.nextUrl.pathname);
    console.log("caca");
    return NextResponse.next();
  } catch (err) {
    console.error("❌ Middleware error:", err);
    return new Response("Middleware crashed", { status: 500 });
  }
}

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

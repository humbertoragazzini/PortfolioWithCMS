import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locales = ["en-us", "es-es"];
  console.log("💡 Middleware triggered:", request.nextUrl.pathname); // 👈 Add this

  const cookieLang = request.cookies.get("NEXT_LOCALE")?.value;
  const acceptLang = request.headers.get("accept-language")?.toLowerCase();
  const browserLang = acceptLang?.includes("es") ? "es-es" : "en-us";

  const lang = cookieLang || browserLang;

  if (pathname == "/en-us" || pathname == "/es-es") {
    return NextResponse.redirect(new URL(`/${lang}/home`, request.url));
  } else {
    if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

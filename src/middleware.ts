import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locales = ["en-us", "es-es"];
  console.log("💡 Middleware triggered:", request.nextUrl.pathname); // 👈 Add this

  if (pathname == "/es-es" || pathname == "/en-us") {
    return NextResponse.redirect(new URL(`/${pathname}/home`, request.url));
  }

  const cookieLang = request.cookies.get("NEXT_LOCALE")?.value;
  const acceptLang = request.headers.get("accept-language")?.toLowerCase();
  const browserLang = acceptLang?.includes("es") ? "es-es" : "en-us";

  const lang = cookieLang || browserLang;

  return NextResponse.redirect(
    new URL(`/${lang}${pathname ?? "home"}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

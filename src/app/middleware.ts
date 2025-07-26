import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const locales = ["en-us", "es-es"];
  const pathname = request.nextUrl.pathname;
  // Check if the URL already includes a locale prefix
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }
  const cookieLang = request.cookies.get("NEXT_LOCALE")?.value;
  const acceptLang = request.headers.get("accept-language")?.toLowerCase();
  const browserLang = acceptLang?.includes("es") ? "es-es" : "en-us";
  const lang = cookieLang || browserLang;

  console.log("///////////////// middleware ////////////////////////");

  return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
}

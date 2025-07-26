import { NextResponse } from "next/server";

// this is the function that get executed when reach the api endpoint
export async function POST(request: Request) {

    // We retrieve the request json
    const { lang } = await request.json();

    // We build a response saying okay we recieve it
    const response = NextResponse.json({ ok: true });
    
    // we set the new cookie
    response.cookies.set('NEXT_LOCALE', lang, { // the NEXT_LOCALE is the name of the cookie
      path: '/', // we make the cookie avaible in all pages
      maxAge: 60 * 60 * 24 * 365, // the time of the active cookie
    });

    return response;
}
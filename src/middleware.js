// middleware file hamesha src folder mein banaie jati hai . . . . .

import { NextResponse } from "next/server";
//const isLoggedIn = false;

export function middleware(request) {
    //  if(!isLoggedIn && request.nextUrl.pathname != '/home')
        return NextResponse.redirect(new URL('/home', request.url))
}

//For Specific route 
export const config = {
    mnatcher : ["/contact/:path"]
}
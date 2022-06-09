import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export default function middleware(req) {
    const { cookies } = req;
    const jwt = cookies.SacculumJWT;
    const clonedurl = req.nextUrl.clone();
    clonedurl.pathname = '/login'
    const url = req.url;

    if(url.includes('/login')){
        if(jwt){
            try{
                verify(jwt, process.env.JWT_SECRET);
                return NextResponse.redirect('/');
            }catch(e){
                return NextResponse.rewrite(new URL('/', req.url))
            }
        }
    }

    if(url.includes("advanced")){
        if (jwt === undefined) {
            return NextResponse.rewrite(clonedurl);
        }

        try{
            verify(jwt, process.env.JWT_SECRET);
            return NextResponse.next();
        }catch(e){
            return NextResponse.rewrite(clonedurl);
        }
    }

    return NextResponse.next();
}
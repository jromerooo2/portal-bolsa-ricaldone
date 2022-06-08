import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export default function middleware(req) {
    const { cookies } = req;
    const jwt = cookies.SacculumJWT;
    const clonedurl = req.nextUrl.clone();
    clonedurl.pathname = '/login'
    const url = req.url;


    // if (!jwt || jwt === undefined) {
    //     return NextResponse.rewrite(url);
    // }

    if (url.includes("advanced")){
        try {
            verify(jwt, process.env.JWT_SECRET);
            return NextResponse.next();
        }catch(err){
            return NextResponse.rewrite(clonedurl);
        }
    }

    return NextResponse.next();
}
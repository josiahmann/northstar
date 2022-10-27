export { default } from "next-auth/middleware"


export const config = { 
    matcher: [
        '/((?!login|register|static|favicon.ico).*)',
    ]
}
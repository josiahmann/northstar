export { default } from "next-auth/middleware"

export const config = { 
    matcher: [
        '/((?!api|login|register|static|favicon.ico).*)',
    ]
}
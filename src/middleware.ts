import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18nConfig";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

 
  request.cookies.delete('NEXT_LOCALE')
  request.cookies.set('NEXT_LOCALE','en')
  
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
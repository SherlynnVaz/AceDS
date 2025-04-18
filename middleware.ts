import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

// Ensure JWT_SECRET is properly typed
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Add the paths that need authentication
const protectedPaths = ['/dashboard', '/topics']

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if the path needs authentication
  if (protectedPaths.some(prefix => path.startsWith(prefix))) {
    const token = request.cookies.get('token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      // Verify the token
      await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
} 
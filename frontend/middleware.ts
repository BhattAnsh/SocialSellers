import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/auth/signin",
  },
})

export const config = {
  matcher: [
    // Only protect these routes
    "/analyze",
    "/analyze/:path*",
    "/contact",
    "/contact/:path*",
    // Add any other protected routes here
  ]
} 
import NextAuth from "next-auth"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
 
const { 
  AUTH_MICROSOFT_ENTRA_ID_ID, 
  AUTH_MICROSOFT_ENTRA_ID_SECRET, 
  AUTH_MICROSOFT_ENTRA_ID_ISSUER } = process.env;

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    MicrosoftEntraID({
      clientId: AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: `https://login.microsoftonline.com/${AUTH_MICROSOFT_ENTRA_ID_ISSUER}/v2.0`,
      // issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
      authorization: `https://login.microsoftonline.com/${AUTH_MICROSOFT_ENTRA_ID_ISSUER}/oauth2/v2.0/authorize`,
			token: `https://login.microsoftonline.com/${AUTH_MICROSOFT_ENTRA_ID_ISSUER}/oauth2/v2.0/token`,
    }),
  ],
})
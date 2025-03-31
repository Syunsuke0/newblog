// // app/api/spotify/token/route.ts
// import { NextResponse } from "next/server";

// export async function POST() {
//   const client_id = process.env.SPOTIFY_CLIENT_ID;
//   const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

//   const authHeader = Buffer.from(`${client_id}:${client_secret}`).toString(
//     "base64"
//   );

//   const response = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: `Basic ${authHeader}`,
//     },
//     body: "grant_type=client_credentials",
//   });

//   if (!response.ok) {
//     return NextResponse.json({ error: "Failed to get token" }, { status: 500 });
//   }

//   const data = await response.json();
//   return NextResponse.json(data);
// }

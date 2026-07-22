import { NextResponse } from "next/server";

const SECURITY_TEXT = `Contact: mailto:vivian@moedim.ai?subject=Security%20report
Contact: https://www.moedim.ai/security
Policy: https://www.moedim.ai/security
Canonical: https://www.moedim.ai/.well-known/security.txt
Preferred-Languages: en, sw
Expires: 2027-07-21T23:59:59Z
`;

export function GET() {
  return new NextResponse(SECURITY_TEXT, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

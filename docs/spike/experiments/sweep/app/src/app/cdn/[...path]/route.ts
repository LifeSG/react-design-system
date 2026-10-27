import { type NextRequest, NextResponse } from "next/server";

const CDN_BASE = "https://assets.life.gov.sg";

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path } = await params;
    const cdnUrl = `${CDN_BASE}/${path.join("/")}`;

    const res = await fetch(cdnUrl, { cache: "force-cache" });

    if (!res.ok) {
        return new NextResponse(null, { status: res.status });
    }

    const contentType =
        res.headers.get("content-type") ?? "application/octet-stream";

    return new NextResponse(res.body, {
        status: 200,
        headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=31536000, immutable",
        },
    });
}

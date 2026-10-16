import { authorizationCheck } from"@/lib/authorization";
import { collections, dbConnect } from"@/lib/dbConnect";
import { NextRequest, NextResponse } from"next/server";

export async function GET(req: NextRequest) {
  const referer = req.headers.get('referer') ||'';
  const refererPath = new URL(referer).pathname;
  
  // Pass referer path to authorization check
  const authResult = await authorizationCheck(refererPath);
  
  if (!authResult.success) {
    return NextResponse.json(
      { error: authResult.error },
      { status: authResult.status }
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const videoType = searchParams.get("videoType") || "general";
    const videosCollection = await dbConnect(collections.videos);

    // Handle backward compatibility - include documents without videoType for 'general'
    let query: any = {};
    if (videoType === 'general') {
      query.$or = [
        { videoType: 'general' },
        { videoType: { $exists: false } }
      ];
    } else if (videoType === 'review') {
      query.videoType = 'review';
    }

    const count = await videosCollection.countDocuments(query);
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Error counting videos:", error);
    return NextResponse.json({ error: "Failed to count videos", count: 0 }, { status: 500 });
  }
}

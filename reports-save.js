import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  try {
    const body = await req.json();
    const store = getStore("casewatch");
    await store.setJSON("reports", body);
    return Response.json({ ok: true });
  } catch (e) {
    return new Response("Error: " + e.message, { status: 500 });
  }
};

export const config = { path: "/api/reports/save" };

import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  try {
    const store = getStore("casewatch");
    const data = await store.get("reports", { type: "json" });
    return Response.json(data || []);
  } catch (e) {
    return Response.json([]);
  }
};

export const config = { path: "/api/reports" };

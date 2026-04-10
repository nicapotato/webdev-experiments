import { getGinHttpBase } from "@/env/gin";

export type VerifyJoinResult =
  | "ok"
  | "wrong_password"
  | "not_found"
  | "error";

/** HTTP check before navigate; must match WebSocket password rules. */
export async function verifyRoomJoinPassword(
  game: "snake" | "chess" | "checkers" | "fighter",
  roomId: string,
  password: string,
): Promise<VerifyJoinResult> {
  const params = new URLSearchParams();
  if (password.length > 0) {
    params.set("password", password);
  }
  const url = `${getGinHttpBase()}/api/${game}/room/${encodeURIComponent(roomId)}/join-check?${params.toString()}`;
  try {
    const res = await fetch(url, { method: "GET" });
    if (res.status === 200) return "ok";
    if (res.status === 403) return "wrong_password";
    if (res.status === 404) return "not_found";
    return "error";
  } catch {
    return "error";
  }
}

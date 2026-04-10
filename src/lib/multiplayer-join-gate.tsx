import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const storageKey = (roomId: string, gameSlug: string) =>
  `mp_join:${roomId}:${gameSlug}`;

export function allowMultiplayerJoin(roomId: string, gameSlug: string): void {
  sessionStorage.setItem(storageKey(roomId, gameSlug), "1");
}

export function hasMultiplayerJoin(roomId: string, gameSlug: string): boolean {
  return sessionStorage.getItem(storageKey(roomId, gameSlug)) === "1";
}

/** Redirect to lobby if this session did not enter via create/join there. Re-call allowMultiplayerJoin after WebSocket connects so refresh stays valid. */
export function useMultiplayerRoomGate(gameSlug: string): string {
  const params = useParams();
  const navigate = useNavigate();
  const roomId = params.roomId as string;

  useEffect(() => {
    if (!roomId) return;
    if (!hasMultiplayerJoin(roomId, gameSlug)) {
      toast.info("Join multiplayer games from the lobby.");
      navigate("/multiplayer", { replace: true });
    }
  }, [roomId, gameSlug, navigate]);

  return roomId;
}

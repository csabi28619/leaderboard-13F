import { create } from "zustand";
import { players, type PlayerData } from "./players";

type playerStoreType = {
    players: PlayerData[],
    sortByName: () => void,
}

const playerStore = create<playerStoreType>((set) => ({
    players: players,
    sortByName: () => set((state) => ({
        players: [...state.players].sort((a, b) => a.name.localeCompare(b.name))
    }))
}));

export default playerStore;
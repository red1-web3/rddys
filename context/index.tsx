import { atom, useAtom } from "jotai";

const headerActiveListModal = atom<number | null>(null);
export const useHeaderActiveListModal = () => useAtom(headerActiveListModal);

const activeForm = atom<"signUp" | "logIn">("logIn");
export const useActiveForm = () => useAtom(activeForm);

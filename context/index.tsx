import { atom, useAtom } from "jotai";

const headerActiveListModal = atom<number | null>(null);
export const useHeaderActiveListModal = () => useAtom(headerActiveListModal);

const activeForm = atom<"signUp" | "logIn">("logIn");
export const useActiveForm = () => useAtom(activeForm);

const heroController = atom<any>(null);
export const useHeroController = () => useAtom(heroController);

const activeProductSlide = atom<number>(0);
export const useActiveProductSlide = () => useAtom(activeProductSlide);

const activeBrandTab = atom<number>(0);
export const useActiveBrandTab = () => useAtom(activeBrandTab);

const activeMenu = atom<boolean>(false);
export const useActiveMenu = () => useAtom(activeMenu);

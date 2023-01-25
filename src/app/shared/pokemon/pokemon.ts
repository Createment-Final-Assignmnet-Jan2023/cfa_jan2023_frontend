import { Types } from "../types/types";

export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    baseHealthPoints: number;
    baseNormalAttack: number;
    baseNormalDefense: number;
    baseSpecialAttack: number;
    baseSpecialDefense: number;
    baseSpeed: number;
    imageArt: string;
    imageFront: string;
    imageBack: string;

}
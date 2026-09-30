export interface TrustedLogo {
    id: number;
    name: string;
    iconSrc: string;
}

export interface TrustedByData {
    logos: TrustedLogo[];
}

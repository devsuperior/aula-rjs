export type CharStatus = "Alive" | "Dead" | "Unknown";

export type CharOrigin = {
    name: string;
    url?: string;
}

export type Character = {
    id: number;
    name: string;
    status: CharStatus;
    origin: CharOrigin;
    image: string;
}

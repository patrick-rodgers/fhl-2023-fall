export interface IGettable<T = {}> {
    (init?: RequestInit): Promise<T>;
    get(init?: RequestInit): Promise<T>;
}

export interface IUser extends IDrive {
    name: string;
}

export interface IDrive {
    id: string;
}

export interface IGraph {
    me: {
        drives: "drive",
    } & IGettable<IUser>;
    drives: {} & IGettable<IDrive>;
}


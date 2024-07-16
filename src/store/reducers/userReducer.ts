interface IUser {
    id: number;
    name: string;
    gender: string;
    date: string;
    address: string;
}

export const userReducer = (state: IUser[] = [
    {
        id: 1,
        name: "Nguyen Van A",
        gender: "Nam",
        date: "xx/xx/xxxx",
        address: "abc",
    },
    {
        id: 2,
        name: "Tran Thi B",
        gender: "Nu",
        date: "xx/xx/xxxx",
        address: "xyz",
    },
    {
        id: 3,
        name: "Le Van C",
        gender: "Nam",
        date: "xx/xx/xxxx",
        address: "dcf",
    },
], action: { type: string; payload: IUser }) => {
    switch (action.type) {
        default:
            return state;
    }
}

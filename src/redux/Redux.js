import { createStore } from "redux";

const defaultSate = {
    users: [
        {
            name: "Bob Brown",
            email: "bBrown@gmail.com",
            password: "bobbyBrownie",
            adress: "",
        },
        {
            name: "Magie Star",
            email: "magie_3000@mail.ru",
            password: "magie_3000",
            adress: "",
        },
        {
            name: "Roy Barrel",
            email: "RBRB@gamil.com",
            password: "qwerty",
            adress: "",
        },
    ],
    admins: [
        {
            email: "bBrown@gmail.com",
            password: "bobbyBrownieee",
        },
        {
            email: "magie_3000@mail.ru",
            password: "magie",
        },
        {
            email: "RBRB@gamil.com",
            password: "qwertyyy",
        },
    ],
}

const reducer = (state = defaultSate, action) => {
    switch (action.type) {
        case "ADD_USER":
            return { ...state, users: [...state.users, action.payload] };
        case "ADD_ADMIN":
            return { ...state, admins: [...state.admins, action.payload] };
        case "CHANGE_USER":
            return {
                ...state,
                users: state.users.map(
                    (user) => user.email == action.email ? { ...user, name: action.name, adress: action.adress }
                        : user
                )
            };
        default:
            return state;

    }
}

const store = createStore(reducer);

export default store;
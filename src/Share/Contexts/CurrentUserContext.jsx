import { createContext } from "react";

const CurrentUserContext = createContext({
    role : null,
    userName : null,
    id: null,
});

export default CurrentUserContext;
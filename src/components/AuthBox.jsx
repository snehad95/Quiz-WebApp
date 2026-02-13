import { useState } from "react";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

export default function AuthBox() {
    cont[mode, setMode] = useState("Login");

    return (
        <>
            {mode === "login" ? <Login /> : <CreateAccount />}

            <button onClick={() => setMode(mode === "login" ? "register" : "login")}>
                Switch
            </button>
        </>
    );
}
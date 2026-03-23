import { createContext, useState, useEffect } from "react";

export const ContextoTema = createContext();

export function TemaProvedor({ children }) {
    const [tema, setTema] = useState("light");

    function mudarTema() {
        setTema(prev => prev === "light" ? "dark" : "light");
    }

    /* Atualiza classe do body conforme tema */
    useEffect(() => {
        document.body.className = tema;
    }, [tema]);

    return (
        <ContextoTema.Provider value={{ tema, mudarTema }}>
            {children}
        </ContextoTema.Provider>
    );
}
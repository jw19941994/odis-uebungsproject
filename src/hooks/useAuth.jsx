// *Einbindung von Keycloak, noch nicht final*


// import { useState, useEffect, useRef } from "react";
// import Keycloak from "keycloak-js";

// const useAuth = () => {
// const isMounted = useRef(false);
// const [keycloak, setKeycloak] = useState(null);
// const [isLogin, setIsLogin] = useState(true); // Startwert auf false setzen
// const [token, setToken] = useState(null);

// useEffect(() => {
// if (isMounted.current) return;

// const initializeKeycloak = async () => {
//     try {
//     const keycloakInstance = new Keycloak({
//         url: import.meta.env.VITE_KEYCLOAK_URL,
//         realm: import.meta.env.VITE_KEYCLOAK_REALM,
//         clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
//     });

//     await keycloakInstance.init({
//         onLoad: "login-required",
//     });

//     console.log("Keycloak initialized", keycloakInstance); // Konsolenlog hinzufügen
//     setKeycloak(keycloakInstance);
//     setIsLogin(keycloakInstance.authenticated);
//     setToken(keycloakInstance.token);
//     console.log("Authenticated:", keycloakInstance.authenticated); // Konsolenlog hinzufügen
//     } catch (error) {
//     console.error("Keycloak initialization error:", error);
//     }
// };

// initializeKeycloak();
// isMounted.current = true;
// }, []);

// return { keycloak, isLogin, token };
// };

// export default useAuth;

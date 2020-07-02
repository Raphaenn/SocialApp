import React from "react";
import { useSelector } from "react-redux";

import CreateRoutes from "./routes";

export default function App() {

    const signed = useSelector(state => state.auth.signed)
    const Routes = CreateRoutes(signed);

    return (
        <Routes />
    )
};

import { AuthProvider } from "./useAuth";
import React from "react";

const AppProvider = ({children}) => <AuthProvider>{children}</AuthProvider>

export default AppProvider;
import React, { useContext, useMemo } from "react"
import useFirestore from "../hooks/useFirestore"
import { AuthContext } from "./AuthProvider"

export const AppContext = React.createContext()

function AppProvider({ children }) {

    const { user: { uid } } = useContext(AuthContext)

    const roomCondition = useMemo(() => {
        return {
            fieldName: 'member',
            operator: 'array-contains',
            compareValue: uid,
        }
    }, [uid])

    const rooms = useFirestore('room', roomCondition)
    return (
        <AppContext.Provider value={{ rooms }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;
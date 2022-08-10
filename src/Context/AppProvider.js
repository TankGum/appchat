import React, { useContext, useMemo, useState } from "react"
import useFirestore from "../hooks/useFirestore"
import { AuthContext } from "./AuthProvider"

export const AppContext = React.createContext()

function AppProvider({ children }) {
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false)
    const [selectedRoomId, setSelectedRoomId] = useState('')


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
        <AppContext.Provider 
        value={{ 
            rooms,
            isAddRoomVisible,
            setIsAddRoomVisible,
            selectedRoomId,
            setSelectedRoomId,
          }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { Spin } from 'antd'

export const AuthContext = React.createContext()

function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            console.log({ user })
            if (user) {
                const { displayName, email, uid, photoURL } = user
                setUser({
                    displayName, email, uid, photoURL
                })
                setIsLoading(false)
                navigate('/')
                return
            }

            setIsLoading(false)
            navigate('/login')
        })

        // clean function 
        return () => {
            unsubscribed()
        }
    }, [navigate])
    
    return (
            <AuthContext.Provider value={{ user }}>
                {isLoading ? <Spin /> : children}
            </AuthContext.Provider>
    );
}

export default AuthProvider;
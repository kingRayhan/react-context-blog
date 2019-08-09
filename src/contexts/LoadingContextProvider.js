import React, { createContext } from 'react'

export const LoadingContext = createContext()

const LoadingContextProvider = ({ children }) => {
    return <LoadingContext.Provider>{children}</LoadingContext.Provider>
}

export default LoadingContextProvider

import { createContext, useState } from 'react'
export const CountContext = createContext()

// eslint-disable-next-line react/prop-types
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  )
}

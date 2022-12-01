import React,{useContext, useState} from "react"

const AppContext =  React.createContext()

export const AppProvider = ({children}) => {
	const hello = "hello world"
	return (
		<AppContext.Provider
		value = {{
			hello
		}}
		>
		{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}
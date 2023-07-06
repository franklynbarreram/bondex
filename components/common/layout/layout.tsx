import React from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'

interface Props{
	children:React.ReactNode
}
export const Layout:React.FC<Props> = ({children}) => {
	return (
		<>
			<Navbar></Navbar>
			{children}
			<Footer></Footer>
		</>
	)
}

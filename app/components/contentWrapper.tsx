"use client"

import { ReactNode, useState } from "react"

interface ContentWrapperProps{
  children:ReactNode
}

const ContentWrapper:React.FC<ContentWrapperProps> = ({children})=>{
  const [menuOpen, setMenuOpen] = useState<boolean>()
  return(<>
    <div className={`bg-green-300 transition-[transform] duration-500 ease-in-out ${menuOpen ? "scale-75":"scale-100"}`}>
      {children}
    </div>
    <button onClick={()=>setMenuOpen(!menuOpen)} className="bg-white border-2 px-3 py-2 fixed top-0 right-0">メニュー</button>
  </>)
}

export default ContentWrapper
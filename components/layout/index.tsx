import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full flex justify-center bg-gradient-to-br from-orange-400 to-pink-400 font-mono h-full">
      {children}
    </div>
  )
}

export default Layout;
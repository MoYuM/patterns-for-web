import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="prose md:prose-lg lg:prose-xl">
        {children}
      </div>
    </div>
  )
}

export default Layout;
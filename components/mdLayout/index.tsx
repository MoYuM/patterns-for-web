import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const MdLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MDXProvider components={{
      h1: (props) => <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500" {...props} />
    }}>
      <div className="w-full flex justify-center bg-gradient-to-br from-orange-400 to-pink-400 h-full">
        <div className="bg-slate-50 drop-shadow-2xl prose md:prose-lg lg:prose-xl p-20 my-20 rounded-xl">
          {children}
        </div>
      </div>
    </MDXProvider>
  )
}

export default MdLayout;
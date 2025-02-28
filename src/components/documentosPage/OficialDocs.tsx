import React from 'react'
import MainTitles from '../titles/MainTitles';

function OficialDocs() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white absolute left-0 ">
      <div className="text-center max-w-2xl my-10">
        <MainTitles topText="Documents" bottomText="observability stack" />

        <div className="mt-8 text-left text-gray-400">
          <h2 className="text-xl font-bold text-white">📌 Official Documentation</h2>
          <ul className="list-inside mt-2">
            <li>
              <a href="https://nextjs.org/docs" className="text-[#315A75] underline">
                Next.js Documentation
              </a>
            </li>
            <li>
              <a href="https://react.dev" className="text-[#315A75] underline">
                React.js Documentation
              </a>
            </li>
            <li>
              <a href="https://reactnative.dev" className="text-[#315A75] underline">
                React Native Documentation
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/docs" className="text-[#315A75] underline">
                Node.js Documentation
              </a>
            </li>
            <li>
              <a href="https://expressjs.com/" className="text-[#315A75] underline">
                Express.js Documentation
              </a>
            </li>
            <li>
              <a href="https://www.mongodb.com/docs/" className="text-[#315A75] underline">
                MongoDB Documentation
              </a>
            </li>
            <li>
              <a href="https://dev.java/" className="text-[#315A75] underline">
                Java Documentation
              </a>
            </li>
            <li>
              <a href="https://docs.spring.io/spring-framework/reference/" className="text-[#315A75] underline">
                Spring Framework Documentation
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-6">📌 Best Practices</h2>
          <ul className="list-inside mt-2">
            <li>Write clean and modular code using reusable components and services</li>
            <li>Use TypeScript for better code safety and maintainability</li>
            <li>Manage state efficiently with <code>useState</code> and <code>useEffect</code></li>
            <li>Optimize performance using <code>memo</code>, <code>useCallback</code>, and <code>useMemo</code></li>
            <li>Handle errors properly with <code>try/catch</code> in asynchronous functions</li>
            <li>Secure APIs and databases using <code>dotenv</code> and authentication mechanisms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OficialDocs;

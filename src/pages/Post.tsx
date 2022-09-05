import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

export function Post() {
  const isAuth = true
  const { slug } = useParams<{ slug: string }>()

  return(
    <>
      <Header />
      <article className="w-[728px] pb-10 mx-auto mt-[83px]">
        <h4 className="font-black text-white text-[3.375rem] leading-[60px] ">Past, Present, and Future of React State Management</h4>
        <p className="text-gray-300 text-base py-6">12 de março de 2021</p>
        {
          !isAuth 
          ?
            <div className="text-lg leading-8 max-h-[252px] overflow-hidden text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-800">
              <p>React was introduced in May 2013. Its paradigm shift was that your UI was a function of your state. Given some component state, React can determine what your component will look like. React is built upon the idea of state. However, state has long been one of the most difficult parts of building a React application.</p>
              <br />
              <p>Let's imagine state management in React as a rugged tool belt. You've used this tool belt for years, slowly adding new tools as needed. Each tool serves a very specific purpose. You don't use your hammer to screw in bolts. As a craftsman, you've learned the right time...</p>
              <br />
              <p>State management with React is a rugged tool belt, but not everyone has the prior experience to know which tool to reach for. This post will explain the past, present, and future of state management to help you make the correct decision for your team, project, or organization.</p>
            </div>
          :
            <div className="text-lg leading-8 text-gray-200">
              <p>React was introduced in May 2013. Its paradigm shift was that your UI was a function of your state. Given some component state, React can determine what your component will look like. React is built upon the idea of state. However, state has long been one of the most difficult parts of building a React application.</p>
              <br />
              <p>Let's imagine state management in React as a rugged tool belt. You've used this tool belt for years, slowly adding new tools as needed. Each tool serves a very specific purpose. You don't use your hammer to screw in bolts. As a craftsman, you've learned the right time...</p>
              <br />
              <p>State management with React is a rugged tool belt, but not everyone has the prior experience to know which tool to reach for. This post will explain the past, present, and future of state management to help you make the correct decision for your team, project, or organization.</p>
            </div>

        }
        {
          !isAuth && 
          <a href="#">
            <p className="font-bold text-xl text-white bg-gray-600 mt-12 py-6 rounded-full text-center hover:opacity-90">
              Wanna continue reading?
              <span className="ml-2 mr-3 text-yellow-800">
                Subscribe now
              </span> 🤗 
            </p>
          </a>
        }
      </article>
    </>
  )
}
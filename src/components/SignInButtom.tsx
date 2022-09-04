import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';


export function SignInButtom() {
  const isAuth = true

  return isAuth ?
  (
    <a href="#" className="flex w-56 px-6 py-3 bg-gray-600 rounded-full text-gray-100 font-bold justify-between items-center hover:opacity-90 transition-colors">
      <FaGithub className="w-[24px] h-[24px]" color="#04d361" />
      <span className="max-w-[108px] max-h-[24px] text-ellipsis overflow-hidden whitespace-nowrap">Luis Krautiuk</span>
      <FiX color="#737380" />
    </a>
  )
  :
  (
    <a href="#" className="flex w-56 px-6 py-3 bg-gray-600 rounded-full text-gray-100 font-bold justify-between items-center hover:opacity-90 transition-colors">
      <FaGithub className="w-[24px] h-[24px]" color="#eba417" />
      <span>Sign in with Github</span>
    </a>
  )
}
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from "react-router-dom";

type PostProps = {
  slug: string
  createAt: Date
  title: string
  preview: string
}

export function PostItem(props: PostProps) {

  const createAtDateFormatted = format(props.createAt, "dd' de 'LLLL' de 'yyyy'", {
    locale: ptBR
  })
  
  return(
    <div className="border-b border-b-[#323238] pb-10 mb-9">
      <Link to={`/post/${props.slug}`}>
      <span className="text-gray-300 text-base">{createAtDateFormatted}</span>
        <h2 className="text-2xl font-bold text-white mt-5">
          {props.title}
        </h2>
        <p className="text-gray-300 text-base max-h-[48px] line-clamp-2 mt-2 leading-[26px] ">
          {props.preview}
        </p>
      </Link>
    </div>
  )
}
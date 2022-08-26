import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation  />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하십니까
          <br className="hidden lg:inline-block" />프론트엔드 개발자 전영주입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          새로운 트렌드와 언어에 관심을 가지고 배움에 대한 두려움과 실패에 대한 두려움이 없어 도전하는 것을 좋아합니다. 본인의 발전은 곧 팀의 발전이라는 모토로 항상 발전을 하기 위해 노력합니다. 
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">
              프로젝트 보러가기
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
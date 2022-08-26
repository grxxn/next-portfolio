import Header from "./header"
import Footer from "./footer"

// 모든 레이아웃을 집어넣는 컨테이너 개념
export default function Layout({ children }){
  return(
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer/>
    </div>
  )
}
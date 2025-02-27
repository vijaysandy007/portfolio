import "./Header.scss";
const Header = () => {
  return (
    <>
    <div className="header">
      <div className="left">
        <a href="/">Vijay DevStack</a>
      </div>
      <div className="right">
        <a href="https://github.com/vijaysandy007" target="_blank">
          <i className="fa-brands fa-github"></i>
          <span>Github</span>
        </a>
        <a href="https://linkedin.com/in/vijay-p-codelover-4ab649205" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
          <span>Linkedin</span>
        </a>
        <a href="mailto:vijaysathya454@gmail.com?subject=Job Opportunity Inquiry&body=Hello,%0A%0AI came across your portfolio and I'm interested in discussing potential job opportunities.%0A%0ARegards,%0A[Vijay]" >
          <i className="fa-solid fa-envelope"></i>
          <span>Email</span>
        </a>
      </div>
      </div>
    </>

  )
}

export default Header

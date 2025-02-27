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
        <a href="" >
          <i className="fa-solid fa-envelope"></i>
          <span>Email</span>
        </a>
      </div>
      </div>
    </>

  )
}

export default Header

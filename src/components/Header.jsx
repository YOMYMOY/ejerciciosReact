import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className="homeIcon" to={'/'}><i className="fa-solid fa-circle-nodes" aria-hidden="true"></i></Link>
      <h1 className="title">Ejercicios Resueltos</h1>
    </header>
  )
}

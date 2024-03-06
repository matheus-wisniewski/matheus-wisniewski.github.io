import { NavLink } from 'react-router-dom';
import './pages-css/Hero.css'

function Hero() {
  return (
    <>
    <header>
      <h1>Matheus</h1>
      <nav className="hero-nav">
        <NavLink to="/projetos"> Projetos </NavLink>
        <NavLink to="/sobre"> Sobre </NavLink>
        <NavLink to="/contato"> Contato </NavLink>
        <NavLink to='/'> Home </NavLink>
    </nav>
    </header>

    <main className="hero-main">
      <section className="hero-section">
        <h2>Olá, eu sou o Matheus</h2>
        <p>Desenvolvedor Front-End</p>
      </section>
    </main>

    <footer className="hero-footer">
      <p>Desenvolvido por Matheus</p>
    </footer>
    </>
  );
}

export default Hero;
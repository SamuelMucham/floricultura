import { Catalogo, Datas, Encomenda } from "../components/Loja";
import { LOJA, zap } from "../lib/data";

const GALERIA = [["🌹", "#f4c9d6"], ["🧺", "#f7e3b0"], ["🦜", "#cfe6d3"], ["🌻", "#f8e08e"], ["💐", "#e2d3ee"], ["🌷", "#f6cfc9"], ["🪻", "#d9d0f0"], ["🥐", "#f1dcc0"]];

export default function Home() {
  return (
    <>
      <header className="top">
        <a href="#" className="logo">Art Flores</a>
        <nav aria-label="Principal">
          <a href="#catalogo">Buquês</a><a href="#catalogo">Arranjos</a><a href="#catalogo">Flores</a>
          <a href="#catalogo">Presentes</a><a href="#datas">Datas especiais</a><a href="#galeria">Galeria</a>
          <a href="#encomendar">Encomendar</a><a href="#entrega">Entrega</a>
        </nav>
      </header>

      <main>
        <section className="hero wrap">
          <h1>Flores, cestas de café da manhã e passarinhos, entregues na hora certa.</h1>
          <p className="lead">Escolha no catálogo, monte seu pedido e finalize pelo WhatsApp. Entregamos em Curitiba e região.</p>
          <div className="actions">
            <a className="btn" href="#catalogo">Ver catálogo</a>
            <a className="btn zap" href={zap("Olá, Art Flores! Gostaria de fazer um pedido.")} target="_blank" rel="noreferrer">Pedir pelo WhatsApp</a>
          </div>
        </section>

        <Catalogo />
        <Datas />

        <section id="galeria" className="wrap">
          <h2>Galeria</h2>
          <div className="gal">
            {GALERIA.map(([e, c], i) => (<div key={i} style={{ background: c }} aria-hidden>{e}</div>))}
          </div>
          </section>


        <Encomenda />

        <section id="entrega" className="wrap">
          <h2>Entrega e localização</h2>
          <div className="dois">
            <div>
              <p><strong>Endereço</strong><br />{LOJA.endereco}</p>
              <p><strong>Horário</strong><br />{LOJA.horario}</p>
              <a className="btn" href={LOJA.mapa} target="_blank" rel="noreferrer">Abrir no mapa</a>
            </div>
            <div>
              <p><strong>Taxa de entrega</strong></p>
              {LOJA.taxas.map(([a, b]) => (<div key={a} className="row"><span>{a}</span><span>{b}</span></div>))}
              <p className="nota">Também há retirada na loja, sem custo.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap foot">© {new Date().getFullYear()} Art Flores · Floricultura, aviário e cestas</footer>
      <a className="fab" href={zap("Olá, Art Flores!")} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">💬</a>
    </>
  );
}

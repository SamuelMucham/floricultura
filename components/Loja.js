"use client";
import { useState } from "react";
import { CATS, PRODUTOS, DATAS, brl, zap } from "../lib/data";

export function Catalogo() {
  const [cat, setCat] = useState(CATS[0]);
  const [cart, setCart] = useState({});
  const [aberto, setAberto] = useState(false);
  const itens = PRODUTOS.filter((p) => cart[p.id]);
  const total = itens.reduce((s, p) => s + p.preco * cart[p.id], 0);
  const qtd = itens.reduce((s, p) => s + cart[p.id], 0);
  const mudar = (id, d) => setCart((c) => { const n = { ...c, [id]: Math.max(0, (c[id] || 0) + d) }; if (!n[id]) delete n[id]; return n; });
  const msg = `Olá, Art Flores! Quero fazer um pedido:\n${itens.map((p) => `• ${cart[p.id]}x ${p.nome} (${brl(p.preco)})`).join("\n")}\nTotal: ${brl(total)}\nEntrega ou retirada?`;

  return (
    <section id="catalogo" className="wrap">
      <h2>Catálogo</h2>
      <div className="tabs" role="tablist">
        {CATS.map((c) => (
          <button key={c} role="tab" aria-selected={c === cat} className={c === cat ? "on" : ""} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid">
        {PRODUTOS.filter((p) => p.cat === cat).map((p) => (
          <article key={p.id} className="card">
            <div className="foto" aria-hidden>{p.img ? <img src={p.img} alt="" /> : p.emoji}</div>
            <h3>{p.nome}</h3>
            <p>{p.desc}</p>
            <div className="row">
              <strong>{brl(p.preco)}</strong>
              {cart[p.id] ? (
                <span className="qtd">
                  <button aria-label={`Remover ${p.nome}`} onClick={() => mudar(p.id, -1)}>−</button>
                  {cart[p.id]}
                  <button aria-label={`Adicionar ${p.nome}`} onClick={() => mudar(p.id, 1)}>+</button>
                </span>
              ) : (
                <button className="btn" onClick={() => mudar(p.id, 1)}>Adicionar</button>
              )}
            </div>
          </article>
        ))}
      </div>

      {qtd > 0 && (
        <div className="cart">
          <button className="btn" onClick={() => setAberto(!aberto)} aria-expanded={aberto}>Meu pedido ({qtd}) · {brl(total)}</button>
          {aberto && (
            <div className="cartbox">
              {itens.map((p) => (
                <div key={p.id} className="row"><span>{cart[p.id]}x {p.nome}</span><span>{brl(p.preco * cart[p.id])}</span></div>
              ))}
              <a className="btn zap" href={zap(msg)} target="_blank" rel="noreferrer">Enviar pedido no WhatsApp</a>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export function Datas() {
  
  return (
    <section id="datas" className="wrap">
      <h2>Datas especiais</h2>
      <p className="lead">Escolha a ocasião e peça com antecedência. Nas datas de maior movimento, as encomendas fecham antes.</p>
      <div className="chips">
        {DATAS.map((d) => (
          <a key={d} className="chip" href={zap(`Olá, Art Flores! Quero ver opções para: ${d}.`)} target="_blank" rel="noreferrer">{d}</a>
        ))}
      </div>
    </section>
  );
}

export function Encomenda() {
  const [f, setF] = useState({ nome: "", item: "", data: "", tipo: "Entrega", end: "", cartao: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const msg = `Olá, Art Flores! Quero encomendar:\nNome: ${f.nome}\nO que: ${f.item}\nData: ${f.data}\n${f.tipo}${f.tipo === "Entrega" ? `: ${f.end}` : ""}\nMensagem do cartão: ${f.cartao || "—"}`;
  const ok = f.nome && f.item && f.data && (f.tipo === "Retirada" || f.end);
  return (
    <section id="encomendar" className="wrap">
      <h2>Encomendar</h2>
      <div className="form">
        <label>Seu nome<input value={f.nome} onChange={set("nome")} /></label>
        <label>O que você quer<input value={f.item} onChange={set("item")} placeholder="Ex.: cesta de café da manhã com rosas" /></label>
        <label>Data desejada<input type="date" value={f.data} onChange={set("data")} /></label>
        <label>Como receber
          <select value={f.tipo} onChange={set("tipo")}><option>Entrega</option><option>Retirada</option></select>
        </label>
        {f.tipo === "Entrega" && <label>Endereço de entrega<input value={f.end} onChange={set("end")} /></label>}
        <label>Mensagem do cartão (opcional)<textarea rows={3} value={f.cartao} onChange={set("cartao")} /></label>
        <a className={`btn zap ${ok ? "" : "off"}`} aria-disabled={!ok} href={ok ? zap(msg) : undefined} target="_blank" rel="noreferrer">Enviar encomenda no WhatsApp</a>
      </div>
    </section>
  );
}

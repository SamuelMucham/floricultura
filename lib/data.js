// EDITE AQUI: telefone (com 55 + DDD), endereço, horários e produtos.
export const WHATS = "5541999999999";
export const LOJA = {
  nome: "Art Flores",
  endereco: "Rua Exemplo, 123 – Curitiba/PR",
  horario: "Seg a Sáb, 8h às 18h · Dom, 8h às 12h",
  mapa: "https://www.google.com/maps/search/?api=1&query=Art+Flores+Curitiba",
  taxas: [["Até 3 km", "R$ 10"], ["3 a 7 km", "R$ 18"], ["Acima de 7 km", "Consulte"]],
};
export const CATS = ["Buquês", "Arranjos", "Flores", "Presentes", "Aviário"];
// Troque o emoji por foto: coloque em /public e use img: "/buque-rosas.jpg"
export const PRODUTOS = [
  { id: 1, cat: "Buquês", nome: "Buquê de rosas vermelhas", desc: "12 rosas com folhagem e papel kraft.", preco: 129, emoji: "🌹" },
  { id: 2, cat: "Buquês", nome: "Buquê campestre", desc: "Flores do campo em tons de rosa e lilás.", preco: 89, emoji: "💐" },
  { id: 3, cat: "Buquês", nome: "Buquê de girassóis", desc: "6 girassóis com mosquitinho.", preco: 99, emoji: "🌻" },
  { id: 4, cat: "Arranjos", nome: "Arranjo de mesa", desc: "Flores mistas em vaso de cerâmica.", preco: 139, emoji: "🌷" },
  { id: 5, cat: "Arranjos", nome: "Arranjo de orquídeas", desc: "Orquídea phalaenopsis com cachepô.", preco: 189, emoji: "🪻" },
  { id: 6, cat: "Arranjos", nome: "Arranjo de condolências", desc: "Coroa ou arranjo em tons de branco.", preco: 220, emoji: "🤍" },
  { id: 7, cat: "Flores", nome: "Rosas (dúzia)", desc: "Escolha a cor: vermelha, rosa, branca.", preco: 79, emoji: "🌹" },
  { id: 8, cat: "Flores", nome: "Lírios (haste)", desc: "Haste com 3 a 5 flores.", preco: 32, emoji: "🌸" },
  { id: 9, cat: "Flores", nome: "Vaso de violetas", desc: "Vaso nº 12, floração o ano todo.", preco: 24, emoji: "🪴" },
  { id: 10, cat: "Presentes", nome: "Cesta de café da manhã", desc: "Pães, frios, frutas, bolo, suco e flores.", preco: 169, emoji: "🧺" },
  { id: 11, cat: "Presentes", nome: "Cesta romântica", desc: "Café da manhã para dois, com rosas e chocolate.", preco: 219, emoji: "🥐" },
  { id: 12, cat: "Presentes", nome: "Buquê + chocolates", desc: "Buquê médio com caixa de bombons.", preco: 149, emoji: "🍫" },
  { id: 13, cat: "Aviário", nome: "Calopsita", desc: "Filhote manso, com registro.", preco: 250, emoji: "🦜" },
  { id: 14, cat: "Aviário", nome: "Gaiola completa", desc: "Gaiola com comedouro, bebedouro e poleiros.", preco: 180, emoji: "🪺" },
  { id: 15, cat: "Aviário", nome: "Ração e sementes (1 kg)", desc: "Mistura para calopsitas e periquitos.", preco: 28, emoji: "🌾" },
];
export const DATAS = ["Dia das Mães", "Dia dos Namorados", "Dia da Mulher", "Aniversário", "Casamento", "Formatura", "Nascimento", "Dia dos Professores"];
export const brl = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
export const zap = (txt) => `https://wa.me/${WHATS}?text=${encodeURIComponent(txt)}`;

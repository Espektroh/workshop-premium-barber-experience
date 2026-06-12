export const eventConfig = {
  // O horário em dateIso serve apenas para o contador regressivo.
  // O horário de início do evento ainda não foi confirmado e não pode
  // ser exibido na página até a organização confirmar.
  dateIso: "2026-11-08T09:00:00-03:00",
  dateLabel: "Domingo, 08 de novembro de 2026",
  dateShort: "08 NOV 2026",
  dayShort: "DOM",
  endLabel: "Encerramento até as 18h",
  venue: "Cervejaria Imperatriz",
  city: "Sorocaba, SP",
  address: "Av. José Marcelino Barbosa, 173 - Vila Haro",
  capacity: 75,
  occupiedSeats: 0,
  price: 300,
  ctaUrl: "",
  instagramUrl: "https://www.instagram.com/fidelis_educador/",
  venueUrl: "https://cervejariasorocaba.com.br/para-empresas/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cervejaria+Imperatriz%2C+Av.+Jos%C3%A9+Marcelino+Barbosa%2C+173+-+Vila+Haro%2C+Sorocaba+-+SP",
} as const;

export const speaker = {
  name: "Fidelis",
  role: "Barbeiro Educador",
  handle: "@fidelis_educador",
  // Credenciais conforme o perfil público dele. Ajustar somente com
  // confirmação do Fidelis ou da organização.
  credentials: [
    {
      title: "MENSPIRE · Reino Unido",
      detail: "Formação internacional na academia britânica de corte masculino",
    },
    {
      title: "Josh O'Meara-Patel",
      detail: "Formação com o criador da Fórmula D.F.S",
    },
    {
      title: "Pivot Point · Brasil e Argentina",
      detail: "Base técnica na escola internacional de formação de barbeiros",
    },
    {
      title: "Barber Pro Nordeste",
      detail: "Educador presente no evento do setor em Recife",
    },
  ],
  // Campos pendentes de confirmação com a organização — quando preenchidos,
  // entram automaticamente na seção de autoridade.
  pendingStats: {
    yearsOfExperience: null as number | null,
    studentsTrained: null as number | null,
  },
} as const;

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);

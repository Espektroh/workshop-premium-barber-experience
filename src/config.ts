export const eventConfig = {
  dateIso: "2026-11-08T09:00:00-03:00",
  dateLabel: "Domingo, 08 de novembro de 2026",
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
} as const;

export const speaker = {
  name: "Fidelis",
  role: "Barbeiro Educador",
  handle: "@fidelis_educador",
  // Credenciais verificadas no perfil público dele. Ajustar somente com
  // confirmação do Fidelis ou da organização.
  credentials: [
    {
      title: "MENSPIRE · Reino Unido",
      detail: "Formação na academia que define o padrão mundial do corte masculino",
    },
    {
      title: "Josh O'Meara-Patel",
      detail: "Formação direta com o criador da Fórmula D.F.S",
    },
    {
      title: "Pivot Point · Brasil e Argentina",
      detail: "Base técnica na escola presente em mais de 70 países",
    },
    {
      title: "Barber Pro Nordeste",
      detail: "Presença em um dos maiores eventos do setor no país",
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

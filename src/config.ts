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
  instagramUrl: "https://www.instagram.com/kauahausman/",
  venueUrl: "https://cervejariasorocaba.com.br/para-empresas/",
} as const;

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);

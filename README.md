# Workshop Premium Barber Experience

Landing page do workshop presencial com Kauã Hausman, marcado para domingo, 08 de novembro de 2026, na Cervejaria Imperatriz em Sorocaba.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Verificação

```bash
npm test
npm run build
```

## Configuração do evento

Todas as informações operacionais ficam em `src/config.ts`:

- `dateIso`: data e horário usados pelo contador.
- `dateLabel`: data apresentada por extenso.
- `capacity`: capacidade máxima.
- `occupiedSeats`: inscrições reais usadas pela barra de ocupação.
- `price`: valor do ingresso.
- `ctaUrl`: link de checkout. Enquanto estiver vazio, todos os CTAs permanecem como botões sem destino.
- `instagramUrl`: perfil oficial do Kauã.
- `venueUrl`: página oficial do espaço.

## Publicação

O projeto gera arquivos estáticos em `dist/` e pode ser publicado diretamente na Vercel:

```bash
npm run build
npx vercel@latest deploy --prod --yes
```

## Ativos

As fotografias de Kauã foram selecionadas a partir do perfil oficial informado pela organização. As imagens do auditório vieram da página oficial da Cervejaria Imperatriz. A organização deve manter a confirmação de direito de uso antes de campanhas pagas.

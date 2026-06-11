# Workshop Premium Barber Experience

Landing page do workshop presencial com Fidelis (Barbeiro Educador), marcado para domingo, 08 de novembro de 2026, na Cervejaria Imperatriz em Sorocaba.

Identidade visual derivada da logo oficial: off-white, preto-tinta e azul royal, com display Anton self-hosted.

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
- `occupiedSeats`: inscrições reais. Em `0`, a barra de ocupação fica oculta; com qualquer valor positivo, ela aparece automaticamente.
- `price`: valor do ingresso.
- `ctaUrl`: link de checkout. Enquanto estiver vazio, todos os CTAs permanecem como botões sem destino.
- `instagramUrl`: perfil oficial do Fidelis.
- `venueUrl`: página oficial do espaço.
- `speaker.credentials`: credenciais exibidas na seção de autoridade (somente fatos confirmados).
- `speaker.pendingStats`: anos de carreira e alunos formados — preencher quando a organização confirmar os números.

## Medição

Todos os CTAs e links externos têm atributo `data-track` (`cta-header`, `cta-hero`, `cta-scarcity`, `cta-final`, `cta-mobile-bar`, `instagram-fidelis`, `venue`) prontos para conexão de analytics.

## Publicação

O projeto gera arquivos estáticos em `dist/` e pode ser publicado diretamente na Vercel:

```bash
npm run build
npx vercel@latest deploy --prod --yes
```

## Ativos

As fotografias do Fidelis foram fornecidas pela organização (material oficial). As imagens do auditório vieram da página oficial da Cervejaria Imperatriz. A organização deve manter a confirmação de direito de uso antes de campanhas pagas.

Para regerar os WebP a partir das fotos originais: `node tools/process-photos.mjs`.

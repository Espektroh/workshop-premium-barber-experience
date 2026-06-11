# Plano de Reconstrução — Barber Experience com Fidelis Educador

Data: 11/06/2026. Objetivo: vender 75 ingressos a R$ 300 para 08/11/2026, Cervejaria Imperatriz, Sorocaba/SP.

---

## ETAPA 1 — Diagnóstico do site atual

### O que o site atual faz bem (manter)

| Item | Por quê |
|---|---|
| Stack Vite + TS vanilla, zero framework | Página estática levíssima, build rápido, fácil manutenção |
| `src/config.ts` centralizado | Data, preço, CTA e ocupação editáveis em um ponto |
| Countdown e ocupação testados (vitest) | Lógica coberta, sem regressão |
| Acessibilidade base | Skip link, `:focus-visible`, `prefers-reduced-motion`, um único `h1` |
| JSON-LD `EducationEvent` + OG tags | SEO estruturado correto |
| Escassez honesta | Ocupação parte de zero, sem urgência falsa |
| CTA fixo mobile | Padrão correto para tráfego majoritariamente mobile |

### O que está quebrando conversão (reconstruir)

1. **Identidade inteira desalinhada** — tema preto/dourado e todas as fotos são do Kauã Hausman. A nova logo (preto + azul royal sobre off-white, tipografia ultra-bold condensada) manda outra direção: editorial suíço, claro, contemporâneo. Tudo visual será refeito.
2. **Hero sem âncora de autoridade** — o nome do palestrante só aparece no subtítulo. O primeiro viewport não responde "quem é esse cara e por que eu deveria pagar R$ 300".
3. **Contador injetado via JS depois do render** — causa layout shift e às vezes nem é visto. Passa a fazer parte do HTML inicial.
4. **Seção "manifesto" institucional** — dois parágrafos + 4 pilares abstratos. Ninguém compra pilar. Será comprimida em uma única afirmação de posicionamento dentro do fluxo de venda.
5. **Lista de aprendizados fria** — 8 tópicos descrevem currículo ("Marketing para barbeiros"), não resultado. Reescritos como transformações ("sair cobrando pelo valor, não pela concorrência").
6. **Informação triplicada** — data/local/preço aparecem no hero, na seção "08/O encontro" e no CTA final. A seção "O encontro" será eliminada; a página encurta ~20%.
7. **Barra de ocupação 0/75 é anti-venda** — barra vazia comunica "ninguém comprou". Nova regra: com `occupiedSeats = 0` a barra não renderiza; aparece só a contagem de vagas. Honestidade preservada, sinal negativo eliminado.
8. **FAQ vaza linguagem interna** — "será definida quando a plataforma de pagamento for conectada" soa amador. Respostas reescritas com o que é certo; pendências viram "anunciado em breve no canal oficial".
9. **Hero como `background-image`** — sem `srcset`, desperdiça bytes no mobile. Vira `<img>` com `srcset/sizes` + `fetchpriority="high"`.
10. **Sem pontos de medição** — CTAs ganham `data-track` para analytics futura sem retrabalho.

---

## ETAPA 2 — Mapa de habilidades aplicadas

- **CRO** — hierarquia hero (promessa → prova → preço → CTA), remoção de seções sem função de venda, escassez honesta, CTA repetido em 4 pontos de decisão.
- **Copywriting de resposta direta** — headlines de transformação, verbos de resultado (faturar, cobrar, posicionar), zero "aprenda/descubra/imperdível".
- **Branding** — design system derivado da logo: off-white, preto-tinta, azul royal; tipografia display condensada (Anton) ecoando o lettering da marca.
- **UX mobile-first** — blocos escaneáveis em 1 coluna, tipografia fluida `clamp()`, CTA fixo, alvos de toque ≥ 44px.
- **UI/Design system** — tokens CSS, ritmo de espaçamento consistente, alternância off-white/preto para cadência visual (referências: Apple, Stripe, Linear).
- **Psicologia do consumo** — prova de autoridade com números, identificação ("para quem é"), exclusão estratégica ("não é para"), escassez real (75 cadeiras físicas), custo de oportunidade no CTA final.
- **Storytelling** — Fidelis como educador que viveu a cadeira antes de ensinar; o evento como atalho de anos de tentativa e erro.
- **Front-end performance** — fonte display self-hosted (18KB woff2, `font-display: swap`), imagens WebP 12–62KB com `srcset`, lazy loading abaixo da dobra, zero dependência externa de runtime.
- **SEO** — JSON-LD atualizado para Fidelis, title/description reescritos com palavras de busca reais ("workshop para barbeiros Sorocaba").
- **Acessibilidade** — contraste AA no tema claro, foco visível azul, FAQ em `<details>` nativo, textos alternativos descritivos.

## ETAPA 3 — Estratégia de conversão

- **Emoção central**: ambição frustrada — o barbeiro que é bom de tesoura mas vê a agenda oscilar e o preço travado pela concorrência. A página nomeia essa dor e oferece o caminho de saída.
- **Transformação vendida**: deixar de ser "mais um barbeiro bom" para ser **a referência da cidade que escolhe quanto cobra**. Não vendemos um domingo; vendemos a virada de operador para dono de negócio.
- **Objeções a quebrar**:
  1. "R$ 300 é caro" → ancoragem: é menos do que 10 cortes; uma única decisão de precificação aplicada paga o ingresso.
  2. "Já sei cortar" → o evento não ensina corte; ensina o que a técnica sozinha não entrega: posicionamento, precificação, marca.
  3. "Será que vale meu domingo?" → dia único, encerra até 18h, 75 cadeiras, demonstrações ao vivo + networking selecionado.
  4. "Quem é Fidelis?" → seção de autoridade com história e números verificáveis.
  5. "E se eu não conseguir aplicar?" → conteúdo orientado a decisão (o que fazer segunda-feira de manhã), não a teoria.
- **Gatilhos**: autoridade (números do Fidelis), escassez física real (75 cadeiras), prova social (fotos de turmas reais), pertencimento (sala selecionada), aversão à perda (CTA final: "as 75 cadeiras não esperam").
- **Percepção de valor**: estética de conferência nacional premium — não de "cursinho de barbearia". O design claro e tipográfico afasta o clichê dark/dourado do nicho e aproxima de Apple/Stripe.

## ETAPA 4 — Novo posicionamento (validado por pesquisa em 11/06/2026)

**Quem é Fidelis (fatos verificados em fontes públicas):**
- Apresenta-se como "Fidelis | Barbeiro Educador" (@fidelis_educador).
- Formação internacional declarada na bio: MENSPIRE (Reino Unido), Josh O'Meara-Patel, Pivot Point (Brasil/Argentina).
- Treinador no Brasil da **Fórmula D.F.S** — sistema de corte criado pelo inglês Josh O'Meara-Patel (MENSPIRE), com comunidade global.
- Dá treinamentos VIP presenciais em barbearias parceiras; esteve no Barber Pro Nordeste (Recife), um dos maiores eventos do setor no país.
- Tagline dele: "Do 0 ao Avançado".
- Linguagem: motivacional, gratidão, "próximo nível", "bora pra cima".

**Não encontrado publicamente (não usar sem confirmação do organizador):** nome completo, número de seguidores, anos de carreira, total de alunos formados. Esses campos ficam em `config.ts` para ativação futura.

**Conceito de posicionamento**: *O padrão internacional do corte, traduzido em posicionamento e faturamento — ao vivo, em Sorocaba.*

A autoridade do Fidelis vem de credencial, não de fama: ele estudou nas escolas que definem o padrão mundial (MENSPIRE/Pivot Point) e treina barbeiros no método D.F.S. A ponte de venda: técnica de padrão internacional é o que sustenta preço premium — e o evento entrega as duas pontas (padrão técnico + mentalidade de negócio).

## ETAPA 5 — Arquitetura + copy (resumo por seção)

1. **Header** — logo + CTA "Garantir vaga".
2. **Hero** (off-white, tipografia gigante) — chips de data/local/vagas; H1 de transformação; sub nomeando Fidelis; retrato dramático; CTA + preço; contador no HTML.
3. **Autoridade** (bloco preto) — "Quem é Fidelis"; história curta; linha de números; por que ouvir.
4. **O que você leva** — 6 transformações escritas como resultado + faixa Antes → Depois.
5. **Para quem é / não é** — duas colunas curtas.
6. **Experiência premium** — o dia inteiro: demonstrações ao vivo, networking de 75 cadeiras, coffee break, fotos e endereço do local.
7. **Escassez** — 75 cadeiras, turma única + CTA.
8. **FAQ** — 5 objeções reais.
9. **CTA final** (bloco preto) — custo de oportunidade + dados essenciais + CTA.
10. **Footer + CTA fixo mobile.**

## ETAPA 6 — Design system (derivado da logo)

- **Cores**: `--paper #F4F1EA` (fundo), `--ink #1D1B18` (texto/blocos), `--blue #1D4ED8` (ação/acento — só CTAs, destaques e dados de escassez), `--paper-dim`, `--ink-soft` para hierarquia.
- **Tipografia**: Anton (display, self-hosted, ecoa o lettering condensado da logo) para H1/H2/números; Inter system stack para corpo. Escala fluida com `clamp()`.
- **Logo**: lockup tipográfico recriado em HTML/CSS — "BARBER" em ink + "EXPERIENCE" em azul letterspaced (header e footer).
- **Fotografia**: retratos dramáticos em fundo preto integram os blocos escuros; fotos de aula provam o educador em ação; tratamento consistente sem filtros.
- **Componentes**: chips de metadados, stat-row, listas com check minimal, accordion nativo, botão primário azul (hover escurece, foco anel azul).
- **Motion**: apenas reveal sutil no scroll + transições de hover; respeita `prefers-reduced-motion`.

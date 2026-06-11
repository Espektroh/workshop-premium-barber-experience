import { eventConfig, formatCurrency, speaker } from "./config";
import { getOccupancy } from "./occupancy";

const arrowIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const checkIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const crossIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
`;

const brandLockup = `
  <span class="brand-word">Barber</span>
  <span class="brand-accent">Experience</span>
`;

function renderCta(label: string, className = "", track = "") {
  const classes = `cta-button ${className}`.trim();
  const content = `<span>${label}</span>${arrowIcon}`;
  const trackAttr = track ? ` data-track="${track}"` : "";

  if (eventConfig.ctaUrl) {
    return `<a class="${classes}" href="${eventConfig.ctaUrl}"${trackAttr}>${content}</a>`;
  }

  return `<button class="${classes}" type="button"${trackAttr}>${content}</button>`;
}

const gains = [
  [
    "01",
    "A Fórmula D.F.S ao vivo",
    "O sistema internacional de corte demonstrado na sua frente, do diagnóstico à finalização — não em vídeo.",
  ],
  [
    "02",
    "Padrão técnico que sustenta preço",
    "Consistência de resultado é o que permite cobrar mais sem perder cliente.",
  ],
  [
    "03",
    "Precificação pelo valor",
    "Saia da tabela da concorrência: construa percepção de valor antes de falar número.",
  ],
  [
    "04",
    "Posicionamento que atrai",
    "Seja lembrado e procurado na sua cidade, em vez de competir por quem cobra menos.",
  ],
  [
    "05",
    "Experiência que fideliza",
    "Transforme atendimento em recorrência e indicação — a agenda para de oscilar.",
  ],
  [
    "06",
    "Plano para segunda-feira",
    "Você volta com decisões claras para aplicar na primeira semana depois do evento.",
  ],
];

const experienceItems = [
  "Demonstrações de corte ao vivo",
  "Sala com 75 profissionais selecionados",
  "Networking que vale agenda",
  "Coffee break incluso",
  "Estrutura profissional de som e projeção",
  "Encerramento até as 18h",
];

const occupancy = getOccupancy(eventConfig.capacity, eventConfig.occupiedSeats);

function renderOccupancy() {
  if (occupancy.occupied === 0) {
    return `
      <p class="scarcity-note reveal">Turma única. Presencial. Sem gravação e sem segunda data marcada.</p>
    `;
  }

  return `
    <div class="occupancy reveal" aria-label="${occupancy.occupied} de ${eventConfig.capacity} vagas ocupadas">
      <div class="occupancy-meta">
        <span>Vagas ocupadas</span>
        <strong>${occupancy.occupied} / ${eventConfig.capacity}</strong>
      </div>
      <div class="occupancy-track">
        <span style="width: ${occupancy.percentage}%"></span>
      </div>
      <small>Contagem atualizada somente com inscrições reais.</small>
    </div>
  `;
}

export function renderPage() {
  return `
    <header class="site-header" data-header>
      <a class="brand" href="#inicio" aria-label="Barber Experience - início">
        ${brandLockup}
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#fidelis">Fidelis</a>
        <a href="#ganhos">O que você leva</a>
        <a href="#experiencia">Experiência</a>
        <a href="#faq">FAQ</a>
      </nav>
      ${renderCta("Garantir vaga", "header-cta", "cta-header")}
    </header>

    <main id="conteudo">
      <section class="hero" id="inicio" aria-labelledby="hero-title">
        <div class="hero-copy">
          <ul class="hero-chips" aria-label="Informações do evento">
            <li>08 NOV 2026</li>
            <li>${eventConfig.city.toUpperCase()}</li>
            <li class="chip-blue">${eventConfig.capacity} VAGAS</li>
          </ul>
          <h1 class="display" id="hero-title">De barbeiro bom a <em>referência da cidade.</em></h1>
          <p class="hero-subtitle">Workshop presencial com <strong>Fidelis</strong>, barbeiro educador com formação internacional e treinador da Fórmula D.F.S no Brasil. Um dia inteiro de técnica, posicionamento e negócio — para voltar cobrando o que seu trabalho vale.</p>
          <div class="hero-actions">
            ${renderCta(`Garantir minha vaga — ${formatCurrency(eventConfig.price)}`, "primary-cta", "cta-hero")}
            <span class="hero-note">${eventConfig.capacity} vagas · turma única · presencial</span>
          </div>
          <div class="countdown" aria-live="polite" data-countdown-root>
            <span class="countdown-label">Faltam</span>
            <div><strong data-countdown="days">000</strong><small>dias</small></div>
            <div><strong data-countdown="hours">00</strong><small>horas</small></div>
            <div><strong data-countdown="minutes">00</strong><small>min</small></div>
            <div><strong data-countdown="seconds">00</strong><small>seg</small></div>
          </div>
        </div>
        <figure class="hero-figure">
          <img
            src="/assets/fidelis-hero-900.webp"
            srcset="/assets/fidelis-hero-520.webp 520w, /assets/fidelis-hero-900.webp 852w"
            sizes="(max-width: 880px) 100vw, 44vw"
            width="852"
            height="1280"
            alt="Fidelis, barbeiro educador, em retrato sobre fundo preto"
            fetchpriority="high"
          />
          <figcaption>
            <span>${speaker.name}</span>
            <small>${speaker.role} · ${speaker.handle}</small>
          </figcaption>
        </figure>
        <dl class="hero-facts" aria-label="Resumo do evento">
          <div>
            <dt>Data</dt>
            <dd>08 NOV 2026</dd>
          </div>
          <div>
            <dt>Local</dt>
            <dd>${eventConfig.venue.toUpperCase()}</dd>
          </div>
          <div>
            <dt>Capacidade</dt>
            <dd>${eventConfig.capacity} VAGAS</dd>
          </div>
          <div>
            <dt>Horário</dt>
            <dd>ATÉ 18H</dd>
          </div>
        </dl>
      </section>

      <section class="speaker section section-dark" id="fidelis">
        <div class="speaker-media reveal">
          <img
            src="/assets/fidelis-gesto-900.webp"
            srcset="/assets/fidelis-gesto-520.webp 520w, /assets/fidelis-gesto-900.webp 851w"
            sizes="(max-width: 880px) 100vw, 38vw"
            width="851"
            height="1280"
            alt="Fidelis conduzindo um treinamento presencial em estúdio"
            loading="lazy"
          />
          <img
            class="speaker-overlay"
            src="/assets/fidelis-aula-640.webp"
            width="640"
            height="426"
            alt="Fidelis falando para uma turma de barbeiros"
            loading="lazy"
          />
        </div>
        <div class="speaker-content">
          <div class="section-index reveal">01 / O educador</div>
          <h2 class="display reveal">Formado no padrão internacional. <em>Ensinando no Brasil.</em></h2>
          <p class="speaker-lead reveal">Fidelis não é influenciador. É educador: formou-se nas escolas que definem o padrão mundial do corte masculino e hoje treina barbeiros do zero ao avançado.</p>
          <ul class="credentials reveal" aria-label="Credenciais de Fidelis">
            ${speaker.credentials
              .map(
                (credential) => `
                  <li>
                    <strong>${credential.title}</strong>
                    <span>${credential.detail}</span>
                  </li>
                `,
              )
              .join("")}
          </ul>
          <div class="method reveal">
            <h3>O que é a Fórmula D.F.S</h3>
            <p>Sistema de corte criado pelo inglês Josh O'Meara-Patel (MENSPIRE), usado por barbeiros no mundo inteiro para entregar consistência em qualquer estilo. Em Sorocaba, você vê o método aplicado ao vivo — na sua frente, não numa tela.</p>
          </div>
          <a class="text-link reveal" href="${eventConfig.instagramUrl}" target="_blank" rel="noopener noreferrer" data-track="instagram-fidelis">
            Ver o trabalho do Fidelis
            ${arrowIcon}
          </a>
        </div>
      </section>

      <section class="gains section" id="ganhos">
        <div class="gains-heading">
          <div class="section-index reveal">02 / O que você leva</div>
          <h2 class="display reveal">Você não compra um ingresso. <em>Leva um padrão novo de trabalho.</em></h2>
        </div>
        <div class="gains-list">
          ${gains
            .map(
              ([number, title, description]) => `
                <article class="gain-row reveal">
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${description}</p>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="comparison reveal" aria-label="Evolução esperada">
          <div class="comparison-column comparison-before">
            <span>Hoje</span>
            <ul>
              <li>Agenda que oscila todo mês</li>
              <li>Preço travado pela concorrência</li>
              <li>Cliente que some sem explicação</li>
            </ul>
          </div>
          <div class="comparison-divider" aria-hidden="true">${arrowIcon}</div>
          <div class="comparison-column comparison-after">
            <span>Depois do dia 08</span>
            <ul>
              <li>Padrão técnico de nível internacional</li>
              <li>Preço definido pelo valor que você entrega</li>
              <li>Clientela que volta e indica</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="audience section">
        <div class="section-index reveal">03 / Para quem é</div>
        <div class="audience-grid">
          <div class="audience-column reveal">
            <span class="audience-label">Essa sala é para</span>
            <h2>Quem decidiu tratar a barbearia como carreira, marca e negócio.</h2>
            <ul>
              <li>${checkIcon}<span>Donos e gestores de barbearias</span></li>
              <li>${checkIcon}<span>Barbeiros autônomos que querem subir de nível</span></li>
              <li>${checkIcon}<span>Profissionais em formação com ambição real</span></li>
            </ul>
          </div>
          <div class="audience-column audience-not reveal">
            <span class="audience-label">Não é para</span>
            <h2>Quem está confortável competindo por preço.</h2>
            <ul>
              <li>${crossIcon}<span>Quem busca atalho ou promessa fácil</span></li>
              <li>${crossIcon}<span>Quem quer só assistir cortes e ir embora</span></li>
              <li>${crossIcon}<span>Quem não pretende aplicar nada na segunda-feira</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="experience section section-dark" id="experiencia">
        <div class="experience-copy">
          <div class="section-index reveal">04 / A experiência</div>
          <h2 class="display reveal">Um dia inteiro imerso <em>no nível em que você quer trabalhar.</em></h2>
          <p class="reveal">Sala preparada para foco e troca real entre profissionais que levam o mercado a sério — do palco ao coffee break.</p>
          <ul class="experience-list reveal">
            ${experienceItems
              .map((item) => `<li>${checkIcon}<span>${item}</span></li>`)
              .join("")}
          </ul>
        </div>
        <div class="venue-gallery reveal" id="local">
          <figure class="venue-main">
            <img src="/assets/venue-room.webp" width="326" height="265" alt="Auditório preparado para eventos na Cervejaria Imperatriz" loading="lazy" />
          </figure>
          <figure>
            <img src="/assets/venue-networking.webp" width="326" height="265" alt="Área interna da Cervejaria Imperatriz" loading="lazy" />
          </figure>
          <figure>
            <img src="/assets/fidelis-demonstracao-520.webp" width="520" height="782" alt="Fidelis demonstrando técnica de corte com alunos observando" loading="lazy" />
          </figure>
          <a class="venue-address" href="${eventConfig.venueUrl}" target="_blank" rel="noopener noreferrer" data-track="venue">
            <span>${eventConfig.venue}</span>
            <strong>${eventConfig.address}<br>${eventConfig.city}</strong>
            ${arrowIcon}
          </a>
        </div>
      </section>

      <section class="scarcity section">
        <div class="scarcity-inner">
          <div class="section-index reveal">05 / Vagas</div>
          <h2 class="display reveal"><span>${eventConfig.capacity}</span> cadeiras.<br><em>Nenhuma a mais.</em></h2>
          <p class="reveal">A capacidade limitada mantém a sala próxima do palco e o networking relevante. Quando a última cadeira sair, acabou.</p>
          ${renderOccupancy()}
          ${renderCta("Quero uma das 75 cadeiras", "primary-cta reveal", "cta-scarcity")}
        </div>
      </section>

      <section class="faq section" id="faq">
        <div class="faq-heading">
          <div class="section-index reveal">06 / Perguntas reais</div>
          <h2 class="display reveal">Antes de garantir <em>sua cadeira.</em></h2>
        </div>
        <div class="faq-list reveal">
          <details>
            <summary><span>Sou iniciante. Vou conseguir acompanhar?</span><i aria-hidden="true"></i></summary>
            <p>Sim. O método que o Fidelis treina foi desenhado do zero ao avançado, e o conteúdo de posicionamento e precificação vale para qualquer fase da carreira.</p>
          </details>
          <details>
            <summary><span>O que está incluso no ingresso?</span><i aria-hidden="true"></i></summary>
            <p>O dia completo do evento: demonstrações ao vivo, conteúdo de posicionamento e negócio, networking com os participantes e coffee break. Encerramento até as 18h.</p>
          </details>
          <details>
            <summary><span>É só demonstração de corte?</span><i aria-hidden="true"></i></summary>
            <p>Não. A técnica é uma parte do dia. O restante é o que sustenta o crescimento: posicionamento, precificação pelo valor e experiência do cliente.</p>
          </details>
          <details>
            <summary><span>Posso parcelar?</span><i aria-hidden="true"></i></summary>
            <p>As condições de pagamento e parcelamento aparecem no checkout, no momento da inscrição.</p>
          </details>
          <details>
            <summary><span>E se eu não puder ir no dia?</span><i aria-hidden="true"></i></summary>
            <p>A política de transferência de titularidade é publicada nos termos do ingresso antes do evento. Qualquer caso é resolvido pelo canal oficial da organização.</p>
          </details>
        </div>
      </section>

      <section class="final-cta section section-dark">
        <div class="final-content">
          <div class="section-index reveal">07 / Decisão</div>
          <h2 class="display reveal">08 de novembro. 75 cadeiras. <em>Uma decisão.</em></h2>
          <p class="reveal">Enquanto você espera ter certeza, outro barbeiro da sua cidade garante a cadeira — e o posicionamento.</p>
          <div class="final-action reveal">
            ${renderCta("Garantir minha vaga agora", "primary-cta", "cta-final")}
            <span>${formatCurrency(eventConfig.price)}</span>
          </div>
          <div class="final-meta reveal">
            <span>08 NOV 2026</span>
            <span>${eventConfig.venue}</span>
            <span>${eventConfig.city}</span>
            <span>ATÉ 18H</span>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <a class="brand" href="#inicio">
        ${brandLockup}
      </a>
      <p>Workshop presencial com Fidelis · ${eventConfig.city}</p>
      <div>
        <a href="${eventConfig.instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram do Fidelis</a>
        <a href="${eventConfig.venueUrl}" target="_blank" rel="noopener noreferrer">Conheça o local</a>
      </div>
    </footer>

    <div class="mobile-cta">
      <span><small>Ingresso</small>${formatCurrency(eventConfig.price)}</span>
      ${renderCta("Garantir vaga", "", "cta-mobile-bar")}
    </div>
  `;
}

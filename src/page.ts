import { eventConfig, formatCurrency } from "./config";
import { getOccupancy } from "./occupancy";

const arrowIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const checkIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const crossIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`;

function renderCta(label: string, className = "") {
  const classes = `cta-button ${className}`.trim();
  const content = `${label}${arrowIcon}`;

  if (eventConfig.ctaUrl) {
    return `<a class="${classes}" href="${eventConfig.ctaUrl}">${content}</a>`;
  }

  return `<button class="${classes}" type="button">${content}</button>`;
}

const learningItems = [
  ["01", "Posicionamento de barbearia", "Como ocupar um espaço claro na mente do cliente e deixar de competir apenas por preço."],
  ["02", "Experiência do cliente", "Criar uma jornada que aumenta valor percebido, recorrência e indicação."],
  ["03", "Como cobrar mais", "Construir percepção de valor antes de falar em preço."],
  ["04", "Construção de autoridade", "Transformar conhecimento e presença em reconhecimento real na sua cidade."],
  ["05", "Marketing para barbeiros", "Comunicar o que torna seu trabalho relevante para o público certo."],
  ["06", "Conteúdo que gera clientes", "Produzir com intenção, consistência e direção comercial."],
  ["07", "Networking estratégico", "Criar relações que aceleram aprendizado, oportunidades e crescimento."],
  ["08", "Crescimento sustentável", "Tomar decisões que fortalecem o negócio sem perder identidade."],
];

const experienceItems = [
  "Ambiente climatizado",
  "Estrutura profissional",
  "Networking selecionado",
  "Coffee break incluso",
  "Demonstrações ao vivo",
  "Conteúdo prático",
];

const occupancy = getOccupancy(
  eventConfig.capacity,
  eventConfig.occupiedSeats,
);

export function renderPage() {
  return `
    <header class="site-header" data-header>
      <a class="brand" href="#inicio" aria-label="Barber Experience - início">
        <span>BARBER</span>
        <small>EXPERIENCE</small>
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#experiencia">Experiência</a>
        <a href="#kaua">Kauã</a>
        <a href="#conteudo-programa">Conteúdo</a>
        <a href="#local">Local</a>
        <a href="#faq">FAQ</a>
      </nav>
      ${renderCta("Garantir vaga", "header-cta")}
    </header>

    <main id="conteudo">
      <section class="hero" id="inicio" aria-labelledby="hero-title">
        <div class="hero-photo" role="img" aria-label="Kauã Hausman em retrato editorial"></div>
        <div class="hero-shade"></div>
        <div class="hero-content">
          <div class="hero-brandline">Workshop Premium Barber Experience</div>
          <h1 id="hero-title">Os barbeiros que mais crescem não estão apenas cortando cabelo. <em>Estão construindo negócios.</em></h1>
          <p class="hero-subtitle">Um dia de imersão presencial com Kauã Hausman para barbeiros que querem aumentar faturamento, autoridade e posicionamento.</p>
          <div class="hero-actions">
            ${renderCta("Quero garantir minha vaga", "primary-cta")}
            <span class="hero-price">${formatCurrency(eventConfig.price)}</span>
          </div>
        </div>
        <dl class="hero-facts" aria-label="Informações do evento">
          <div>
            <dt>Data</dt>
            <dd>08 NOV 2026</dd>
          </div>
          <div>
            <dt>Local</dt>
            <dd>${eventConfig.city}</dd>
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
        <a class="scroll-cue" href="#manifesto" aria-label="Conheça o evento">
          <span></span>
        </a>
      </section>

      <section class="manifesto section" id="manifesto">
        <div class="section-index reveal">01 / O mercado mudou</div>
        <div class="manifesto-grid">
          <h2 class="display-title reveal">Técnica abre a porta.<br><em>Posicionamento faz você permanecer.</em></h2>
          <div class="manifesto-copy reveal">
            <p>O cliente de hoje não escolhe apenas quem executa um bom corte. Ele escolhe quem transmite confiança, identidade e uma experiência que vale ser compartilhada.</p>
            <p>Enquanto profissionais comuns disputam preço, os que dominam marca, relacionamento e negócio constroem agenda, autoridade e valor percebido.</p>
          </div>
        </div>
        <div class="principles reveal" aria-label="Pilares do crescimento">
          <div><span>01</span><strong>Técnica</strong><small>A base que sustenta a entrega.</small></div>
          <div><span>02</span><strong>Marca</strong><small>O motivo para ser lembrado.</small></div>
          <div><span>03</span><strong>Experiência</strong><small>O que transforma serviço em valor.</small></div>
          <div><span>04</span><strong>Negócio</strong><small>O sistema que permite crescer.</small></div>
        </div>
      </section>

      <section class="speaker section section-dark" id="kaua">
        <div class="speaker-image-wrap reveal">
          <img src="/assets/kaua-editorial.webp" width="900" height="1200" alt="Kauã Hausman durante um evento profissional" loading="lazy" />
          <span class="image-caption">Identidade · Posicionamento · Técnica</span>
        </div>
        <div class="speaker-content">
          <div class="section-index reveal">02 / A imersão</div>
          <h2 class="display-title reveal">Quem vai compartilhar <em>o que realmente funciona.</em></h2>
          <p class="speaker-lead reveal">Kauã Hausman construiu uma presença reconhecida ao unir identidade, técnica, integridade e posicionamento.</p>
          <div class="speaker-body reveal">
            <p>Nesta imersão, a conversa vai além da cadeira. O foco está nas decisões que ajudam profissionais a se tornarem referência, comunicarem valor e construírem marcas capazes de mudar trajetórias.</p>
          </div>
          <a class="text-link reveal" href="${eventConfig.instagramUrl}" target="_blank" rel="noopener noreferrer">
            Conhecer o perfil oficial
            ${arrowIcon}
          </a>
        </div>
      </section>

      <section class="learning section" id="conteudo-programa">
        <div class="learning-heading">
          <div class="section-index reveal">03 / Conteúdo</div>
          <h2 class="display-title reveal">Um dia para mudar a forma como você enxerga <em>sua carreira e seu negócio.</em></h2>
        </div>
        <div class="learning-list">
          ${learningItems
            .map(
              ([number, title, description]) => `
                <article class="learning-row reveal">
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${description}</p>
                  <i aria-hidden="true">${arrowIcon}</i>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="transformation section section-gold">
        <div class="section-index reveal">04 / Evolução</div>
        <div class="transformation-heading">
          <h2 class="display-title reveal">O próximo nível começa quando você deixa de operar no automático.</h2>
          <p class="reveal">Não existe promessa instantânea. Existe direção, repertório e um ambiente capaz de provocar decisões melhores.</p>
        </div>
        <div class="comparison reveal">
          <div class="comparison-column comparison-before">
            <span>Antes</span>
            <ul>
              <li>Agenda inconsistente</li>
              <li>Dependência de preço</li>
              <li>Pouca autoridade</li>
              <li>Comunicação sem direção</li>
            </ul>
          </div>
          <div class="comparison-divider" aria-hidden="true">${arrowIcon}</div>
          <div class="comparison-column comparison-after">
            <span>Depois</span>
            <ul>
              <li>Mais clareza para atrair clientes</li>
              <li>Potencial de elevar o ticket médio</li>
              <li>Posicionamento mais forte</li>
              <li>Decisões de crescimento sustentáveis</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="experience section section-dark" id="experiencia">
        <div class="experience-copy">
          <div class="section-index reveal">05 / Experiência premium</div>
          <h2 class="display-title reveal">Conteúdo importante pede <em>um ambiente à altura.</em></h2>
          <p class="reveal">Uma sala preparada para foco, proximidade e troca real entre profissionais que levam o mercado a sério.</p>
          <ul class="experience-list reveal">
            ${experienceItems
              .map(
                (item) => `
                  <li>${checkIcon}<span>${item}</span></li>
                `,
              )
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
            <img src="/assets/venue-detail.webp" width="326" height="265" alt="Detalhes do espaço de eventos da Cervejaria Imperatriz" loading="lazy" />
          </figure>
          <a class="venue-address" href="${eventConfig.venueUrl}" target="_blank" rel="noopener noreferrer">
            <span>${eventConfig.venue}</span>
            <strong>${eventConfig.address}<br>${eventConfig.city}</strong>
            ${arrowIcon}
          </a>
        </div>
      </section>

      <section class="audience section">
        <div class="section-index reveal">06 / Para quem é</div>
        <div class="audience-grid">
          <div class="audience-column reveal">
            <span class="audience-label">Este encontro é para</span>
            <h2>Profissionais que decidiram tratar a barbearia como carreira, marca e negócio.</h2>
            <ul>
              <li>${checkIcon}<span>Donos e gestores de barbearias</span></li>
              <li>${checkIcon}<span>Barbeiros autônomos</span></li>
              <li>${checkIcon}<span>Profissionais em crescimento</span></li>
              <li>${checkIcon}<span>Quem quer elevar faturamento e posicionamento</span></li>
            </ul>
          </div>
          <div class="audience-column audience-not reveal">
            <span class="audience-label">Não é para</span>
            <h2>Quem busca apenas mais uma técnica, um atalho ou uma promessa fácil.</h2>
            <ul>
              <li>${crossIcon}<span>Curiosos sem intenção de aplicar</span></li>
              <li>${crossIcon}<span>Quem procura resultados instantâneos</span></li>
              <li>${crossIcon}<span>Quem deseja apenas uma aula de corte</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="scarcity section">
        <div class="scarcity-inner">
          <div class="section-index reveal">07 / Uma sala selecionada</div>
          <h2 class="reveal"><span>${eventConfig.capacity}</span> vagas.<br>Nenhuma a mais.</h2>
          <p class="reveal">A capacidade limitada mantém a experiência próxima, intencional e relevante para quem estiver presente.</p>
          <div class="occupancy reveal" aria-label="${occupancy.occupied} de ${eventConfig.capacity} vagas ocupadas">
            <div class="occupancy-meta">
              <span>Ocupação confirmada</span>
              <strong>${occupancy.occupied} / ${eventConfig.capacity}</strong>
            </div>
            <div class="occupancy-track">
              <span style="width: ${occupancy.percentage}%"></span>
            </div>
            <small>Contagem atualizada somente com inscrições reais.</small>
          </div>
          ${renderCta("Quero garantir minha vaga", "primary-cta reveal")}
        </div>
      </section>

      <section class="event-details section section-dark">
        <div class="details-photo reveal">
          <img src="/assets/kaua-stage.webp" width="640" height="640" alt="Kauã Hausman em uma apresentação" loading="lazy" />
        </div>
        <div class="details-content">
          <div class="section-index reveal">08 / O encontro</div>
          <h2 class="display-title reveal">Um domingo para construir o que os próximos anos podem exigir de você.</h2>
          <dl class="details-list reveal">
            <div><dt>Data</dt><dd>${eventConfig.dateLabel}</dd></div>
            <div><dt>Local</dt><dd>${eventConfig.venue}, ${eventConfig.city}</dd></div>
            <div><dt>Encerramento</dt><dd>Até as 18h</dd></div>
            <div><dt>Investimento</dt><dd>${formatCurrency(eventConfig.price)}</dd></div>
          </dl>
        </div>
      </section>

      <section class="faq section" id="faq">
        <div class="faq-heading">
          <div class="section-index reveal">09 / Perguntas frequentes</div>
          <h2 class="display-title reveal">Antes de entrar para a sala.</h2>
        </div>
        <div class="faq-list reveal">
          <details>
            <summary><span>Como funciona o ingresso?</span><i aria-hidden="true"></i></summary>
            <p>O ingresso individual garante acesso ao evento e ao coffee break. A entrega e validação digital serão definidas quando a plataforma de pagamento for conectada.</p>
          </details>
          <details>
            <summary><span>O evento terá certificado?</span><i aria-hidden="true"></i></summary>
            <p>Essa informação está em definição pela organização e será publicada antes da abertura oficial das inscrições.</p>
          </details>
          <details>
            <summary><span>Posso parcelar?</span><i aria-hidden="true"></i></summary>
            <p>As condições de parcelamento serão apresentadas quando a plataforma de pagamento for conectada.</p>
          </details>
          <details>
            <summary><span>O workshop é para iniciantes?</span><i aria-hidden="true"></i></summary>
            <p>Sim, desde que o participante queira desenvolver visão de negócio, posicionamento e crescimento profissional.</p>
          </details>
          <details>
            <summary><span>Posso transferir minha vaga?</span><i aria-hidden="true"></i></summary>
            <p>A política de transferência será publicada com os termos do ingresso antes do início das vendas.</p>
          </details>
        </div>
      </section>

      <section class="final-cta section">
        <div class="final-texture" aria-hidden="true"></div>
        <div class="final-content">
          <div class="section-index reveal">10 / Próximo nível</div>
          <h2 class="reveal">08 de novembro pode marcar o início do próximo nível da sua carreira.</h2>
          <p class="reveal">As vagas são limitadas a ${eventConfig.capacity} participantes.</p>
          <div class="final-action reveal">
            ${renderCta("Garantir minha vaga agora", "primary-cta")}
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
        <span>BARBER</span>
        <small>EXPERIENCE</small>
      </a>
      <p>Workshop presencial com Kauã Hausman · ${eventConfig.city}</p>
      <div>
        <a href="${eventConfig.instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram do Kauã</a>
        <a href="${eventConfig.venueUrl}" target="_blank" rel="noopener noreferrer">Conheça o local</a>
      </div>
    </footer>

    <div class="mobile-cta">
      <span><small>Ingresso</small>${formatCurrency(eventConfig.price)}</span>
      ${renderCta("Garantir vaga")}
    </div>
  `;
}

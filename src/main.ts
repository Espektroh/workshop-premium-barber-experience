import "./styles.css";
import { eventConfig } from "./config";
import { getCountdown } from "./countdown";
import { renderPage } from "./page";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Application root was not found.");
}

app.innerHTML = renderPage();

const countdownContainer = document.querySelector<HTMLElement>(
  "[data-countdown-root]",
);
const targetDate = new Date(eventConfig.dateIso);
let countdownTimer: number | undefined;

function updateCountdown() {
  if (!countdownContainer) return;

  const value = getCountdown(targetDate);

  if (value.completed) {
    countdownContainer.innerHTML =
      '<span class="countdown-complete">O encontro começou.</span>';
    if (countdownTimer) window.clearInterval(countdownTimer);
    return;
  }

  const values = {
    days: String(value.days).padStart(3, "0"),
    hours: String(value.hours).padStart(2, "0"),
    minutes: String(value.minutes).padStart(2, "0"),
    seconds: String(value.seconds).padStart(2, "0"),
  };

  Object.entries(values).forEach(([unit, content]) => {
    const element = countdownContainer.querySelector(
      `[data-countdown="${unit}"]`,
    );
    if (element) element.textContent = content;
  });
}

updateCountdown();
countdownTimer = window.setInterval(updateCountdown, 1_000);

const header = document.querySelector<HTMLElement>("[data-header]");
const hero = document.querySelector<HTMLElement>(".hero");
const mobileCta = document.querySelector<HTMLElement>(".mobile-cta");

if (header && hero) {
  const headerObserver = new IntersectionObserver(
    ([entry]) => {
      const hasLeftHero = !entry.isIntersecting;
      header.classList.toggle("is-scrolled", hasLeftHero);
      mobileCta?.classList.toggle("is-visible", hasLeftHero);
    },
    { threshold: 0.05 },
  );
  headerObserver.observe(hero);
}

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!reducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
}

const venueVideo = document.querySelector<HTMLVideoElement>(
  "[data-venue-video]",
);

if (venueVideo) {
  if (reducedMotion) {
    // Sem autoplay para quem prefere movimento reduzido: o vídeo
    // fica disponível com controles nativos.
    venueVideo.setAttribute("controls", "");
    venueVideo.preload = "metadata";
  } else {
    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          venueVideo.play().catch(() => {
            venueVideo.setAttribute("controls", "");
          });
        } else {
          venueVideo.pause();
        }
      },
      { threshold: 0.25 },
    );
    videoObserver.observe(venueVideo);
  }
}

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const selector = anchor.getAttribute("href");
    const target = selector ? document.querySelector(selector) : null;
    if (!(target instanceof HTMLElement)) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
    // Move o foco junto com a rolagem para manter a ordem de navegação
    // por teclado (essencial para o skip link).
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
});

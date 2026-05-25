const params = new URLSearchParams(window.location.search);
const slug = params.get("slug") || "pro-react-exporter";
const projects = Object.values(window.LAB_PROJECTS || {});
const project = window.LAB_PROJECTS?.[slug] || projects[0];

if (project?.theme) {
  const root = document.documentElement;
  root.style.setProperty("--project-accent", project.theme.accent);
  root.style.setProperty("--project-accent-2", project.theme.accent2);
  root.style.setProperty("--project-glow", project.theme.glow);
  root.style.setProperty("--project-panel", project.theme.panel);
}

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
};

const setHtml = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
};

const buildHeroPreview = () => {
  const accent = project.theme?.accent || "#8b5cf6";
  const accent2 = project.theme?.accent2 || "#3b82f6";
  const glowA = project.theme?.glow || "rgba(139, 92, 246, 0.22)";
  const glowB = project.theme?.panel || "rgba(139, 92, 246, 0.10)";
  return `
    <div class="project-preview" style="--project-preview-a:${accent}; --project-preview-b:${accent2}; --project-preview-glow-a:${glowA}; --project-preview-glow-b:${glowB};">
      <div class="project-preview-top">
        <span>${escapeHtml(project.track)}</span>
        <span>${escapeHtml(project.status)}</span>
      </div>
      <div class="project-preview-body">
        <div class="project-preview-bar wide"></div>
        <div class="project-preview-bar"></div>
        <div class="project-preview-bar short"></div>
        <div class="project-preview-window">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  `;
};

const renderCards = (selector, items, className, renderer) => {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = items.map(renderer).join("");
  container.classList.add(className);
};

const renderOverviewCard = (title, eyebrow, body, note = "") => `
  <article class="overview-card">
    <span class="index">${escapeHtml(eyebrow)}</span>
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(body)}</p>
    ${note ? `<div class="detail-note">${escapeHtml(note)}</div>` : ""}
  </article>
`;

const renderCapabilityCard = (item, index) => `
  <article class="capability-card">
    <span class="index">${String(index + 1).padStart(2, "0")}</span>
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.note)}</p>
  </article>
`;

const renderGalleryCard = (item, index) => `
  <article class="gallery-card">
    <div class="gallery-visual">
      <div class="gallery-visual-top">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <span>${escapeHtml(project.track)}</span>
      </div>
      <div class="gallery-visual-body">
        <div class="gallery-visual-orb"></div>
        <div class="gallery-visual-grid">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    </div>
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.note)}</p>
  </article>
`;

const renderRelatedCard = (item) => `
  <article class="related-card">
    <a href="./project.html?slug=${encodeURIComponent(item.slug)}">
      <div class="related-card-top">
        <span class="lab-chip lab-chip--status">${escapeHtml(item.status)}</span>
        <span class="lab-chip lab-chip--track">${escapeHtml(item.track)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <div class="related-card-foot">
        <span>${escapeHtml(item.actionLabel || "Learn more")}</span>
        <span>→</span>
      </div>
    </a>
  </article>
`;

setText("#project-track", project.track);
setText("#project-title", project.title);
setText("#project-summary", project.summary);
setText("#project-status", project.status);
setText("#project-status-pill", project.status);
setText("#project-category", project.category);
setText("#project-action-label", project.actionLabel);
setText("#project-action-note", project.actionNote);
setText("#project-overview-copy", `${project.problem} ${project.insight}`);
setText("#project-access-note", `${project.status} • ${project.actionNote}`);
setText("#project-journey-note", project.journey.join(" • "));
setText("#project-access-copy", `${project.title} is structured as a ${project.track.toLowerCase()} experiment. The journey is: ${project.journey[0].toLowerCase()} → ${project.journey[1].toLowerCase()} → ${project.journey[2].toLowerCase()} → ${project.journey[3].toLowerCase()}.`);

const titleEl = document.querySelector("title");
if (titleEl) titleEl.textContent = `${project.title} | Zuhaib Lab`;

document.body.classList.add(`project-${slug}`);

const heroAction = document.querySelector("#project-action-link");
if (heroAction) {
  heroAction.textContent = project.actionLabel;
  heroAction.setAttribute("href", "#access");
}

const secondaryAction = document.querySelector("#project-secondary-action");
if (secondaryAction) {
  secondaryAction.textContent = "Back to experiments";
  secondaryAction.setAttribute("href", "./index.html#experiments");
}

setHtml("#project-hero-preview", buildHeroPreview());

renderCards(
  "#overview-grid",
  [
    { title: "Problem", eyebrow: "01", body: project.problem },
    { title: "Insight", eyebrow: "02", body: project.insight },
    { title: "Solution", eyebrow: "03", body: project.solution },
    { title: "Outcome", eyebrow: "04", body: project.outcome },
  ],
  "overview-grid--ready",
  (item) => renderOverviewCard(item.title, item.eyebrow, item.body)
);

renderCards(
  "#capabilities-grid",
  project.capabilities || [],
  "capabilities-grid--ready",
  renderCapabilityCard
);

renderCards(
  "#gallery-grid",
  project.gallery || [],
  "gallery-grid--ready",
  renderGalleryCard
);

const journeyList = document.getElementById("journey-list");
if (journeyList) {
  journeyList.innerHTML = (project.journey || [])
    .map(
      (step, index) => `
        <div class="journey-item">
          <span class="index">${String(index + 1).padStart(2, "0")}</span>
          <p>${escapeHtml(step)}</p>
        </div>
      `
    )
    .join("");
}

const related = projects.filter((item) => item.slug !== project.slug).slice(0, 4);
renderCards("#related-grid", related, "related-grid--ready", renderRelatedCard);

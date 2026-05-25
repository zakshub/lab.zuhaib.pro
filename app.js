const projects = Object.values(window.LAB_PROJECTS || {}).sort((a, b) => {
  const left = a.featuredRank || 99;
  const right = b.featuredRank || 99;
  return left - right;
});

const featuredRail = document.getElementById("featured-rail");
const experimentGrid = document.getElementById("experiment-grid");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const buildPreview = (project) => {
  const accent = project.theme?.accent || "#8b5cf6";
  const accent2 = project.theme?.accent2 || "#3b82f6";
  const glow = project.theme?.glow || "rgba(139, 92, 246, 0.22)";
  const panel = project.theme?.panel || "rgba(139, 92, 246, 0.10)";

  if (project.track === "Develop") {
    return `
      <div class="preview preview-develop" style="--preview-a:${accent}; --preview-b:${accent2}; --preview-glow-a:${glow}; --preview-glow-b:${panel};">
        <div class="preview-top">
          <span>import.jsx</span>
          <span>Vite + React</span>
        </div>
        <div class="preview-code">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="preview-foot">structured output</div>
      </div>
    `;
  }

  if (project.track === "Create") {
    return `
      <div class="preview preview-create" style="--preview-a:${accent}; --preview-b:${accent2}; --preview-glow-a:${glow}; --preview-glow-b:${panel};">
        <div class="preview-tiles">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="preview-foot">creative workflow</div>
      </div>
    `;
  }

  if (project.track === "Learn") {
    return `
      <div class="preview preview-learn" style="--preview-a:${accent}; --preview-b:${accent2}; --preview-glow-a:${glow}; --preview-glow-b:${panel};">
        <div class="preview-chat">
          <div class="bubble left"></div>
          <div class="bubble right"></div>
          <div class="bubble left short"></div>
        </div>
        <div class="preview-foot">reflection flow</div>
      </div>
    `;
  }

  if (project.track === "Play") {
    return `
      <div class="preview preview-play" style="--preview-a:${accent}; --preview-b:${accent2}; --preview-glow-a:${glow}; --preview-glow-b:${panel};">
        <div class="preview-track"></div>
        <div class="preview-orbit"></div>
        <div class="preview-foot">motion test</div>
      </div>
    `;
  }

  return `
    <div class="preview preview-explore" style="--preview-a:${accent}; --preview-b:${accent2}; --preview-glow-a:${glow}; --preview-glow-b:${panel};">
      <div class="preview-grid">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="preview-foot">exploratory structure</div>
    </div>
  `;
};

const buildCard = (project, variant = "experiment") => {
  const href = `./project.html?slug=${encodeURIComponent(project.slug)}`;
  const track = escapeHtml(project.track || "Explore");
  const category = escapeHtml(project.category || "");
  const title = escapeHtml(project.title);
  const summary = escapeHtml(project.summary);
  const status = escapeHtml(project.status);
  const action = escapeHtml(project.actionLabel || "Learn more");
  const note = escapeHtml(project.actionNote || "");
  const accent = project.theme?.accent || "#8b5cf6";
  const accent2 = project.theme?.accent2 || "#3b82f6";
  const glow = project.theme?.glow || "rgba(139, 92, 246, 0.22)";
  const panel = project.theme?.panel || "rgba(139, 92, 246, 0.10)";
  return `
    <article class="lab-card lab-card--${variant} track-${project.track.toLowerCase()}" data-track="${track}" style="--card-accent:${accent}; --card-accent-2:${accent2}; --card-glow:${glow}; --card-panel:${panel};">
      <a class="lab-card-link" href="${href}">
        <div class="lab-card-visual">
          <div class="lab-card-topline">
            <span class="lab-chip lab-chip--status">${status}</span>
            <span class="lab-chip lab-chip--track">${track}</span>
          </div>
          ${buildPreview(project)}
        </div>
        <div class="lab-card-copy">
          <div class="lab-card-head">
            <span class="lab-card-note">${note}</span>
            <span class="lab-card-action">${action}</span>
          </div>
          <h3>${title}</h3>
          <p>${summary}</p>
          <div class="lab-card-foot">
            <span>${category}</span>
            <span class="lab-card-arrow">&rarr;</span>
          </div>
        </div>
      </a>
    </article>
  `;
};

const renderFeatured = () => {
  if (!featuredRail) return;
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  featuredRail.innerHTML = featured.map((project) => buildCard(project, "featured")).join("");
};

const renderExperiments = (filter = "All") => {
  if (!experimentGrid) return;
  experimentGrid.innerHTML = projects
    .filter((project) => filter === "All" || project.track === filter)
    .map((project) => buildCard(project, "experiment"))
    .join("");
};

renderFeatured();
renderExperiments();

filterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", button.classList.contains("is-active") ? "true" : "false");
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    filterButtons.forEach((btn) => btn.setAttribute("aria-pressed", "false"));
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    renderExperiments(button.dataset.filter || "All");
  });
});

const sectionAnchors = document.querySelectorAll('a[href^="#"]');

sectionAnchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

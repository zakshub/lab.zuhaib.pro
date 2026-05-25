const params = new URLSearchParams(window.location.search);
const slug = params.get("slug") || "pro-react-exporter";
const project = window.LAB_PROJECTS?.[slug] || window.LAB_PROJECTS["pro-react-exporter"];

if (project?.theme) {
  const root = document.documentElement;
  root.style.setProperty("--project-accent", project.theme.accent);
  root.style.setProperty("--project-accent-2", project.theme.accent2);
  root.style.setProperty("--project-glow", project.theme.glow);
  root.style.setProperty("--project-panel", project.theme.panel);
}

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
};

setText("#project-category", `${project.category}`);
setText("#project-title", project.title);
setText("#project-summary", project.summary);
setText("#project-status", project.status);
setText("#project-problem", project.problem);
setText("#project-insight", project.insight);
setText("#project-solution", project.solution);
setText("#project-outcome", project.outcome);

const titleEl = document.querySelector("title");
if (titleEl) titleEl.textContent = `${project.title} | Zuhaib Lab`;

document.body.classList.add(`project-${slug}`);

const listMap = [
  ["#project-design-notes", project.designNotes],
  ["#project-deliverables", project.deliverables],
];

listMap.forEach(([selector, items]) => {
  const list = document.querySelector(selector);
  if (!list) return;
  list.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
});

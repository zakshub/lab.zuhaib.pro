window.LAB_PROJECTS = {
  "scribecheck-review": {
    slug: "scribecheck-review",
    title: "ScribeCheck Review",
    status: "Draft PR",
    track: "Learn",
    category: "Healthcare UX",
    featured: true,
    featuredRank: 0.5,
    actionLabel: "Review concept",
    actionNote: "Autonomous sample cycle",
    theme: {
      accent: "#22C55E",
      accent2: "#0EA5E9",
      glow: "rgba(34, 197, 94, 0.20)",
      panel: "rgba(14, 165, 233, 0.10)",
    },
    summary:
      "A clinician review layer for AI-generated notes, focused on trust, missing context, and fast sign-off.",
    problem:
      "Ambient AI scribes can reduce documentation burden, but clinicians still need a fast way to review uncertain notes before signing them.",
    insight:
      "The product opportunity is not another scribe. It is the review experience after the scribe: uncertainty, medication/treatment checks, and note structure that respects clinician judgment.",
    solution:
      "A lightweight review queue that flags uncertain sections, separates clinical facts from inferred summaries, and turns note approval into a focused checklist.",
    outcome:
      "A safer, faster path from AI-generated draft to clinician-finalized documentation without hiding responsibility behind automation.",
    journey: [
      "Open the AI-generated note.",
      "Scan risk flags by section.",
      "Review medication and treatment mentions.",
      "Approve, edit, or send back for clarification.",
    ],
    capabilities: [
      {
        title: "Uncertainty map",
        note: "Highlights the sections that need clinician attention first instead of treating the whole note equally.",
      },
      {
        title: "Medication and treatment review",
        note: "Separates high-risk clinical mentions from routine narrative text so review time is spent where it matters.",
      },
      {
        title: "Problem-based note structure",
        note: "Keeps the generated draft aligned to how clinicians actually scan and finalize documentation.",
      },
      {
        title: "Approval checklist",
        note: "Makes the human decision visible before anything is finalized or signed.",
      },
    ],
    gallery: [
      { title: "Draft", note: "AI note arrives with clear review state." },
      { title: "Risk map", note: "Uncertain content is surfaced first." },
      { title: "Clinical check", note: "Medication and treatment mentions get focused review." },
      { title: "Sign-off", note: "Clinician keeps final control." },
    ],
  },
  "pro-react-exporter": {
    slug: "pro-react-exporter",
    title: "Pro React Exporter",
    status: "Featured",
    track: "Develop",
    category: "Developer utility",
    featured: true,
    featuredRank: 1,
    actionLabel: "Try it now",
    actionNote: "Developer utility",
    theme: {
      accent: "#F59E0B",
      accent2: "#F97316",
      glow: "rgba(245, 158, 11, 0.22)",
      panel: "rgba(245, 158, 11, 0.10)",
    },
    summary:
      "Converts messy AI-generated code into clean, runnable React projects for faster shipping.",
    problem:
      "AI-generated code often looks good at first glance but becomes hard to run, edit, and extend once it lands in a real workflow.",
    insight:
      "The real bottleneck is not code generation. It is the gap between generated output and something a developer can actually ship.",
    solution:
      "A browser-based workflow that exports, cleans, and packages generated code into a structured Vite + React project.",
    outcome:
      "A sharper handoff from AI output to working front-end code, with less time wasted on cleanup.",
    journey: [
      "Drop in generated code.",
      "Normalize structure and imports.",
      "Export a runnable React project.",
      "Ship faster with less cleanup.",
    ],
    capabilities: [
      {
        title: "Project import",
        note: "Paste AI-generated output and let the tool understand the shape of the code.",
      },
      {
        title: "Code cleanup pipeline",
        note: "Structure the files, reduce chaos, and make the output easier to maintain.",
      },
      {
        title: "Exportable archive",
        note: "Package everything into a deliverable that can be run locally or handed off.",
      },
      {
        title: "Developer-focused UI",
        note: "Stay practical, fast, and visibly useful for people who ship code.",
      },
    ],
    gallery: [
      { title: "Import", note: "Paste first, organize second." },
      { title: "Cleanup", note: "Structure gets enforced." },
      { title: "Bundle", note: "Everything becomes portable." },
      { title: "Output", note: "Ready to run, easier to extend." },
    ],
  },
  fashionos: {
    slug: "fashionos",
    title: "FashionOS",
    status: "Launch",
    track: "Create",
    category: "Fashion AI",
    featured: true,
    featuredRank: 2,
    actionLabel: "Learn more",
    actionNote: "Fashion workflow platform",
    theme: {
      accent: "#E879F9",
      accent2: "#F43F5E",
      glow: "rgba(232, 121, 249, 0.22)",
      panel: "rgba(232, 121, 249, 0.10)",
    },
    summary:
      "A workflow platform for clothing brands, collection planning, embroidery intelligence, and campaign generation.",
    problem:
      "Fashion teams often jump between planning, branding, campaign thinking, and execution tools that do not speak the same language.",
    insight:
      "If the collection workflow is unified, the product can support better creative decisions without making the process feel mechanical.",
    solution:
      "A modular product that combines line planning, embroidery concepting, brand sensing, and campaign direction in one place.",
    outcome:
      "Faster creative alignment between designers, brand teams, and production stakeholders.",
    journey: [
      "Plan the collection direction.",
      "Generate embroidery intelligence.",
      "Shape the campaign story.",
      "Export on-brand assets for launch.",
    ],
    capabilities: [
      {
        title: "Collection generator",
        note: "Turn the brand direction into structured collection concepts.",
      },
      {
        title: "Embroidery intelligence",
        note: "Bridge garment thinking with digital embroidery designers.",
      },
      {
        title: "Campaign director",
        note: "Plan the launch voice and content rhythm with one system.",
      },
      {
        title: "Brand identity sensing",
        note: "Keep the output aligned to the label rather than generic AI style.",
      },
    ],
    gallery: [
      { title: "Lookbook", note: "Editorial direction for the collection." },
      { title: "Material map", note: "Plan the tactile and visual system." },
      { title: "Campaign board", note: "Move from product to story." },
      { title: "Launch pack", note: "Export the assets that teams need." },
    ],
  },
  "boundary-guard": {
    slug: "boundary-guard",
    title: "Boundary Guard",
    status: "Research",
    track: "Learn",
    category: "Relationship design",
    featured: true,
    featuredRank: 3,
    actionLabel: "Learn more",
    actionNote: "Reflective support tool",
    theme: {
      accent: "#10B981",
      accent2: "#14B8A6",
      glow: "rgba(16, 185, 129, 0.20)",
      panel: "rgba(16, 185, 129, 0.10)",
    },
    summary:
      "AI-powered support for boundary setting, reflection, and relationship clarity in digital life.",
    problem:
      "People often know something feels off in a relationship, but they need structure to think clearly before they speak.",
    insight:
      "The product should help the user frame the conversation first, rather than jump directly into advice.",
    solution:
      "A reflective, guided experience that helps users name the issue, compare options, and prepare a response.",
    outcome:
      "More deliberate communication and less emotional blur when difficult conversations happen.",
    journey: [
      "Pause and name the tension.",
      "Structure the conversation.",
      "Draft a grounded response.",
      "Review the reflection before sending.",
    ],
    capabilities: [
      {
        title: "Conversation framing",
        note: "Help the user understand the shape of the issue before reacting.",
      },
      {
        title: "Boundary prompts",
        note: "Guide the user to define what is okay and what is not.",
      },
      {
        title: "Reflection flow",
        note: "Slow the moment down so the next decision is deliberate.",
      },
      {
        title: "Supportive UX copy",
        note: "Keep the tone careful, trustworthy, and calm.",
      },
    ],
    gallery: [
      { title: "Signal", note: "Notice what feels off." },
      { title: "Frame", note: "Define the boundary clearly." },
      { title: "Draft", note: "Prepare the response before sending." },
      { title: "Review", note: "Reflect before the next move." },
    ],
  },
  "dino-rush": {
    slug: "dino-rush",
    title: "DinoRush",
    status: "Play",
    track: "Play",
    category: "Game / prototype",
    featured: true,
    featuredRank: 4,
    actionLabel: "Learn more",
    actionNote: "Game / prototype",
    theme: {
      accent: "#38BDF8",
      accent2: "#8B5CF6",
      glow: "rgba(56, 189, 248, 0.20)",
      panel: "rgba(56, 189, 248, 0.10)",
    },
    summary:
      "A reimagined browser game with mobile-ready output and playful UI direction.",
    problem:
      "A simple classic can become a memorable lab artifact if the interaction and presentation are reworked with intention.",
    insight:
      "The game is useful as a creative system test: motion, responsiveness, and delight can all be showcased in one small experience.",
    solution:
      "A browser-first game concept with a sharper visual identity and a mobile-friendly experience.",
    outcome:
      "A playful product that still demonstrates front-end discipline.",
    journey: [
      "Open the game.",
      "Test the controls.",
      "Move through responsive scenes.",
      "See how far the motion system can go.",
    ],
    capabilities: [
      {
        title: "Game loop",
        note: "Keep the core interaction simple, fast, and repeatable.",
      },
      {
        title: "Responsive UI",
        note: "The layout has to stay playful on desktop and mobile.",
      },
      {
        title: "APK-ready thinking",
        note: "Treat it like something that can travel beyond the browser.",
      },
      {
        title: "Playful motion",
        note: "Let movement carry the energy of the experience.",
      },
    ],
    gallery: [
      { title: "Start", note: "Lightweight entry into the game." },
      { title: "Run", note: "Fast response and simple rules." },
      { title: "Jump", note: "Playful movement and timing." },
      { title: "Finish", note: "A polished micro-experience." },
    ],
  },
  "ai-comics": {
    slug: "ai-comics",
    title: "AI Comics",
    status: "Archive",
    track: "Explore",
    category: "Creative publishing",
    featured: false,
    featuredRank: 0,
    actionLabel: "Learn more",
    actionNote: "Narrative experiment",
    theme: {
      accent: "#FB7185",
      accent2: "#F59E0B",
      glow: "rgba(251, 113, 133, 0.20)",
      panel: "rgba(251, 113, 133, 0.10)",
    },
    summary:
      "A narrative experiment for daily AI-generated comic pages and original storytelling.",
    problem:
      "AI content is easy to generate, but hard to turn into a repeatable narrative publishing format with personality.",
    insight:
      "The value is not in the image alone. It is in the rhythm, continuity, and story system around the image.",
    solution:
      "A structured comic publishing experiment that pairs generation with story direction and editorial cadence.",
    outcome:
      "A repeatable storytelling medium that can be expanded over time.",
    journey: [
      "Generate the page.",
      "Refine the narrative flow.",
      "Publish with rhythm.",
      "Keep the story system consistent.",
    ],
    capabilities: [
      {
        title: "Daily page system",
        note: "Repeat the format without losing personality.",
      },
      {
        title: "Story arcs",
        note: "Keep the audience anchored inside the larger narrative.",
      },
      {
        title: "Panel rhythm",
        note: "Use layout as part of the storytelling engine.",
      },
      {
        title: "Publishing workflow",
        note: "Balance generation with editorial discipline.",
      },
    ],
    gallery: [
      { title: "Panel one", note: "Set the mood and pacing." },
      { title: "Panel two", note: "Move the story forward." },
      { title: "Panel three", note: "Keep the rhythm clean." },
      { title: "Panel four", note: "End with a clear beat." },
    ],
  },
  "new-concept": {
    slug: "new-concept",
    title: "New Monthly Concept",
    status: "Next",
    track: "Create",
    category: "Open slot",
    featured: false,
    featuredRank: 0,
    actionLabel: "Set direction",
    actionNote: "Open slot",
    theme: {
      accent: "#A78BFA",
      accent2: "#60A5FA",
      glow: "rgba(167, 139, 250, 0.20)",
      panel: "rgba(167, 139, 250, 0.10)",
    },
    summary:
      "The next project will come from a real problem, not a random trend.",
    problem:
      "The lab needs a repeatable way to choose concepts that actually matter.",
    insight:
      "The strongest ideas come from observed friction, not generated novelty.",
    solution:
      "A problem-led selection process that starts with research and ends with a shippable artifact.",
    outcome:
      "The lab stays relevant, credible, and useful.",
    journey: [
      "Start with real signal.",
      "Shape the problem around a specific user.",
      "Propose a buildable response.",
      "Turn the idea into a launchable artifact.",
    ],
    capabilities: [
      {
        title: "Problem intake",
        note: "Keep the lab anchored in real friction and actual use cases.",
      },
      {
        title: "Research notes",
        note: "Capture the signal before the design starts.",
      },
      {
        title: "Concept brief",
        note: "Turn the problem into a focused plan.",
      },
      {
        title: "Prototype plan",
        note: "Move from insight to something that can be built.",
      },
    ],
    gallery: [
      { title: "Signal", note: "What is actually happening?" },
      { title: "Insight", note: "Why does this matter now?" },
      { title: "Plan", note: "What would solve it?" },
      { title: "Build", note: "What becomes the artifact?" },
    ],
  },
};

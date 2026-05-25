# Build Plan: ScribeCheck Review

1. Add ScribeCheck Review as a draft PR project in `projects-data.js`.
2. Add the supporting autonomous cycle pack under `automation/cycles/2026-05-25-scribecheck-review`.
3. Fix homepage data loading so the project grid has access to `window.LAB_PROJECTS`.
4. Fix preview glow variables in `app.js` so cards render without runtime errors.
5. Push a feature branch and create a PR for approval.
6. Deploy only after PR approval and explicit deploy signal.

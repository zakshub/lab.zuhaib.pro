# Deployment

Target:

- `https://lab.zuhaib.pro/`

Server root:

- `/var/www/lab.zuhaib.pro`

Server access:

- host: `187.77.207.96`
- user: `root`

## Workflow

1. Work locally in this repo.
2. Push approved changes to GitHub.
3. Review the change list like a PR.
4. Only after an explicit deploy signal, sync the approved files to the VPS.
5. Verify the live site only on `lab.zuhaib.pro`.

## Files deployed

- `index.html`
- `styles.css`
- `app.js`
- `project.html`
- `project.js`
- `projects-data.js`

## Local deploy helper

Run the deploy script from the repo root:

```powershell
.\scripts\deploy.ps1
```

The script copies only the site files to `/var/www/lab.zuhaib.pro`.

## Safety rule

Do not deploy anywhere else.


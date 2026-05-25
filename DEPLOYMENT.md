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
- `assets/`

## Local deploy helper

Run the deploy script from the repo root:

```powershell
.\scripts\deploy.ps1
```

The script copies only the site files to `/var/www/lab.zuhaib.pro`.

## Safety rule

Do not deploy anywhere else.
## GitHub Actions auto-deploy

The repo now includes `.github/workflows/deploy-lab.yml`.

It deploys only when approved changes land on `main`.

Required GitHub repository secrets:

- `LAB_VPS_HOST`: VPS host, for example `187.77.207.96`
- `LAB_VPS_USER`: SSH user, usually `root`
- `LAB_VPS_SSH_KEY`: private SSH key allowed to write to the deploy path
- `LAB_VPS_DEPLOY_PATH`: optional, defaults to `/var/www/lab.zuhaib.pro`

Approval flow:

1. AI opens a PR.
2. Zuhaib reviews and merges the PR.
3. GitHub Actions deploys the approved `main` branch to `lab.zuhaib.pro`.

Do not add secrets to source code.

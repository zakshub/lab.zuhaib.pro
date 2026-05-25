param(
  [string]$Server = "187.77.207.96",
  [string]$User = "root",
  [string]$DeployPath = "/var/www/lab.zuhaib.pro"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$files = @(
  "index.html",
  "styles.css",
  "app.js",
  "project.html",
  "project.js",
  "projects-data.js"
)

$remote = "$User@$Server:$DeployPath/"

Write-Host "Deploying to $remote" -ForegroundColor Cyan

foreach ($file in $files) {
  $source = Join-Path $repoRoot $file
  if (-not (Test-Path $source)) {
    throw "Missing file: $source"
  }

  Write-Host "Copying $file..." -ForegroundColor Gray
  & scp -o BatchMode=yes $source $remote
  if ($LASTEXITCODE -ne 0) {
    throw "Failed to copy $file"
  }
}

Write-Host "Fixing ownership and confirming files on the VPS..." -ForegroundColor Cyan
& ssh -o BatchMode=yes "$User@$Server" "chown -R www-data:www-data '$DeployPath' && ls -la '$DeployPath'"
if ($LASTEXITCODE -ne 0) {
  throw "Post-deploy verification failed"
}

Write-Host "Deploy complete." -ForegroundColor Green


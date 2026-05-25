param(
  [string]$Title = 'Weekly Lab Cycle',
  [string]$Focus = 'problem-led build',
  [string]$Audience = 'Zuhaib Akram',
  [string]$Problem = 'Capture one real problem before design starts.',
  [string]$Evidence = 'Research notes, observed friction, and one clear user need.'
)

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$automationRoot = Join-Path $repoRoot 'automation'
$cyclesRoot = Join-Path $automationRoot 'cycles'

function ConvertTo-Slug {
  param([string]$Value)

  $slug = $Value.ToLowerInvariant()
  $slug = [regex]::Replace($slug, '[^a-z0-9]+', '-')
  $slug = $slug.Trim('-')

  if ([string]::IsNullOrWhiteSpace($slug)) {
    return 'cycle'
  }

  return $slug
}

$stamp = Get-Date -Format 'yyyy-MM-dd'
$slug = ConvertTo-Slug $Title
$cycleName = "$stamp-$slug"
$cycleDir = Join-Path $cyclesRoot $cycleName

New-Item -ItemType Directory -Force -Path $cycleDir | Out-Null

$brief = @"
# Cycle Brief

- Date: $stamp
- Title: $Title
- Focus: $Focus
- Audience: $Audience
- Problem: $Problem
- Evidence: $Evidence

## Questions to answer

- What real friction exists?
- Why now?
- What is the smallest useful artifact?
- What would make this worth publishing on lab.zuhaib.pro?

## Approval gate

- Human review required before publish.
- No deploy without explicit approval.
"@

$research = @"
# Research Notes

- Gather real signal from the user, the workflow, or the target community.
- Summarize the problem in plain language.
- Note any competing tools or existing patterns.
- Capture what is still unknown.
"@

$decisionLog = @"
# Decision Log

- Problem chosen:
- User chosen:
- Why this problem now:
- What AI should draft:
- What Zuhaib must approve:
- What will be published:
"@

$buildPlan = @"
# Build Plan

1. Turn the problem into a short brief.
2. Draft the page structure and copy.
3. Generate at least one high-fidelity UI reference.
4. Shape the visual direction.
5. Review the artifact.
6. Push only after approval.
"@

$review = @"
# Review Pack

- Is the problem real?
- Is the user specific enough?
- Is the output useful?
- Is there a high-fidelity UI reference?
- Does it fit the lab's standard?
- Is it ready for lab.zuhaib.pro only?
"@

Set-Content -Path (Join-Path $cycleDir 'brief.md') -Value $brief -Encoding utf8
Set-Content -Path (Join-Path $cycleDir 'research.md') -Value $research -Encoding utf8
Set-Content -Path (Join-Path $cycleDir 'decision-log.md') -Value $decisionLog -Encoding utf8
Set-Content -Path (Join-Path $cycleDir 'build-plan.md') -Value $buildPlan -Encoding utf8
Set-Content -Path (Join-Path $cycleDir 'review.md') -Value $review -Encoding utf8

Write-Host "Created lab cycle scaffold at $cycleDir" -ForegroundColor Green

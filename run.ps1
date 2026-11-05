param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$Command
)

$ErrorActionPreference = "Stop"
$imageName = "riveredge-dev"
$containerFile = ".devcontainer/Containerfile"

# Ensure image exists
$imageCheck = podman images -q $imageName
if (-not $imageCheck) {
    Write-Host "Building dev container image ($imageName)..." -ForegroundColor Cyan
    podman build -t $imageName -f $containerFile .devcontainer
}

$mount = "${PWD}:/workspace:Z"

if ($Command.Count -gt 0) {
    podman run --rm --userns=keep-id -p 4321:4321 -v $mount $imageName @Command
} else {
    Write-Host "Starting interactive shell in container (/workspace)..." -ForegroundColor Green
    podman run --rm -it --userns=keep-id -p 4321:4321 -v $mount $imageName /bin/bash
}

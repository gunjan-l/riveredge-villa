# Dev Container Environment (Podman)

Zero host dependencies. All tools (Node.js 22 LTS, npm, git, Astro dev server) run isolated inside container via Podman.

## Architecture

- **Engine**: Podman
- **Base image**: `node:22-bookworm-slim`
- **Config**: `.devcontainer/devcontainer.json`
- **Containerfile**: `.devcontainer/Containerfile`
- **Exposed Port**: `4321` (Astro dev server)
- **User**: `node` (UID 1000) with passwordless `sudo`
- **Mount**: `${localWorkspaceFolder} -> /workspace:Z`
- **Podman Flags**:
  - `--userns=keep-id`: Maps container user to host UID to preserve file permissions on Windows/Linux.
  - `--security-opt label=disable`: Disables SELinux label isolation preventing volume access conflicts.

## Usage

### 1. VS Code Dev Containers (Recommended)

1. Install **Dev Containers** extension in VS Code.
2. In VS Code settings, set:
   ```json
   "dev.containers.dockerPath": "podman"
   ```
3. Open project folder in VS Code.
4. Press `F1` -> **Dev Containers: Reopen in Container**.

### 2. Command Line (Windows PowerShell)

Use `run.ps1` helper without opening VS Code:

```powershell
# Open interactive shell in container
.\run.ps1

# Run npm commands inside container
.\run.ps1 npm install
.\run.ps1 npm run dev
.\run.ps1 npm run build

# Run git commands inside container
.\run.ps1 git status
```

### 3. Command Line (Linux / macOS / WSL)

Use `run.sh` helper:

```bash
# Make executable
chmod +x run.sh

# Open interactive shell
./run.sh

# Run arbitrary command
./run.sh npm run dev
```

## Port Forwarding

When running dev server (`npm run dev`), visit `http://localhost:4321` on host browser. Port 4321 forwarded automatically.

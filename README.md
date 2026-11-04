# Riveredge Villa

Direct booking landing website for Riveredge Villa. Designed to capture guests discovering property via Airbnb and searching Google, converting them directly to WhatsApp inquiries with zero platform fees.

## Tech Stack

- **Framework**: Astro + Tailwind CSS
- **Deployment**: Static build (Vercel / Cloudflare Pages)
- **Environment**: Podman Dev Container (zero host dependencies)

## Development Setup (Podman)

Zero host runtime required. Everything executes inside Podman container.

### Option A: VS Code Dev Containers

1. Install **Dev Containers** extension in VS Code.
2. Configure VS Code setting: `"dev.containers.dockerPath": "podman"`.
3. Open folder → Select **"Reopen in Container"**.

### Option B: Terminal CLI (Windows PowerShell)

```powershell
# Interactive container shell
.\run.ps1

# Run npm / dev server
.\run.ps1 npm install
.\run.ps1 npm run dev
```

### Option C: Terminal CLI (Linux / macOS / WSL)

```bash
chmod +x run.sh
./run.sh npm install
./run.sh npm run dev
```

Access local dev server at `http://localhost:4321`.

## Documentation

- `docs/devcontainer.md`: Detailed dev container specification and troubleshooting.
- `.scratch/riveredge-villa-landing/spec.md`: Product & technical specification.
- `docs/agents/`: Agent skill conventions and domain doc layout.

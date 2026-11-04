#!/usr/bin/env bash
set -e

IMAGE_NAME="riveredge-dev"
CONTAINER_FILE=".devcontainer/Containerfile"

if [ -z "$(podman images -q "$IMAGE_NAME" 2>/dev/null)" ]; then
    echo "Building dev container image ($IMAGE_NAME)..."
    podman build -t "$IMAGE_NAME" -f "$CONTAINER_FILE" .devcontainer
fi

MOUNT="$(pwd):/workspace:Z"

if [ "$#" -gt 0 ]; then
    podman run --rm -it --userns=keep-id -p 4321:4321 -v "$MOUNT" "$IMAGE_NAME" "$@"
else
    echo "Starting interactive shell in container (/workspace)..."
    podman run --rm -it --userns=keep-id -p 4321:4321 -v "$MOUNT" "$IMAGE_NAME" /bin/bash
fi

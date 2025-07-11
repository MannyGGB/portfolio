#! /usr/bin/bash

# Function to change branch to main

current_branch="$(git branch --show-current)"

back_to_main() {
  if [ "$current_branch" != "main" ]; then
    git checkout "main"
  else
    echo "You are in the main branch already"
    git pull origin "main"
    exit 0
  fi
}

# Function to pull to main

pull() {
  git pull origin "main"
  exit 0
}

# Main script logic
echo "Executing script to automate Git actions..."

# Ensure the current directory is a Git repository
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: Current directory is not a Git repository."
  exit 1
fi

# Check if you are in a branch or main
back_to_main

# Perform the pull
pull

echo "Your main branch is up to date now!"



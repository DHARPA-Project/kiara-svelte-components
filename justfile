# List all the things you can do with this justfile, with descriptions
help:
  @just --list

# Run the project for local development
dev:
    npm run dev

# Install all project dependencies
setup:
    node --version
    npm --version
    npm install
    npx playwright install

# Update all project dependencies
update-deps:
    npm update

# Build the package and the demo site
build:
    npm run build

# Build and validate the package only
package:
    npm run build

alias fmt := format
# Run the code formatter
format:
    npm run format

# Run static analysis on the code
lint: format
    npm run lint
    npm run check

# Run all the tests
test:
    npm run test
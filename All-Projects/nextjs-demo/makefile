.PHONY: dev install build start test clean

# Start development server
dev:
	./node_modules/.bin/next dev

# Install dependencies
install:
	npm install

# Build for production
build:
	./node_modules/.bin/next build

# Start production server
start:
	./node_modules/.bin/next start

# Run tests (if configured)
test:
	npm run test

# Clean node_modules and build artifacts
clean:
	rm -rf node_modules .next

# Install and start
dev-fresh: install dev

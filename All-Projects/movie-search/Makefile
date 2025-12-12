.PHONY: dev install build test clean

# Start development server
dev:
	./node_modules/.bin/react-scripts start

# Install dependencies
install:
	npm install

# Build for production
build:
	./node_modules/.bin/react-scripts build

# Run tests
test:
	./node_modules/.bin/react-scripts test

# Clean node_modules and build artifacts
clean:
	rm -rf node_modules build

# Install and start
dev-fresh: install dev

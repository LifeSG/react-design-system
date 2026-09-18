# Use a Node.js base image with Playwright
FROM mcr.microsoft.com/playwright:v1.58.2-noble

# Set working directory inside the container
WORKDIR /home/pwuser
CMD ["npx", "-y", "playwright@1.58.2", "run-server", "--port", "3010", "--host", "0.0.0.0"]

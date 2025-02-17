# FROM node:16-alpine
FROM node:lts-alpine


# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install --no-frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the TypeScript project
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the application
CMD ["pnpm", "start"]
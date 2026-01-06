# Use official Node.js LTS (Alpine) as the base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first for caching
COPY package*.json ./

# Install all dependencies (prod + dev)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Remove devDependencies, keep only production
RUN npm prune --production

# Expose port 3000 (or the one your app uses)
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]

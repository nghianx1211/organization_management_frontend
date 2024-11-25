# Stage 1: Build the React app
FROM node:14 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# # Step 2: Set up Nginx to serve the React app
FROM nginx:alpine

# # Copy the built React app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]

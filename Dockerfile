# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app
RUN npm run build

# Expose the port that the app runs on
EXPOSE 5173

# Command to run the app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
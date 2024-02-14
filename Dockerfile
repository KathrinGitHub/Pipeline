# Use node version
FROM node:18

# Set working directory
WORKDIR /usr/src/app/pipeline

# Copy dependencies to working directory
COPY package*.json ./

# Copy code to working directory
COPY . .

# Export Port
EXPOSE 3000

# Defines the commands
CMD ["npm", "start"]
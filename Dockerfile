# Verwende ein offizielles Node.js-Image als Basis
FROM node:18

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app/pipeline

# Kopiere die Abhängigkeitsdefinitionen ins Arbeitsverzeichnis
COPY package*.json ./

# Kopiere den Rest des Codes ins Arbeitsverzeichnis
COPY . .

# Exponiere den Port, auf dem die Anwendung läuft
EXPOSE 3000

# Definiere den Befehl, um die Anwendung auszuführen
CMD ["npm", "start"]
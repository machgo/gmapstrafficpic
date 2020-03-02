FROM alekzonder/puppeteer:latest
ADD package.json /app
RUN npm install
ADD . /app

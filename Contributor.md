## Manual installation
 - Install node.js locally.()
 - clone the repo
 - Install depedencies (npm install)
 - start the DB locally
        - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
        -- Go to neon.tech and get yourself a new DB
 -  Change the .env file and update your DB credentials
 - npx prisma migrate
 - npx prisma generate
 - npm run build
 - npm run start

 ## docker installation

 - Install docker
 - start postgres
   - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
 - build the image - docker build -t user-project .
 - start the image - docker run -p 3000:3000 user-project

 ## docker compose installation steps
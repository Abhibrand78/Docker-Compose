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
 - Create a network -docker network create user_project
 - start postgres
   - `docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
 - build the image - `docker build  --network=host -t user_project .`
 - start the image - `docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network user_project -p 3000:3000 user_project`



 ## docker compose installation steps

  - Install docker, docker-compose
  - Run `docker-compose up`
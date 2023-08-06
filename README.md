# simple-backend-crud-js

### Instructions to install and run the project
1.  Clone the project using following command
    ```git
    git clone https://github.com/shasidhar-kanchu/simple-backend-crud-js.git
    ```
    
2.  Install all the dependencies using following command in the project root
    ```bash
    npm install
    ```
    
3.  Create a local Postgres Database for the project.
4.  Create a file with the name **.env** in the project root
5.  Check the **.envsample** file in the project root and copy all variables to **.env**.
6.  Now modify the DATABASE_URL variable and replace the USERNAME,PASSWORD and DATABASENAME with your own postgres credentials to connect the Prisma ORM to the database.
7.  Run the following command to create the tables in the database from the prisma schema.
    ```bash
    npx prisma db push
    ```
    
8.  Now run the following command to run the server.
    ```bash
    npm run dev
    ```
    
9.  if you see "Listening on port 8000" in the terminal then server must be up and running. Now the API can be tested.

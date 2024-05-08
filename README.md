                                                           Express js NODE JS framework
                                                           -----------------------------

      steps to build express server
            1.create a folder for server
            2.create package.json file :npm init -y
            3.update scripts in package.json file as "start":"node index.js" insted of test.
            4.install external packages to build server 
               -express.cors,dotenv
               -npm i express cors dotenv
            5.create .gitignore file                                     
                                             ---------------------
                                               MONGODB -DATABASE
                                             ---------------------

      -Database are used to store and manipulate data permanently
      -NOSQL databse :structureless DB
      -Data stored as document
         -document is similar as json
         -_id: every document has unique id
      -Collection: collection of documents
      -multiple collections be hold in single db
      - common Commands is monodb 
        -show databases : display all db
        -show db-name : shift control to specific db
        -show collections : display all collections in a db
        -collection-name,find() : to display all documents in a collection
        -collection-name,findOne({key:value}) : to display single document which is in the collection
        -collection-name,insertOne({key:value}): to add single document in a collection
        -collection-name.insertMany([{key:value}]) : to add multiple documents in a collection
        -count() : display total count of items in a collection
        -Querying statements
             -$exists
             -$gt/gte/lt/lte
             -$nin
             -$regex



                                      ------------------
                                       MONGOOSE - ODM() 
                                      -------------------            

         -1.install mangoose:npm i mongoose
         -2.connect db with nodejs
             -create a DB folder for defining db connection and create connection js file
             -import mangoose
             -connect db  via mangoose
             -schema : structure of data / document tobe stored in db
                    -create object for mongoose.schema class
                    -schema types
               -Model: collection of documents
                   -mongoose.model(model-name,schema)
                   -node  app will communicated with model instead of mongodb directly



                                          --------------------------------------------
                                             JWT  - json web Tocken(Authorization)
                                          --------------------------------------------                  

      1.install jwt: npm i jsonwebtocken
      2.import library where you want to use
      3.  

 note:
    middlewre: it is a function used to resolve task befor resolving the client request
     ---Types of Middleware
          Application Specific middlewre : middleware become active  whenever a client request recived by the server

         Router specific middleware : middleware active only router     
                   


                                    --------------------------
                                    MULTER - Node js middleware
                                   ---------------------------
         1.used handle mulipart/form-data  which is primarily used for uploading files in node js
         2.install multer: npm i multer
         3.Multer adds a 'body' object and a 'file' or 'files' object to the 'request' object.
         4.The body object contains the value of the text fields of thr form
         5.file or files object contains the files    

                               Context API : share data using context b/w  any component in react

                               -------------------------------------------------------------------
         -create context
         -create context using 
         -provide context to entire react app
         -access context using Hook in component



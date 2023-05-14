# Tambula-Tickit-API-Unibit
 
## Problem Statement 
1. Create Login API
2. Create Tambula ticket Create API*(No of tickets will be variable not a fixed number).Return a Unique id on the   Creation of the ticket.
3. Create a Tambula ticket fetch API to fetch all the ticket lists associated with the Respective ID with pagination.
4. Tambula Ticket Generator Rules:
    1. The numbers 1 to 90 are used once only.
    2. In the first column are the numbers 1 to 9, the second column has numbers 10 to 19, etc, all the way to the 9th column which has numbers 80 to 90 in it.
    3. Every row must have exactly 5 numbers in it.
    4. In a specific column, numbers must be arranged in ascending order from top to bottom.
    5. All the numbers 1 to 90 are used only once in each set of 6 tickets.
    6. Each column must have at least 1 number
    7. Blank Cell fill by zero or “x”

## Functionality 

1. sign in and sign up using jwt
2. Create Tambula ticket
3. View Specific ticket
4. View all ticket with pagination and normal
5. Delete ticket

## Tools
1. Node Js v-16.18.0
2. Express Js
3. Mongodb atlas
4. Mongoose
5. jsonwebtoken (genrate jwt)
6. passport-jwt (authentication)
7. tambola-generator (genrate ticket)


## Setup in Local System

1. git clone "https://github.com/tush8788/tambula-ticket-api-unibit"
2. open command prompt and Type 'npm install' for download all dependencies
3. then just "npm start"/ if npm start is not work just run this command 'node index.js'
4. then go localhost:8000

# This Site is Hosted on render 
1. 


## How to send authentication req
1. open postman or any other tool, and click any http req (like get,post,put,delete)
2. first login and copy jsonwebtoken token
3. go inside header 
4. filds :- Authorization and inside value paste token after Bearer keyword 
5. (like :- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyMWFj.0QVbonXvY) 


## API urls for users 
1. create new user
    1. post req :- http://127.0.0.1:8000/v1/user/create
    2. filds :- email, password, confirmpassword

2. login user
    1. post req :- http://127.0.0.1:8000/v1/user/create-session
    2. filds :- email, password

3. Create Tambula Ticket [authentication needed]
    1. get req :- http://127.0.0.1:8000/v1/tambula/create?count=4 <--how many tocken you want
    
4. View specific ticket [authentication needed]
    1. put req :-http://127.0.0.1:8000/v1/tambula/6460d43f062bf8044fc977b4 <-- Ticket id

5. View All tickets [authentication needed]
    1. get req :- http://127.0.0.1:8000/v1/tambula/
    

6. View all tickets with pagination [authentication needed]
  2. get req :- http://127.0.0.1:8000/v1/tambula/?page=1&limit=3 <-- Pagination

8. delete ticket [authentication needed]
    1. delete req :- http://127.0.0.1:8000/v1/tambula/6460d2f26af6201e7cbc7c6e <--Ticket id</b>

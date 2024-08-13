To run the project in local use the below command
-> node app.js

Testing API using postmon
1.Register - username,password,role should be provided in the body in json format .
2.Login - username,password should be provided in the body upon clicking the send button we will receive a token as response which will be used for authentication.
3. User operations
   3.1 To see all the books in the inventory - [GET] http://localhost:5000/user/books
   3.2 To borrow a  book in the inventory - [POST] http://localhost:5000/user/book/bookid/borrow
4. Admin operations
   4.1 To create a book - [POST] http://localhost:5000/admin/book
   4.2 To retrieve a book - [GET] http://localhost:5000/admin/book/bookid
   4.3 To update a book - [PUT] http://localhost:5000/admin/book/bookid
   4.4 To delete a book - [DELETE] http://localhost:5000/admin/book/bookid
   

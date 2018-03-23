<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
- Middleware are functions that can be plugged into other functions to make the code more readable and clean.
- Sessions allow applications to store data for different requests.
- bcrypt is a password hashing function which used to store passwords on the server. 
- JWT stands for JSON web token. It contains 3 parts separated by a "." - Header, Payload and Signature - each part Base64 encoded. Signature contains the header and the payload plus "secret". JWTs are used for authentication and information exchange. 

2.  What does bcrypt do in order to prevent attacks?
- bcrypt hashes and compares hashed passwords. bcrypt also limits the number of hashes per second by taking the salt parameter as a number.

3.  What are the three parts of the JSON Web Token?
- Header, Payload and Signature.
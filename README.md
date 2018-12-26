![enter image description here](http://res.cloudinary.com/cristianqr22/image/upload/v1545791339/blue-logo_adp67s.png)

This project was generated with NodeJS

# Run Server

Run `npm start` for start server, by default up in `http://localhost:5000/`.

# Authorization
The api to authorize your requests uses JWT as standard for user login to the system

## Request login
- Method: POST
- Url: `http://localhost:5000/users/login` 
- RequestBody: `{email: 'email@emailtest.co', password: 'secret'}` 

## Response login
`{token: '(example)eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDU2ODAwNDl9.Nfu8gt1tSmTYUxXjZ5F6vI1zt5JZH_a6GkUqfwlrGvE'}` 

## Request info user
- Method: GET
- Url: `http://localhost:5000/users`
- Headers: Authorization: ${token}

## Response info user
`{id: 1, email: 'adminuser@gmail.com', name: 'Cristian', role: 'ADMIN'` 
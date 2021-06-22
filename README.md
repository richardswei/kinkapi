# Kink Shoots API

### Getting Started
Run the app with the following commands
```sh
npm start
```
Run the tests with the following commands
```sh
npm test
```
### Available endpoints

ping the server</br>
GET `localhost:3000/ping`

get specific shoot</br>
GET `localhost:3000/api/v1/shoots/{id}`

get all comments</br>
GET `localhost:3000/api/v1/shoots/{id}/comments`

post a shoot</br>
POST `localhost:3000/api/v1/shoots/`
```
payload
{shoot_title Awesome shoot}
```
post a comment (the shoot must already exist & comments can only contain latin characters and the following punctuation ! , .)</br>
POST `localhost:3000/api/v1/comments`

```
payload
{
    "shootId": 1,
    "comment": "Nice!"
}
```

### NOTES
- I didn't really have time to write adequate tests. I have some positive tests but I'm really lacking the negative checks for should fail
- Normally I'd also go back and break up the api/data/data_access_service.js into their own services for the purposes of separations of concerns
- The same goes for the routes in api/routes/base.js

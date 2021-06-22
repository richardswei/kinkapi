# Kink Shoots API

### Getting Started
Run the app with the following commands
```sh
cd kinkapi
npm start
```

### Available endpoints

ping the server
GET `localhost3000ping`

get specific shoot
GET `localhost3000apiv1shoots{id}`

get all comments
GET `localhost3000apiv1shoots{id}comments`

post a shoot
POST `localhost3000apiv1shoots`
```
payload
{shoot_title Awesome shoot}
```
post a comment (the shoot must already exist & comments can only contain latin characters and the following punctuation ! , .)
POST `localhost3000apiv1comments`

```
payload
{
    shootId 1,
    comment Nice!
}
```

### NOTES
- I didn't really have time to write adequate tests. I have some positive tests but I'm really lacking the negative checks for should fail

- Normally I'd also go back and break up the apidatadata_access_service.js into their own services for the purposes of separations of concerns

- The same goes for the routes in apiroutesbase.js
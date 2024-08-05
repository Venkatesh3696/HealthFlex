# The Twitter post api

this is an assignment given by company Halth Flex.
as apart of hiring program

you can access this Api from [this](https://healthflex.onrender.com/) link

## Installation

Use the package manager Npm to install dependencies.

```bash
npm install
```

## Start
```bash
npm start
```

## Usage
You can use the API by sending a Appropriate request to the following endpoints:

## Endpoints

app.post('/api/users/register', registerController)
app.post('/api/users/login', loginController)

app.use('/api/users', userRouter)

app.use('/api/tweets', tweetRouter)

app.use('/api/users/:user_id/timeline', timelineRouter)

### Get all users Endpoint
*   **Method:** POST
*   **path:** https://healthflex.onrender.com/api/users/register
### login Endpoint
*   **Method:** POST
*   **path:** https://healthflex.onrender.com/api/users/login users 
### Register Endpoint
*   **Method:** GET
*   **path:** https://healthflex.onrender.com/api/users
*  It is added to know whata are the user id's that are present in our Database


### Post Tweet Endpoint
*   **Method:**  POST
*   **path:** https://healthflex.onrender.com/api/tweets
*    It is added to know what are the user id's that are present in our Database in order to check tweets of ids.
*  we need jwt token which is sent in response after successful login in order to post a tweet
  
  
### Get Tweets by userid Endpoint
*   **Method:** GET
*   **path:** https://healthflex.onrender.com/api/users/:user_id/timeline
*   you can get the tweets posted by an user by replacing the :user_id with actual userid of an user whom tweets to be seen.
  
    

## License

[MIT](https://choosealicense.com/licenses/mit/)
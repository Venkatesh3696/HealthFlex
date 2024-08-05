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

## user credentials 
* the following are the some user credentials to login
* email : 
* * user@gmail.com
* * user1@gmail.com
* * user2@gmail.com
* passwords are set same for all accounts 😊
* password : 12345

### Register user Endpoint
*   **Method:** GET
*   **path:** https://healthflex.onrender.com/api/users/register
### login Endpoint
*   **Method:** POST
*   **path:** https://healthflex.onrender.com/api/users/login
*  **body:** 
*  ```json
    "email": "user@gmail.com",
    "password": "12345"
    ```


  
### List users Endpoint
*   **Method:** GET
*   **path:** https://healthflex.onrender.com/api/users
*  It is added to know what are the user id's that are present in our Database


### Post Tweet Endpoint
*   **Method:**  POST
*   **path:** https://healthflex.onrender.com/api/tweets
*   **Authorization:** 
*    It is added to know what are the user id's that are present in our Database in order to check tweets of ids.
*  we need jwt token which is sent in response after successful login in order to post a tweet
  
  
### Get Tweets by userid Endpoint
*   **Method:** GET
*   **path:** https://healthflex.onrender.com/api/users/:user_id/timeline
*   you can get the tweets posted by an user by replacing the :user_id with actual userid of an user whom tweets to be seen.
  
    

## License

[MIT](https://choosealicense.com/licenses/mit/)
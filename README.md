# One-To-One messenger clone Api with authentication service
## Backend API with mongodb , nodejs , expressjs , multer , jwt

This backend api is used for messenger clone and it has authentication flow, for signup you need:
1.phoneNumber
2.pass & confirmPass
3.name
4.profile pic (its not required)
and also have otp and confirmation code after signing up and you can enable or disable otp in the account setting (2 endpoints for them)
and sending confirmation code or otp code is not initialized (it needs thirdparty package) but otp code and confirmation code are sent back to the client for test and deployment.
it has password reseting (which sending reset token via email or phone number is not initialized yet)

***socket io is not initialized yet because of not having a frontent client!***

## Features

- Login and sign up page
- password reseting (for now without sending the link email)
- error handling with next middleware
- Restful
- timestamps
- has Converstation and Message models
- upload images

## Tech

Dillinger uses a number of open source projects to work properly:

- [Nodejs] for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Mongodb] - atlas for db
- [Multer] - uploading pics
- [JWT] - tokens

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

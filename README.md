# YelpCamp
Fullstack web app (MongoDB, Express, NodeJS) providing a persistent platform for browsing, creating and managing campgrounds and comments.

## Features

* Authentication:
  
  * User login with username and password


* Authorization:

  * One cannot manage posts and view user profile without being authenticated

  * One cannot edit or delete posts and comments created by other users


* Manage campground posts with basic functionalities:

  * Create, edit and delete posts and comments

  * Upload campground photos


* Flash messages responding to users' interaction with the app

* Responsive web design

### Custom Enhancements

* Update campground photos when editing campgrounds

 
## Getting Started

> This app contains API secrets and passwords that have been hidden deliberately, so the app cannot be run with its features on your local machine. However, feel free to clone this repository if necessary.
> Also note that the MongoDB Atlas connection string has not been hidden for the sake of project authenticity. Please make sure to edit the MongoDB Atlas connection string in the ./.env file and put your own otherwise you risk losing functionality. The Cluster only contains 500MB as it is a test cluster.


### Install dependencies

```sh
npm install
```


## Built with

### Front-end

* [ejs](http://ejs.co/)
* [Bootstrap](https://getbootstrap.com/docs/3.3/)

### Back-end

* [express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)
* [async](http://caolan.github.io/async/)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [express-session](https://github.com/expressjs/session#express-session)
* [method-override](https://github.com/expressjs/method-override#method-override)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)


## License

#### [MIT](./LICENSE)

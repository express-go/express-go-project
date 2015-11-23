# express-go-project #
[Express-go](https://github.com/express-go/express-go/) based framework sample project.

#### Under construction, LTS package is expected at the end of December 2015. ####

### What is this repository for? ###
* [.env file support](https://www.npmjs.com/package/dotenv)
* CLI - Command-line interface
* MVC - Model-View-Controller support and structure
* WWW - Web service support (HTTP, HTTPS, SPDY, Socket.io)


### Framework support ###
Please, see the [express-go](https://github.com/express-go/express-go/) framework engine page.

### Gulp support ###
* Stylesheets
    * Cascading Style Sheets (.css)
    * LESS (.less)
    * SASS (.scss)
* Scripts  
    * JavaScripts (.js)
    * TypeScripts (.ts)
* Fonts
    *  TrueType (.ttf) 
    *  Converting to compressed webfonts (eot, .svg, .ttf, .woff, .woff2)
    *  Generating stylesheets (.css) for converted fonts
* Versioning 


### How do I get set up? ###
* System Dependencies

```
$ apt-get install node
$ apt-get install npm
$ apt-get install redis
$ apt-get install mysql
```

* Application Dependencies

```
$ npm install -g bower
```

* Installation

```
$ git clone https://bitbucket.org/sipimokus/gamvc.git
$ cd gamvc
$ npm install
> Copy .env.example settings to .env? [Y]: y
> Generating SECRET key for .env settings? [Y]: y
```

* Configuration

Edit your ".env" file.

* How to run tests

Noway.


### START ###
* Application

```
$ npm start
```
or
```
$ node ./bin/www
```

* Command-line

```
$ npm test
```
or
```
$ node ./bin/cli
```

* Site

Open in your browser:
http://localhost/ or https://localhost/


### Roadmap ###
* LTS support
# express-go-project #
[![Dependency Status](https://img.shields.io/david/express-go/express-go-project.svg?label=deps)](https://david-dm.org/express-go/express-go-project)
[![devDependency Status](https://img.shields.io/david/dev/express-go/express-go-project.svg?label=devDeps)](https://david-dm.org/express-go/express-go-project#info=devDependencies)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://tldrlegal.com/license/mit-license)

[Express-go](https://github.com/express-go/express-go/) based framework sample project.

#### Under construction, LTS package is expected at the end of December 2015. ####

### What is this repository for? ###
* [.env file support](https://www.npmjs.com/package/dotenv)
* CLI - Command-line interface
* MVC - Model-View-Controller support and structure
* WWW - Web service support (HTTP, HTTPS, SPDY, Socket.io)


### How do I get set up? ###
* System Dependencies

```
$ apt-get install node
$ apt-get install npm
$ apt-get install redis
$ apt-get install mysql
```

* Installation

```
$ git clone https://github.com/express-go/express-go-project.git
$ cd express-go-project
$ npm install
> Copy .env.example settings to .env? [Y]: y
> Generating SECRET key for .env settings? [Y]: y
```

* Configuration

```
$ nano .env
```

### START ###
* Application

```
$ npm start
```

Open in your browser:
http://localhost/ or https://localhost/


* Command-line

```
$ npm run cli
```


### Framework support ###
Please, see the [express-go](https://github.com/express-go/express-go/) framework engine repository.


### Gulp support ###
Please, see the [express-go-gulp](https://github.com/express-go/express-go-gulp/) repository.


### Roadmap ###
* LTS support

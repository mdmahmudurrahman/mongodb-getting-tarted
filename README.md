## Project structure

#### Packages used

```
npm init
npm install --save mocha nodemon mongoose

```

#### Mongoose for modifying our database and mocha for testing the code
#### Mocha is a popular framework for javascript testing around the nodejs 
#### environment
#### Testing for create operation
#### Testing for read operation

### Nodemon will watch our project directory for us and in any time that any file changes,
### it will automatically re-run our test.

#### To automate the test replace the

```
 "scripts": {
    "test": "mocha"
  }

```

#### with the following

```
 "scripts": {
    "test": "nodemon --exec 'mocha -R min'"
  }

```

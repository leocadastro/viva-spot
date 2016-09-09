# Viva Challenge

## The Challenge
The legend: [Spotippo](https://github.com/VivaReal/code-challenge/blob/master/backend.md)

## Doc
- Run the project
- Access: `/docs`

## Endpoints
- Create a property: `/v1/properties` [POST]
- Get a property by Id: `/v1/properties/{id}` [GET]
- Search a property by coordinates: `/v1/properties?ax={integer}&ay={integer}&bx={integer}&by={integer}` [GET]

## Running
Configure MongoDb connection

```sh
$ cd viva-challenge
$ npm install
$ npm start
```

## Testing
```sh
$ cd viva-challenge
$ npm test
```

## Next Features
- Implement Auth with JWT on creating properties
- Implement logs
- Improve tests (mocks)
- Docker
- Implement cache

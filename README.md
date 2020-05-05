# web02
 
 Simple Web application. Contains:
- website offering urls to web services
- webservices

If invalid  webservice is requested error returned

## files
- web02.js : entry point
- router.js : url routing services

## Execute

### build docker image
- docker build -t vvatess/web02 .
- docker build -t vvatess/web02:1.0 .


### run docker image with port 8080 mapped through 8000
- docker run -p 8000:8080 -d vvatess/web02
- docker run -p 8000:8080 -d vvatess/web02:1.0

### open a browser and load url
- http://localhost:8000/ returns "Bad Request"
- http://localhost:8000/help displays service options
- http://localhost:8000/GetDate returns current date and time
- http://localhost:8000/GetAddress returns client IP address

## publish image on dockerhub
#### to push to dockerhub repository
  docker push vvatess/web02:tagname
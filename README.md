# NodeJs Cluster

A program in NodeJs to try out cluster module along with hey library for load testing.
Using this we can check how NodeJs evenly distributes network requests across the CPU cores.

In order to run this program run the below command:

```
npm start
```

This is the library for load testing:

[Hey](https://github.com/rakyll/hey)

You can run the command below to generate 1000 requests and 100 concurrent requests

```
hey -n 1000 -c 100 http://localhost:3000
```
# Which Web Framework is Faster?
> Basic out of the box Web frameworks performance comparison

There are numerous of **backend web frameworks** for different programming languages. Each of them comes with its own advantages and drawbacks. And it is not a simple task to answer the question "Which framework is the best?". But we can looks at the topic from different perspectives. And **performance** is a simple metric (yet just one of many) that is measurable and gives an answer to "which framework is faster/fastest?"

The purpose of this project is to attempt to measure a performance of different web stacks as they come out of the box, with no code added.

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Sinatra](https://img.shields.io/badge/sinatra-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)

## Results

Test was performed with ApacheBench tool performing 10k requests with concurrency level 10.
```
ab -n 10000 -c 10 http://127.0.0.1:port
```

| Framework     | Web Server   | Time taken | Requests per second | Time per request | Longest request |
| ------------- |-------------:|-----------:|--------------------:| ----------------:|----------------:|
| Express       | Node.js/http | 5.7s       | 1744.55             | 5.7 ms           | 184 ms          |
| Flask         | waitress     | 9.0s       | 1109.6              | 9.0 ms           | 130 ms          |
| Sinatra       | Puma 5.4     | 16.4s      | 608.84              | 16.4 ms          | 239 ms          |
| Django        | WSGIServer   | 21.9s      | 455.74              | 21.9 ms          | 62 ms           |
| Rails         | Puma 5.4     | 138.4s     | 72.21               | 138.4 ms         | 1171 ms          |
| Laravel       | nginx        | 378.5s     | 26.42               | 378.5 ms         | 1042 ms         |


## You can test it yourself
In order to perform tests yourself you'll need to run this project with [Docker](https://www.docker.com/), so make sure that docker app is installed on your machine.

```
git clone https://github.com/alchaplinsky/wfpc.git
cd wfpc
docker compose up
```

Perform tests>
```
ab -n 10000 -c 10 http://127.0.0.1:port
```


## License

MIT © Alex Chaplinsky

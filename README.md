# cloudcomp-node-uploader

## Deployment

```
sudo npm install -g pm2
pm2 start index.js --name node
```

## Routes

```
siege -g 'http://3.1.220.26/upload POST < 100MB.txt'
siege -g 'http://3.1.220.26/upload?name=aaa POST < 100MB.txt'
siege -g http://3.1.220.26/read?name=aaa
```

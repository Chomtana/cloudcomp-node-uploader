# cloudcomp-node-uploader

```
sudo npm install -g pm2
pm2 start index.js --name node
siege -g 'http://3.1.220.26/upload POST < 100MB.txt'
```

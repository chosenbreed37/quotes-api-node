#!/bin/bash
mkdir -p apps
cd apps
rm -rf quotes-api-node
git clone https://github.com/chosenbreed37/quotes-api-node.git
cd quotes-api-node
sudo docker rm -f quotes-api-node
docker build . --tag quotes-api-node
docker run -d --name quotes-api-node -p 3000:3000 quotes-api-node
echo "Quotes API Node running on  on port 3000..."

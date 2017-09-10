#!/usr/bin/env bash

cp default.conf.template default.conf

sed -i "" "s/___API_ENDPOINT_IP___/$API_ENDPOINT_IP/g" default.conf || sed -i "s/___API_ENDPOINT_IP___/$API_ENDPOINT_IP/g" default.conf

npm install

npm run build

docker build --no-cache=true -f Dockerfile -t registry.cn-beijing.aliyuncs.com/stardust/survey-form-ui:latest ./
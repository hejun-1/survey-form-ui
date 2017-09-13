#!/usr/bin/env bash

export ENDPOINT=http://47.93.4.184/api
export API_ENDPOINT_IP=172.17.193.65

cp default.conf.template default.conf

sed -i "" "s/___API_ENDPOINT_IP___/$API_ENDPOINT_IP/g" default.conf || sed -i "s/___API_ENDPOINT_IP___/$API_ENDPOINT_IP/g" default.conf

npm install

npm run build

docker build --no-cache=true -f Dockerfile -t registry.cn-beijing.aliyuncs.com/stardust/survey-form-ui:latest ./
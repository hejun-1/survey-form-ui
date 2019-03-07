#!/usr/bin/env bash


export API_ENDPOINT_IP=172.17.193.65

cp default.conf.template default.conf

sed -i "" "s/___API_ENDPOINT_IP___/$API_ENDPOINT_IP/g" default.conf || sed -i "s/___API_ENDPOINT_IP___/$API_ENDPOINT_IP/g" default.conf

yarn install

export ENDPOINT=http://m.renaijiance.com:81/api
export APP_ENV=admin

npm run build

cp ./dist/bundle.js ./dist/admin.bundle.js


export ENDPOINT=http://m.renaijiance.com/api
export APP_ENV=consumer

npm run build

docker build --no-cache=true -f Dockerfile -t registry.cn-hangzhou.aliyuncs.com/stardust/survey-form-ui-new:latest ./

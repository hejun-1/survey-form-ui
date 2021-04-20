#!/usr/bin/env bash

docker login --username=$DOCKER_REGISTRY_USER --password=$DOCKER_REGISTRY_PWD registry.cn-hangzhou.aliyuncs.com
docker tag registry.cn-hangzhou.aliyuncs.com/stardust/survey-form-ui-new registry.cn-hangzhou.aliyuncs.com/stardust/survey-form-ui-new:latest
docker push registry.cn-hangzhou.aliyuncs.com/stardust/survey-form-ui-new:latest

#!/bin/bash

git clone --branch $@ --single-branch https://github.com/deweppro/angular-blank.git . &&\
  rm -rf ./.git &&\
  yarn install

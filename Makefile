SHELL=/bin/bash

setup_node:
	@. ${NVM_DIR}/nvm.sh && nvm install && nvm use

install: setup_node
	yarn install --force --ignore-scripts

lint: setup_node
	yarn run lint

start: setup_node
	yarn run start

build: setup_node
	yarn run build

#!/bin/bash

clone_branch() {
    branch=$1

    cd "$(pwd)" &&\
      rm -rf ./.ftm_temp &&\
      mkdir -p ./.ftm_temp &&\
      cd ./.ftm_temp &&\
      git clone --branch "$branch" --single-branch https://github.com/osspkg/frontend-templates.git . &&\
      rm -rf ./.git &&\
      cp -rlf ./ ./../ &&\
      cd .. &&\
      rm -rf ./.ftm_temp &&\
      yarn install
}


PS3='Please choice frontend template: '
options=("Quit" "Angular@v16" "Vue@v3 SPA" "Vue@v3 MultiApp")
select opt in "${options[@]}"
do
    case $opt in
        "Angular@v16")
            clone_branch "angular_v16"
            break
            ;;
        "Vue@v3 SPA")
            clone_branch "vue_v3"
            break
            ;;
        "Vue@v3 MultiApp")
            clone_branch "vue_v3_multi_app"
            break
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
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
options=("Quit" "Angular14" "Angular15" "Vue3")
select opt in "${options[@]}"
do
    case $opt in
        "Angular14")
            clone_branch "v14"
            break
            ;;
        "Angular15")
            clone_branch "v15"
            break
            ;;
        "Vue3")
            clone_branch "vue3"
            break
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
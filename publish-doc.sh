#!/bin/bash

# Build style guide 
npx styleguidist build

# save git stash
git stash save

# checkout gh-pages branch
git checkout gh-pages

# pop git stash
git stash pop

git rm -rf !(./gh-pages|publish-doc.sh)
# move doc file
cp ./styleguide/* ./

# all all change
git add *

# git commit 
git commit -a -m "gh-pages updated `date + '%Y-%m-%d %H:%M:%S'`"

# git pull
git pull --rebase origin gh-pages

# push to the gh-pages
git push -u origin gh-pages

# checkout back to the dev branch 
git checkout -
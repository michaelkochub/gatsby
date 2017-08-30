#!/bin/zsh

# build the site to public/
cd gatsby-proj
npm run build

# move build files to temp location
mkdir ~/temp-dir
mv public/* ~/temp-dir

# switch branches 
git checkout gh-pages

# clear out files from previous build, do not delete important files
find . ! \( -name 'CNAME' -o -name '.*' -o -name 'README' \) -delete

# move build files back into project 
mv ~/temp-dir/* .

# add to staging area
git add .

# commit to staging with UTC time-stamped message
git commit -m 'commit build at $(date -u +%Y-%m-%d\ \%H:%M:%S)'

# push to trigger github pages remote build
git push

# back to normal 
git checkout master

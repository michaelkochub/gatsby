#!/bin/zsh

# rename this as you see fit, it goes in your home directory
TEMP_DIR='temp-dir'

# build the site to public/
cd gatsby-proj
npm run build

# move build files to temp location (make sure nothing valuable is there)
rm -rf ~/$TEMP_DIR
mkdir ~/$TEMP_DIR
mv public/* ~/$TEMP_DIR

# switch branches 
cd ..
git checkout gh-pages

# clear out files from old build, do not delete important files
find . -not 				\
	\( 				\ 
		-name 'CNAME' 		\  
		-o -name 'README.md' 	\ 
		-o -name '.gitignore' 	\ 
		-o -name '.git' 	\ 
	\) 				\ 
	-not -path '*.git/*' 		\ 
	-delete

# move build files back into project 
mv ~/$TEMP_DIR/* .

# add to staging area
git add .

# commit to staging with UTC time-stamped message
git commit -m "build committed at $(date -u +%Y-%m-%d\ \%H:%M:%S)"

# push to trigger github pages remote build
git push

# back to master 
git checkout master

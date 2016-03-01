#! /bin/bash
echo "deploy to xst..."
echo "deploy js..."
cp dist/js/* ../xst/src/main/webapp/assets/js
echo "deploy css..."
cp dist/css/* ../xst/src/main/webapp/assets/css
echo "deploy fonts..."
cp dist/fonts/* ../xst/src/main/webapp/assets/fonts
echo "deploy images..."
cp dist/images/* ../xst/src/main/webapp/assets/images
echo "deploy player..."
cp dist/player/* ../xst/src/main/webapp/assets/player
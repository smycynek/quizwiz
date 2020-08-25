#! /bin/bash
yarn build
rm -rf quizwiz
rm quizwiz.zip
mv build quizwiz
zip -r quizwiz.zip quizwiz
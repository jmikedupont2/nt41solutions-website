for x in src/components/*.js; do ./node_modules/.bin/babel $x -o babel/`basename $x`; done ;

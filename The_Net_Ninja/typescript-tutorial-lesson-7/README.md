## TypeScript Tutorial #7 - Better Workflow & tsconfig

https://www.youtube.com/watch?v=Y4IiQY9dNRA&list=PLzAGFfNxKFuZgoZJPAfW_DeA2guNk849V&index=7

1. Create tsconfig.json. Type in the terminal:

tsc --init

2. tsconfig.json:
   2.1 - Make this change (lin 15)
   "outDir": "./public",

2.2 - Changes:
"rootDir": "./src",

- This allow us to compile from folder "src" and output in folder "public

3. Watch all the files. Type in the terminal:
   tsc -w

4. Avoid compiling files outside the "src" folder. tsconfig.json (lin 66):

"include": ["src"]

## TypeScript Tutorial #14 - Modules

https://www.youtube.com/watch?v=EpOPR03z4Vw&list=PLzAGFfNxKFuZgoZJPAfW_DeA2guNk849V&index=14

1. Make some changes so we could work with modules. in tsconfig.ts:

"target": "es6", (line 5)

"module": "es2015", (line 6)

2. public/index.html:

<script type="module" src="app.js"></script> // We need to add "type"

3. Create the folder that will contain the module:
   src/classes

4. Create a ts file inside classes folder:
   invoice.ts

5. Cut the class function from "app.ts" and copy in "invoice.ts"

6. Export the function in invoice.ts. Just like we do in React

7. Import the function in "src/app.ts"

- It must be done with the .js extension.

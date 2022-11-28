## TypeScript Tutorial #17 - Rendering an HTML Template

https://www.youtube.com/watch?v=X-mUYxLjqLY&list=PLzAGFfNxKFuZgoZJPAfW_DeA2guNk849V&index=17

1. Create a new class. src/classes
   ListTemplate.ts

1.2 - Import "HasFormatter" (line 1)
1.3 - Create the constructor inside the class (ListTemplate). Explanation in src/classes/ListTemplate.ts

2. Render the data in the Dom. src/app.ts:

2.1 - grab the ul in the "index.html". Since we only have one "ul", it is not ncessary to grab it by id or class (line 16).
2.2 - Storage the elements in the constant "list" (line 17).
2.3 - Passing the data to ListTemplate and render in the DOM (line 29)

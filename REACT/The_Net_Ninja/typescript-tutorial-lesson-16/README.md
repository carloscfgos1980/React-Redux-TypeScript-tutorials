## TypeScript Tutorial #16 - Interfaces with Classes

https://www.youtube.com/watch?v=XPGFqx8Vg-Y&list=PLzAGFfNxKFuZgoZJPAfW_DeA2guNk849V&index=16

1. Create a new folder for the interface inside "src" folder
   interfaces

2. Create a ts file in "interfaces" folder
   HasFormatter.ts

3. Create the interface method and export it
   3.1
   export interface HasFormatter

3.2 - Specify the type of format:
format(): string;

4. Import and add the forma to the class (invoice.ts)
   4.1- Import:
   import { HasFormatter } from '../interfaces/HasFormatter.js';

4.2 Add the class
export class Invoice implements HasFormatter

5. Create a new Class. src/classes/
   Payment.ts

- We copy all the elements from "Invoice.ts", then change some changes:

* Change the name to Payment
* "recipient" instead of "client"
* Also change in the return format to adapt it to the new context
  format() {
  return`${this.recipient} is owed £${this.amount} for ${this.details}`;
  }

6. src/app.ts
   6.1 - Import the classes and the interface (line 1 - 3)

6.2

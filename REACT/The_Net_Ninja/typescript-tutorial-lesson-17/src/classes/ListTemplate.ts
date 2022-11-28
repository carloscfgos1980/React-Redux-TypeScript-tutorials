import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(private container: HTMLUListElement){} // Specify that is going to be an Ul element

  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){


    // Creating elements, just like JavaScript
    const li = document.createElement('li');
  
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

//If else check to determine the position where the text will be displayed
    if(pos === 'start'){
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
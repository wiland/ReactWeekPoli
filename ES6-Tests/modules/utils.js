export let appName = "Modules App";
export function changeTitle(newTitle) {
  appName = newTitle;
  document.title = appName;
}

export class Thing {
  constructor(name){
    this.name = name;
  }

  print() {
    return "This is a " + this.name;
  }
}

const alertMessage = "Default message: Success!!!!"
export default alertMessage;
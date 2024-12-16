import GuiWindow from "./GuiWindow";
import { create } from "./util";
export class Gui {
  root?: HTMLDivElement | HTMLElement;
  windows?: GuiWindow[];
  constructor(param: {
    root?: HTMLDivElement | HTMLElement;
    parent: HTMLElement;
  }) {
    if (param.root) this.root = param.root;
    else this.root = create("div");
    this.windows = [];
  }
  public addPane(_win: GuiWindow): void {

  }
  
}

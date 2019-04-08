export class SelectionItemElement {
  title: string;
  value: string;
};

export class DropdownOptions {
  x: number;
  y: number;
  height?: number;
  width?: number;
  content?: SelectionItemElement[];
};

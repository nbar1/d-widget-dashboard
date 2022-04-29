export type Widget = {
  name: string;
  path: string;
  componentPath: String;
};

export const availableWidgets: Widget[] = [
  {
    name: 'Wallet',
    path: 'wallet',
    componentPath: 'Wallet',
  },
  {
    name: 'Text Input',
    path: 'text-input',
    componentPath: 'TextInput',
  },
];

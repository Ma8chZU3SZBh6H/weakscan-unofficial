export class Product {
  constructor(
    public title: string,
    public description: string,
    public price: string,
    public svg: JSX.Element,
    public path: string,
    public routeTitle: string,
  ) {}
}

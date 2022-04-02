export default class Route {
  constructor(
    public svg: JSX.Element,
    public path: string,
    public title: string,
    public page: JSX.Element,
  ) {}
}

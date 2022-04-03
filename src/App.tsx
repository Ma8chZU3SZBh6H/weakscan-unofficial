import { Route, Switch } from 'wouter';
import Line from './Components/Line';
import Step from './Components/Step';
import Nav from './Components/Nav';
import Routes from './Routes';
import Cube from './Pages/Home/Components/Cube';

export default function App() {
  return (
    <div className="bg-night-blue  min-h-screen text-sky-blue  grid grid-rows-auto-1fr xl:grid-cols-auto-1fr xl:grid-rows-1 p-10 gap-10">
      <div className="grid grid-rows-auto-1fr gap-10 ">
        <Nav />

        <div className="grid relative z-30 justify-center items-center xl:grid-rows-sidebar grid-cols-sidebar xl:grid-cols-none gap-2">
          <Line />
          {Routes.map((route, index) => (
            <>
              <Step key={index + 'a'} svg={route.svg} path={route.path} />
              <Line key={index + 'b'} />
            </>
          ))}
        </div>
      </div>

      <div className="grid relative z-30 items-center justify-center overflow-hidden">
        <Switch>
          {Routes.map((route, index) => (
            <Route key={index + 'c'} path={route.path}>
              {route.page}
            </Route>
          ))}
        </Switch>
      </div>

      <Cube className="w-[50vh] h-[50vh] animate-cube-spin" />
      <Cube className="w-[60vh] h-[60vh] animate-cube-spin2" />
    </div>
  );
}

import { Route, Switch } from 'wouter';
import Home from './Pages/Home';
import Line from './Components/Line';
import Step from './Components/Step';
import HomeSVG from './Images/Home';
import LockSVG from './Images/Lock';
import VirusSVG from './Images/Virus';
import SkullSVG from './Images/Skull';
import BookSVG from './Images/Book';
import EmailSVG from './Images/Email';
import Nav from './Components/Nav';
import { Routes } from './Constants/Routes';

export default function App() {
  return (
    <div className="bg-night-blue min-h-screen text-sky-blue  grid grid-rows-auto-1fr xl:grid-cols-auto-1fr xl:grid-rows-1 p-10 gap-10">
      <div className="grid grid-rows-auto-1fr gap-10">
        <Nav />

        <div className="grid justify-center items-center xl:grid-rows-sidebar grid-cols-sidebar xl:grid-cols-none gap-2">
          <Line />
          <Step svg={<HomeSVG />} path={Routes.home} />
          <Line />
          <Step svg={<LockSVG />} path={Routes.lock} />
          <Line />
          <Step svg={<VirusSVG />} path={Routes.virus} />
          <Line />
          <Step svg={<SkullSVG />} path={Routes.skull} />
          <Line />
          <Step svg={<BookSVG />} path={Routes.book} />
          <Line />
          <Step svg={<EmailSVG />} path={Routes.book} />
          <Line />
        </div>
      </div>

      <div className="grid  items-center justify-center">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/lock">
            <div>lock</div>
          </Route>
          <Route path="/virus">
            <div>virus</div>
          </Route>
          <Route path="/skull">
            <div>skull</div>
          </Route>
          <Route path="/skull">
            <div>skull</div>
          </Route>
          <Route path="/book">
            <div>book</div>
          </Route>
          <Route path="/email">
            <div>email</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

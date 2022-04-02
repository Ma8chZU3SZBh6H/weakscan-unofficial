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
import Menu from './Images/Menu';

export default function App() {
  return (
    <div className="bg-night-blue min-h-screen text-sky-blue  grid grid-rows-auto-1fr xl:grid-cols-auto-1fr xl:grid-rows-1 p-10 gap-10">
      <div className="grid grid-rows-auto-1fr gap-10">
        <nav className="text-24px font-bold grid justify-between grid-cols-1fr-auto">
          <div>
            WEAK
            <span className="bg-light-blue text-night-blue px-1 mx-1">
              SCAN
            </span>
          </div>
          <div className="xl:hidden">
            <Menu />
          </div>
        </nav>

        <div className="grid justify-center items-center xl:grid-rows-sidebar grid-cols-sidebar xl:grid-cols-none gap-2">
          <Line />
          <Step svg={<HomeSVG />} path="/" />
          <Line />
          <Step svg={<LockSVG />} path="/lock" />
          <Line />
          <Step svg={<VirusSVG />} path="/virus" />
          <Line />
          <Step svg={<SkullSVG />} path="/skull" />
          <Line />
          <Step svg={<BookSVG />} path="/book" />
          <Line />
          <Step svg={<EmailSVG />} path="/email" />
          <Line />
        </div>
      </div>

      <div className="grid items-center justify-center">
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

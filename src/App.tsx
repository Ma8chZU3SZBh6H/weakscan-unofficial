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

export default function App() {
  return (
    <div className="bg-night-blue min-h-screen text-sky-blue  grid grid-cols-auto-1fr grid-rows-auto-1fr p-10 gap-10">
      <nav className="text-24px font-bold">
        WEAK
        <span className="bg-light-blue text-night-blue px-1 mx-1">SCAN</span>
      </nav>
      <div></div>
      <div className="grid justify-center items-center grid-rows-sidebar gap-2">
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
      <div className="grid items-center justify-center">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

import { Route, Switch } from 'wouter';
import Line from './Components/Line';
import Step from './Components/Step';
import Nav from './Components/Nav';
import Routes from './Routes';
import Cube from './Pages/Home/Components/Cube';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { Container, Engine } from 'tsparticles';

export default function App() {
  const particlesInit = async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = async (container: Container) => {
    console.log(container);
  };
  return (
    <div className="bg-night-blue  min-h-screen text-sky-blue  grid grid-rows-auto-1fr xl:grid-cols-auto-1fr xl:grid-rows-1 p-10 gap-10 overflow-hidden">
      <div className="grid grid-rows-auto-1fr gap-10 ">
        <Nav />

        <div className="grid relative z-30 justify-center items-center xl:grid-rows-sidebar grid-cols-sidebar xl:grid-cols-none gap-2">
          <Line />
          {Routes.map((route, index) => (
            <>
              <Step
                key={index + 'a22'}
                svg={route.svg}
                path={route.path}
                dynamic={true}
              />
              <Line key={index + 'b33'} />
            </>
          ))}
        </div>
      </div>

      <div className="grid relative grid-rows-1 items-center justify-center ">
        <div className="relative z-30">
          <Switch>
            {Routes.map((route, index) => (
              <Route key={index + 'ct'} path={route.path}>
                <AnimatePresence exitBeforeEnter={true}>
                  <motion.div
                    key={route.path}
                    transition={{ duration: 1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {route.page}
                  </motion.div>
                </AnimatePresence>
              </Route>
            ))}
          </Switch>
        </div>
        <Cube className="w-[50vh] h-[50vh] animate-cube-spin" />
        <Cube className="w-[60vh] h-[60vh] animate-cube-spin2" />

        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className={'opacity-25'}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 200,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  );
}

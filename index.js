'use strict';

const Cylon = require('cylon');

//Alternating lights. :)

Cylon.robot({
    connections: {
      arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
    },

    devices: {
      led1: { driver: 'led', pin: 13 },
      led2: { driver: 'led', pin: 12 },
      led3: { driver: 'led', pin: 11 },
    },

    work: function(my) {
      let light = 0;
      const lights = [my.led1, my.led2, my.led3];

      setInterval ( () => {
          lights[light].toggle();
          light++;
          if (light === 3) {
              light = 0;
          }
      }, 100);
    }

}).start();


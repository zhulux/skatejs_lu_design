import lud from '../../lud_module';
import Velocity from 'velocity-animate/velocity.min';
import 'velocity-animate/velocity.ui.min';

let def_animate = $.Velocity.RegisterEffect;
lud.velocity = Velocity;

def_animate("transition.slideRightIn", {
  defaultDuration: 800,
  calls: [
    [{opacity: [1, 0], translateX: [0, '100%'], translateZ: 0}]
  ]
});

def_animate("transition.slideRightOut", {
  defaultDuration: 800,
  calls: [
    [ { opaticy: [0,1],translateX: '100%', translateZ: 0 } ]
  ],
  reset: { translateX: 0}
});
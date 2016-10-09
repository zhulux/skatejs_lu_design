import './_index.scss';
import ludComponent from '../../lud_component';
import * as skate from 'skatejs';
import classNames from 'classnames';

class ludIcon extends ludComponent {
  static props = {
    type: skate.prop.string({attribute: true}),
  };

  static render(el){
    let iconCls = classNames({
      [`lud-icon`]: true,
      [`lud-icon--${el.type}`]: true
    });
    return(
      <i class={iconCls} aria-hidden="true" />
    )
  }
}
skate.define('lud-icon',ludIcon);
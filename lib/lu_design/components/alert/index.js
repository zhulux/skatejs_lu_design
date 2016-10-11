/*doc
 ---
 title: Alert 提示
 name: alerts
 category: 组件
 ---

 警告提示，展现需要关注的信息。

## 何时使用

 * 当某个页面需要向用户显示警告的信息时。
 * 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

 ```html_example
<lud-alert type="info">Base System Alert</lud-alert>
<lud-alert type="success" closable="true"><lud-icon type="customapps"></lud-icon>我们将在周五凌晨进行停机维护，带来不便深表歉意。</lud-alert>
<lud-alert type="warning">任何未经许可的访问，我们都将在法律允许的最大范围内追究责任。</lud-alert>
<lud-alert type="danger">我们中出了一个叛徒。</lud-alert>
 ```
 */
import './_index.scss';
import ludComponent from '../../lud_component';
import * as skate from 'skatejs';
import classNames from 'classnames';

class ludAlert extends ludComponent{
  static props = {
    type: skate.prop.string({
      attribute: true,
      default: 'info'
    }),
    closable: skate.prop.boolean({ attribute: true }),
    child: skate.prop.string()
  };

  static created(el){
    el.child = el.innerHTML;
    el.innerHTML = null
  }

  static render(el){
    let alertCls = classNames({
      ['lud-alert']: true,
      [`lud-alert--${el.type}`]: true
    });
    let $el = $(el);
    let closable = !el.closable ? null: (
      <button type="button" class="lud-alert__close" aria-label="Close" onClick={()=>{
        $el.find('div.lud-alert').slideUp('fast',()=> $el.remove())
      }}>
        <i className="lud-icon lud-icon--close"></i>
      </button>);
    let child = skate.h('span', {ref: x => (x.innerHTML = el.child), skip: true });

    return(
      <div className={alertCls} role="alert">
        {closable}
        {child}
      </div>
    )
  }
}

skate.define('lud-alert',ludAlert);
/*doc
 ---
 title: Phone Mockup
 name: phone-mockup
 category: 组件
 ---

 显示移动端预览效果。


## 代码演示

 ```html_example
 <lud-phone-mockup>
    <img src="http://a3.mzstatic.com/us/r30/Purple62/v4/25/39/23/2539239c-4bdd-b750-84dd-82f6fef81c11/screen696x696.jpeg"/>
 </lud-phone-mockup>
 ```
 */
import './_index.scss';
import ludComponent from '../../lud_component';
import * as skate from 'skatejs';

class ludPhoneMockup extends ludComponent{
  static props = {
    child: skate.prop.string()
  };

  static created(el){
    el.child = el.innerHTML;
    el.innerHTML = null
  }

  static render(el){
    let child = skate.h('div', {ref: x => (x.innerHTML = el.child), className: 'lud-phone-mockup__body', skip: true });

    return(
      <div className="lud-phone-mockup" role="alert">
        {child}
      </div>
    )
  }
}

skate.define('lud-phone-mockup',ludPhoneMockup);
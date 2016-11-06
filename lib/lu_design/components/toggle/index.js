/*doc
 ---
 title: Toggle 开关
 name: toggle
 category: 组件
 ---

 开关选择器。

## 何时使用

 * 需要表示开关状态/两种状态之间的切换时。

## 代码演示

 ```html_example
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="text-input-01">Guest Mode</label>
 <div class="lud-form-element__control">
 <lud-toggle name="guest-mode"></lud-toggle>
 </div>
 </div>

 <div class="lud-form-element">
 <label class="lud-form-element__label" for="text-input-01">Admin Mode</label>
 <div class="lud-form-element__control">
 <lud-toggle name="admin-mode" value="root" disabled></lud-toggle>
 </div>
 </div>
 ```
 */
import './_index.scss';
import ludComponent from '../../lud_component';
import * as skate from 'skatejs';
class ludToggle extends ludComponent{
  static props = {
    value: skate.prop.string({ attribute: true }),
    checked: skate.prop.boolean({ attribute: true }),
    disabled: skate.prop.boolean({ attribute: true }),
    name:  skate.prop.string({ attribute: true }),
    input_name: skate.prop.string()
  };

  static created(el) {
    el.input_name = el.name;
    el.setAttribute('name', `${el.input_name}-wrap`);
    el.addEventListener('toggle', ()=>{
      if (el.disabled) return false;
      el.checked = !el.checked;
    });
  }

  static render(el){
    //noinspection CheckTagEmptyBody
    return(<div className="lud-toggle__wrap"  onClick={() => skate.emit(el, 'toggle')}>
      <input name={el.input_name} className="lud-toggle__input" checked={el.checked} disabled={el.disabled} value={el.value} type="checkbox" tabindex="-1" />
      <span className="lud-toggle__switch"></span>
    </div>);
  }

  }
skate.define('lud-toggle',ludToggle);
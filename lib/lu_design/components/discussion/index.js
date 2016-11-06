/*doc
 ---
 title: Discussion 评论框
 name: discussion
 category: 组件
 ---

 A publisher is an advanced longform text input form element.

## 代码演示

 ```html_example
 <lud-discussion name="replay-feed" placeholder="输入评论内容..."></lud-discussion>
 ```
 */
import './_index.scss';
import ludComponent from '../../lud_component';
import * as skate from 'skatejs';
class ludDiscussion extends ludComponent{
  static props = {
    name:  skate.prop.string({ attribute: true }),
    placeholder:  skate.prop.string({attribute: true }),
    child: skate.prop.string(),
    input_name: skate.prop.string()
  };

  static created(el) {
    el.input_name = el.name;
    el.setAttribute('name',`${el.input_name}-wrap`);
    el.child = el.innerHTML;
    el.innerHTML = null
  }

  static render(el){
    //noinspection CheckTagEmptyBody
    return(
      <div className="lud-discussion">
      <textarea name={el.input_name} className="lud-discussion__input lud-form__control"
                placeholder={el.placeholder} onFocus={()=>$(el).children().addClass('lud-discussion--active')} ></textarea>
        <button type="submit"  data-disable-with="提交中..." className="lud-btn lud-btn--sm lud-btn--primary">
          <lud-icon type="add"></lud-icon>添加
        </button>
      </div>
    );
  }

}
skate.define('lud-discussion',ludDiscussion);
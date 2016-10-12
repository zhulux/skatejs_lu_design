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
    $(el).attr('name',`${el.input_name}-wrap`).addClass('lud-discussion');
    el.child = el.innerHTML;
    el.innerHTML = null
  }

  static render(el){
    let $el= $(el);
    //noinspection CheckTagEmptyBody
    return(
      <textarea name={el.input_name} className="lud-textarea lud-text-longform lud-discussion__input"
                placeholder={el.placeholder} onFocus={()=>$el.addClass('lud-is-active')} ></textarea>
    );
  }

}
skate.define('lud-discussion',ludDiscussion);
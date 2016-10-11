/*doc
 ---
 title: Tag 标签
 name: tag
 category: 组件
 ---
 进行标记和分类的小标签。

## 何时使用

* 用于标记事物的属性和维度。
* 进行分类。

## 代码演示

```html_example
 <lud-tag>Default</lud-tag>
 <lud-tag type="primary">Primary</lud-tag>
 <lud-tag type="danger">Danger</lud-tag>
 <lud-tag type="warning">Warning</lud-tag>
 <lud-tag type="info">Info</lud-tag>
 <lud-tag type="success">Success</lud-tag>
 ```

 ```html_example
 <lud-tag pill="true">Default</lud-tag>
 <lud-tag type="primary" pill="true">Primary</lud-tag>
 <lud-tag type="danger" pill="true">Danger</lud-tag>
 <lud-tag type="warning" pill="true">Warning</lud-tag>
 <lud-tag type="info" pill="true">Info</lud-tag>
 <lud-tag type="success" pill="true">Success</lud-tag>
 ```
```
*/

import './_index.scss';
import ludComponent from '../../lud_component';
import * as skate from 'skatejs';
import classNames from 'classnames';

class ludTag extends ludComponent{
  static props = {
    type: skate.prop.string({
      attribute: true,
      default: 'default'
    }),
    pill: skate.prop.boolean({ attribute: true }),
    child: skate.prop.string()
  };

  static created(el){
    el.child = el.innerHTML;
    el.innerHTML = null
  }

  static render(el){
    let tagCls = classNames({
      ['lud-tag']: true,
      [`lud-tag--${el.type}`]: true,
      ['lud-tag--pill']: el.pill
    });


    let child = skate.h('div', {ref: x => (x.innerHTML = el.child), skip: true });

    return(
      <div className={tagCls}>
        {child}
      </div>
    )
  }
}

skate.define('lud-tag',ludTag);
/*doc
 ---
 title: Dropdown 下拉菜单
 name: dropdown
 category: 组件
 ---

 向下弹出的列表。

## 何时使用

 * 当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 属性

 * align: [left,right] 菜单对齐方式，默认为居中
 * size: [x-small,small,medium,large] 菜单大小，默认为small
 * pointer: Boolean 是否显示角标样式， 默认为false

## 代码演示

```html_example
 <lud-dropdown align="left" pointer="true">
 <a href="javasctip:;">所有反馈<lud-icon type="down"></lud-icon></a>
 <ul>
 <li><a href="javasctip:;">未处理反馈</a></li>
 <li><a href="javasctip:;">处理中反馈</a></li>
 <li><a href="javasctip:;">已处理反馈</a></li>
 </ul>
 </lud-dropdown>
```

 */
import './_index.scss';
import ludComponent from '../../lud_component';
import * as skate from 'skatejs';
import classNames from 'classnames';
class ludDropdown extends ludComponent {
  static props = {
    align   : skate.prop.string({ attribute : true }),
    size    : skate.prop.string({
      attribute : true,
      default   : 'x-small'
    }),
    pointer : skate.prop.boolean({ attribute : true }),
    child   : skate.prop.string()
  };

  static created(el) {
    el.child = el.innerHTML;
    el.innerHTML = null;
  }

  static render(el) {
    let dropdownCls = classNames({
      ['lud-dropdown']              : true,
      [`lud-dropdown--${el.size}`]  : true,
      [`lud-dropdown--${el.align}`] : !!el.align,
      ['lud-dropdown--pointer']     : el.pointer
    });
    return skate.h('div', {
      ref   : x => (x.innerHTML = el.child),
      skip  : true,
      class : dropdownCls
    });
  }

  static attached() {
    let openCls = 'lud-dropdown--open';
    $(document).on('click.lud-dropdown', ()=> $('.' + openCls).removeClass(openCls)); // close dropdown when click outside
  }


  static rendered(el) {
    let $wrap = $(el).children('.lud-dropdown');
    $wrap.on("click.lud-dropdown", "> a", (e)=> {
      e.preventDefault();
      e.stopPropagation();
      $wrap.toggleClass('lud-dropdown--open');
    });
  }

  static detached() {
    $(document).off('click.lud-dropdown')
  }

}
skate.define('lud-dropdown', ludDropdown);
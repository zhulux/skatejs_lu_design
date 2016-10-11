/*doc
 ---
 title: Select 筛选框
 name: select
 category: 组件
 ---

 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 更多配置可<a href="https://select2.github.io/examples.html" target="_blank">点此查看</a>

## 代码演示

```html_example
 <select>
 <option value ="表现主义">表现主义</option>
 <option value ="构成主义">构成主义</option>
 <option value="理性主义">理性主义</option>
 </select>
```

```html_example
 <select data-disabled-select2="true">
 <option value ="表现主义">表现主义</option>
 <option value ="构成主义">构成主义</option>
 <option value="理性主义">理性主义</option>
 </select>
```
 */

import './_index.scss';
import 'select2/dist/js/select2.full';
import $ from 'jquery';

function init_select(){
  $('select[data-disabled-select2!="true"]').select2({tags: true});

  $("select").on("select2:select", function (evt) {
    var element = evt.params.data.element;
    var $element = $(element);

    $element.detach();
    $(this).append($element);
    $(this).trigger("change");
  });
}
$(document).on("turbolinks:load",init_select)
  .on("ajax:success",init_select); // ujs remote:true

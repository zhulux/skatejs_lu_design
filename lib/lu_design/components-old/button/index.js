/*doc
 ---
 title: Button 按钮
 name: button
 category: 组件
 ---

 按钮用于开始一个即时操作。

## 何时使用

 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。


## 代码演示

 ```html_example
<a href="" class="lud-button">Default</a>
<a href="" class="lud-button lud-button--primary">Primary</a>
<a href="" class="lud-button lud-button--info">Info</a>
<a href="" class="lud-button lud-button--success">Success</a>
<a href="" class="lud-button lud-button--warning">Warning</a>
<a href="" class="lud-button lud-button--danger">Danger</a>
<a href="" class="lud-button lud-button--inverse">Inverse</a>
```

```html_example
<button class="lud-button lud-button--primary lud-button--ghost">Primary</button>
<button class="lud-button lud-button--info lud-button--ghost">Info</button>
<button class="lud-button lud-button--success lud-button--ghost">Success</button>
<button class="lud-button lud-button--warning lud-button--ghost">Warning</button>
<button class="lud-button lud-button--danger lud-button--ghost">Danger</button>
<button class="lud-button lud-button--inverse lud-button--ghost">Inverse</button>
```

```html_example
<button class="lud-button lud-button--small">Default</button>
<button class="lud-button lud-button">Default</button>
<button class="lud-button lud-button--large">Default</button>
```
 ```html_example
 <a href="" class="lud-button lud-button--disabled">Default</a>
 <a href="" class="lud-button lud-button--primary lud-button--disabled">Primary</a>
 <a href="" class="lud-button lud-button--info lud-button--disabled">Info</a>
 <button class="lud-button lud-button--success lud-button--ghost" disabled>Success</button>
 ```

```html_example
<button class="lud-button lud-button--small lud-button--ghost lud-button--primary"><lud-icon type="add" class="lud-button__icon"></lud-icon>添加语料库</button>
```


```erb_example
# TODO
<%= lud_button_to '添加语料库', new_demo_path, icon: 'Add', type: 'primary', ghost: true, size: 'small' %>
```
 */
import './_index.scss';
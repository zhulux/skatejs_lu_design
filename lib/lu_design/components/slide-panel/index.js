/*doc
 ---
 title: Sheet 浮层
 name: sheets
 category: 组件
 ---

 卡片式浮层

## 何时使用

 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用浮层承载相应的操作。

## 代码演示

 ```html_example
 <a class="lud-button lud-button--primary" href="javascript:lud.slidePanel({title:'hello',body:'<p>world</p>'})">触发</a>
 ```

 */
import './_index.scss';
import lud from '../../lud_module';
import ludComponent from '../../lud_component';
import * as skate from 'skatejs';

class ludSlidePanel extends ludComponent{
  static props = {
    title: skate.prop.string({ attribute: true }),
    child: skate.prop.string()
  };

  static created(el){
    el.child = el.innerHTML;
    el.innerHTML = null
  }

  static render(el){

    let title = !el.title ? null: (
      <h1 className="lud-slide-panel__title">{el.title}</h1>);
    let child = skate.h('div', {ref: x => (x.innerHTML = el.child), skip: true, class: 'lud-slide-panel__body' });

    return(
      <div className="lud-slide-panel" role="alert">
        {title}
        {child}
      </div>
    )
  }

  static attached() {
    $(document).on('click.lud-slide-panel', ()=>lud.slidePanel.close());
  }

  static rendered(el){
    let $el = $(el).children();
    const sequence= [
      { e: $el, p: { visibility: 'visible' }, o: { duration: 100 } },
      { e: $el, p: "transition.slideRightIn" }
    ];
    lud.velocity.RunSequence(sequence);
    $el.on("click.lud-slide-panel", (e)=> {
      e.stopPropagation();
    });
  }

  static detached() {
    $(document).off('click.lud-slide-panel');
  }

}

skate.define('lud-slide-panel',ludSlidePanel);

lud.slidePanel = (props={})=>{
  if(typeof props.body == "undefined") throw new Error("body is required");
  if ($('lud-slide-panel').exists()) $('lud-slide-panel').remove();
  $('body').append(`<lud-slide-panel title="${props.title}">${props.body}</lud-slide-panel>`)
};

lud.slidePanel.close = ()=>{
  let $el = $('lud-slide-panel');
  $el.children('.lud-slide-panel').velocity("transition.slideRightOut",{
    complete: ()=> $el.remove()
  });
}
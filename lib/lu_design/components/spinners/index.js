/*doc
 ---
 title: Spinner 加载中动画
 name: spinner
 category: 组件
 ---

## 代码演示

 ```html_example
 <div style="position: relative;width: 100%;height: 10rem;">
 <lud-spinner></lud-spinner>
 </div>
 ```
 */
import './_index.scss';
import ludComponent from '../../lud_component';
import * as skate from 'skatejs';

class ludSpinner extends ludComponent{

  static render(){
    return(
      <div class="lud-spinner">
        <div class="lud-spinner__rect1"></div>
        <div class="lud-spinner__rect2"></div>
        <div class="lud-spinner__rect3"></div>
        <div class="lud-spinner__rect4"></div>
        <div class="lud-spinner__rect5"></div>
      </div>
    )
  }
}

skate.define('lud-spinner',ludSpinner);
/*doc
 ---
 title: Toast
 name: toast
 category: 组件
 ---

 警告提示，展现需要关注的信息。

## 何时使用

 * 当某个页面需要向用户显示警告的信息时。
 * 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

 ```html_example
 <button class="lud-button lud-button--primary" onClick="lud.toast.info('hello word')">触发</button>
 ```

 ```
 lud.toast.info('hello word'):
 lud.toast.success('hello word'):
 lud.toast.warning('hello word'):
 lud.toast.danger('hello word'):
 ```
 */
import './_index.scss';
import lud from '../../lud_module';
import toast from 'toastr';
lud.toast = toast;
lud.toast.danger = lud.toast.error;
lud.toast.options = {
  tapToDismiss: true,
  toastClass: 'lud-toast__body',
  containerId: 'lud-toast',
  debug: false,

  showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
  showDuration: 300,
  showEasing: 'swing', //swing and linear are built into jQuery
  onShown: undefined,
  hideMethod: 'fadeOut',
  hideDuration: 1000,
  hideEasing: 'swing',
  onHidden: undefined,
  closeMethod: false,
  closeDuration: false,
  closeEasing: false,
  closeOnHover: true,

  extendedTimeOut: 1000,
  iconClasses: {
    error: 'lud-toast--error',
    info: 'lud-toast--info',
    success: 'lud-toast--success',
    warning: 'lud-toast--warning'
  },
  iconClass: 'lud-toast--info',
  positionClass: 'lud-toast--top-right',
  timeOut: 10000, // Set timeOut and extendedTimeOut to 0 to make it sticky
  titleClass: 'lud-toast__title',
  messageClass: 'lud-toast__message',
  escapeHtml: false,
  target: 'body',
  closeHtml: '<lud-icon type="close"></lud-icon>',
  closeClass: 'lud-toast__close',
  newestOnTop: true,
  preventDuplicates: false,
  progressBar: false,
  progressClass: 'lud-toast__progress',
  rtl: false
};
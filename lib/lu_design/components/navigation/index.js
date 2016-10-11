/*doc
 ---
 title: Navigation 菜单
 name: navigation
 category: 组件
 ---

 为页面和功能提供导航的菜单列表。

## 何时使用

 * 侧边导航提供多级结构来收纳和排列网站架构。

## 代码演示

 ```html_example
 <div class="lud-grid lud-grid--vertical lud-navigation-list--vertical">
 <h2 class="lud-text-title--caps lud-p-around--medium" id="entity-header">Reports</h2>
 <ul>
 <li class="lud-is-active"><a href="javascript:void(0);" class="lud-navigation-list--vertical__action lud-text-link--reset" aria-describedby="entity-header">Recent</a></li>
 <li><a href="javascript:void(0);" class="lud-navigation-list--vertical__action lud-text-link--reset" aria-describedby="entity-header">Created by Me</a></li>
 <li><a href="javascript:void(0);" class="lud-navigation-list--vertical__action lud-text-link--reset" aria-describedby="entity-header">Private Reports</a></li>
 <li><a href="javascript:void(0);" class="lud-navigation-list--vertical__action lud-text-link--reset" aria-describedby="entity-header">Public Reports</a></li>
 <li><a href="javascript:void(0);" class="lud-navigation-list--vertical__action lud-text-link--reset" aria-describedby="entity-header">All Reports</a></li>
 </ul>
 <h2 class="lud-text-title--caps lud-p-around--medium" id="folder-header">Folders</h2>
 <ul>
 <li><a href="javascript:void(0);" class="lud-navigation-list--vertical__action lud-text-link--reset" aria-describedby="folder-header">Created by Me</a></li>
 <li><a href="javascript:void(0);" class="lud-navigation-list--vertical__action lud-text-link--reset" aria-describedby="folder-header">Shared with Me</a></li>
 <li><a href="javascript:void(0);" class="lud-navigation-list--vertical__action lud-text-link--reset" aria-describedby="folder-header">All Reports</a></li>
 </ul>
 </div>
 ```
 */
import './_index.scss'
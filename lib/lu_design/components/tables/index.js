/*doc
 ---
 title: Table 表格
 name: table
 category: 组件
 ---

展示行列数据。

 ## 何时使用

 * 当有大量结构化的数据需要展现时；
 * 当需要对数据进行排序、分页等复杂行为时。

## 代码演示

```html_example
 <table class="lud-table">
 <thead>
 <tr>
 <th nowrap=""></th>
 <th nowrap="">状态</th>
 <th nowrap="">提交人</th>
 <th>内容</th>
 <th nowrap="">提交时间</th>
 <th></th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td nowrap="">270</td>
 <td nowrap=""><span class="lud-tag lud-tag--success">已处理</span></td>
 <td nowrap="">
 <a href="/users/16377/edit">谢玉辉</a>
 </td>
 <td>目前无融资历史</td>
 <td nowrap="">5 天前</td>
 <td nowrap="">
 <a data-disable-with="loading..." data-remote="true" href="/feedbacks/270">处理详情(3)</a>
 </td>
 </tr>
 <tr>
 <td nowrap="">269</td>
 <td nowrap=""><span class="lud-tag lud-tag--success">已处理</span></td>
 <td nowrap="">
 <a href="/users/16548/edit">刘培爽</a>
 </td>
 <td>无融资历史，无法申请认证。</td>
 <td nowrap="">5 天前</td>
 <td nowrap="">
 <a data-disable-with="loading..." data-remote="true" href="/feedbacks/269">处理详情(1)</a>
 </td>
 </tr>
 <tr>
 <td nowrap="">268</td>
 <td nowrap=""><span class="lud-tag lud-tag--success">已处理</span></td>
 <td nowrap="">
 <a href="/users/16548/edit">刘培爽</a>
 </td>
 <td>无融资历史，无法申请认证。</td>
 <td nowrap="">5 天前</td>
 <td nowrap="">
 <a data-disable-with="loading..." data-remote="true" href="/feedbacks/268">处理详情(1)</a>
 </td>
 </tr>
 <tr>
 <td nowrap="">267</td>
 <td nowrap=""><span class="lud-tag lud-tag--success">已处理</span></td>
 <td nowrap="">
 <a href="/users/16548/edit">刘培爽</a>
 </td>
 <td>无融资历史，无法申请认证。</td>
 <td nowrap="">5 天前</td>
 <td nowrap="">
 <a data-disable-with="loading..." data-remote="true" href="/feedbacks/267">处理详情(1)</a>
 </td>
 </tr>
 </tbody>
 </table>

```
 */

import './_index.scss';
import 'sticky-table-headers';
$(document).on("turbolinks:load", ()=> $('table.lud-table--sticky').stickyTableHeaders());


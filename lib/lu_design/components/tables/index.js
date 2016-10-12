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
 <table class="lud-table lud-table--bordered lud-table--fixed-layout" role="grid">
 <thead>
 <tr class="lud-text-title--caps">
 <th class="lud-cell-shrink" scope="col">
 <label class="lud-checkbox">
 <input type="checkbox" name="options" />
 <span class="lud-checkbox--faux"></span>
 <span class="lud-assistive-text">Select All</span>
 </label>
 </th>
 <th class="lud-is-sortable lud-is-resizable lud-is-sorted lud-is-sorted--asc" scope="col" aria-sort="ascending" aria-label="Opportunity Name">
 <a href="javascript:void(0);" class="lud-th__action lud-text-link--reset">
 <span class="lud-assistive-text">Sort </span><span class="lud-truncate" title="Opportunity Name">Opportunity Name</span>
 <span class="lud-assistive-text" aria-live="assertive" aria-atomic="true">Sorted ascending</span>
 </a>
 <div class="lud-resizable">
 <label for="cell-resize-handle-231" class="lud-assistive-text">Opportunity Name column width</label>
 <input class="lud-resizable__input lud-assistive-text" type="range" min="20" max="1000" id="cell-resize-handle-231" />
 <span class="lud-resizable__handle">
 <span class="lud-resizable__divider"></span>
 </span>
 </div>
 </th>
 <th class="lud-is-sortable lud-is-resizable" scope="col" aria-label="Account Name">
 <a href="javascript:void(0);" class="lud-th__action lud-text-link--reset">
 <span class="lud-assistive-text">Sort </span>
 <span class="lud-truncate" title="Account Name">Account Name</span>
 <lud-icon type="arrowdown" class="lud-is-sortable__icon"></lud-icon>
 <span class="lud-assistive-text" aria-live="assertive" aria-atomic="true"></span>
 </a>
 <div class="lud-resizable">
 <label for="cell-resize-handle-232" class="lud-assistive-text">Account Name column width</label>
 <input class="lud-resizable__input lud-assistive-text" type="range" min="20" max="1000" id="cell-resize-handle-232" />
 <span class="lud-resizable__handle">
 <span class="lud-resizable__divider"></span>
 </span>
 </div>
 </th>
 <th class="lud-is-sortable lud-is-resizable" scope="col" aria-label="Close Date">
 <a href="javascript:void(0);" class="lud-th__action lud-text-link--reset">
 <span class="lud-assistive-text">Sort </span>
 <span class="lud-truncate" title="Close Date">Close Date</span>
 <lud-icon type="arrowdown" class="lud-is-sortable__icon"></lud-icon>
 <span class="lud-assistive-text" aria-live="assertive" aria-atomic="true"></span>
 </a>
 <div class="lud-resizable">
 <label for="cell-resize-handle-233" class="lud-assistive-text">Close Date column width</label>
 <input class="lud-resizable__input lud-assistive-text" type="range" min="20" max="1000" id="cell-resize-handle-233" />
 <span class="lud-resizable__handle">
 <span class="lud-resizable__divider"></span>
 </span>
 </div>
 </th>
 <th class="lud-is-sortable lud-is-resizable" scope="col" aria-label="Stage">
 <a href="javascript:void(0);" class="lud-th__action lud-text-link--reset">
 <span class="lud-assistive-text">Sort </span>
 <span class="lud-truncate" title="Stage">Stage</span>
 <lud-icon type="arrowdown" class="lud-is-sortable__icon"></lud-icon>
 <span class="lud-assistive-text" aria-live="assertive" aria-atomic="true"></span>
 </a>
 <div class="lud-resizable">
 <label for="cell-resize-handle-234" class="lud-assistive-text">Stage column width</label>
 <input class="lud-resizable__input lud-assistive-text" type="range" min="20" max="1000" id="cell-resize-handle-234" />
 <span class="lud-resizable__handle">
 <span class="lud-resizable__divider"></span>
 </span>
 </div>
 </th>
 <th class="lud-is-sortable lud-is-resizable" scope="col" aria-label="Confidence">
 <a href="javascript:void(0);" class="lud-th__action lud-text-link--reset">
 <span class="lud-assistive-text">Sort </span>
 <span class="lud-truncate" title="Confidence">Confidence</span>
 <lud-icon type="arrowdown" class="lud-is-sortable__icon"></lud-icon>
 <span class="lud-assistive-text" aria-live="assertive" aria-atomic="true"></span>
 </a>
 <div class="lud-resizable">
 <label for="cell-resize-handle-235" class="lud-assistive-text">Confidence column width</label>
 <input class="lud-resizable__input lud-assistive-text" type="range" min="20" max="1000" id="cell-resize-handle-235" />
 <span class="lud-resizable__handle">
 <span class="lud-resizable__divider"></span>
 </span>
 </div>
 </th>
 <th class="lud-is-sortable lud-is-resizable" scope="col" aria-label="Amount">
 <a href="javascript:void(0);" class="lud-th__action lud-text-link--reset">
 <span class="lud-assistive-text">Sort </span>
 <span class="lud-truncate" title="Amount">Amount</span>
 <lud-icon type="arrowdown" class="lud-is-sortable__icon"></lud-icon>
 <span class="lud-assistive-text" aria-live="assertive" aria-atomic="true"></span>
 </a>
 <div class="lud-resizable">
 <label for="cell-resize-handle-236" class="lud-assistive-text">Amount column width</label>
 <input class="lud-resizable__input lud-assistive-text" type="range" min="20" max="1000" id="cell-resize-handle-236" />
 <span class="lud-resizable__handle">
 <span class="lud-resizable__divider"></span>
 </span>
 </div>
 </th>
 <th class="lud-is-sortable lud-is-resizable" scope="col" aria-label="Contact">
 <a href="javascript:void(0);" class="lud-th__action lud-text-link--reset">
 <span class="lud-assistive-text">Sort </span>
 <span class="lud-truncate" title="Contact">Contact</span>
 <lud-icon type="arrowdown" class="lud-is-sortable__icon"></lud-icon>
 <span class="lud-assistive-text" aria-live="assertive" aria-atomic="true"></span>
 </a>
 <div class="lud-resizable">
 <label for="cell-resize-handle-237" class="lud-assistive-text">Contact column width</label>
 <input class="lud-resizable__input lud-assistive-text" type="range" min="20" max="1000" id="cell-resize-handle-237" />
 <span class="lud-resizable__handle">
 <span class="lud-resizable__divider"></span>
 </span>
 </div>
 </th>
 <th class="lud-cell-shrink" scope="col"></th>
 </tr>
 </thead>
 <tbody>
 <tr class="lud-hint-parent">
 <td role="gridcell" class="lud-cell-shrink" data-label="Select row Anypoint Connectors">
 <label class="lud-checkbox">
 <input type="checkbox" name="options" />
 <span class="lud-checkbox--faux"></span>
 <span class="lud-assistive-text">Select row Anypoint Connectors</span>
 </label>
 </td>
 <th scope="row" data-label="Opportunity Name">
 <div class="lud-truncate" title="Anypoint Connectors">Anypoint Connectors</div>
 </th>
 <td role="gridcell" data-label="Account Name">
 <div class="lud-truncate" title="Cloudhub">Cloudhub</div>
 </td>
 <td role="gridcell" data-label="Close Date">
 <div class="lud-truncate" title="4/14/2015">4/14/2015</div>
 </td>
 <td role="gridcell" data-label="Prospecting">
 <div class="lud-truncate" title="Prospecting">Prospecting</div>
 </td>
 <td role="gridcell" data-label="Confidence">
 <div class="lud-truncate" title="20%">20%</div>
 </td>
 <td role="gridcell" data-label="Amount">
 <div class="lud-truncate" title="$25k">$25k</div>
 </td>
 <td role="gridcell" data-label="Contact">
 <div class="lud-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div>
 </td>
 <td role="gridcell" class="lud-cell-shrink" data-label="Actions">
 <button class="lud-button lud-button--icon-border lud-button--icon-x-small">
 <lud-icon type="down" class="lud-is-sortable__icon"></lud-icon>
 <span class="lud-assistive-text">Show More</span>
 </button>
 </td>
 </tr>
 <tr class="lud-hint-parent">
 <td role="gridcell" class="lud-cell-shrink" data-label="Select row Cloudhub">
 <label class="lud-checkbox">
 <input type="checkbox" name="options" />
 <span class="lud-checkbox--faux"></span>
 <span class="lud-assistive-text">Select row Cloudhub</span>
 </label>
 </td>
 <th scope="row" data-label="Opportunity Name">
 <div class="lud-truncate" title="Cloudhub">Cloudhub</div>
 </th>
 <td role="gridcell" data-label="Account Name">
 <div class="lud-truncate" title="Cloudhub">Cloudhub</div>
 </td>
 <td role="gridcell" data-label="Close Date">
 <div class="lud-truncate" title="4/14/2015">4/14/2015</div>
 </td>
 <td role="gridcell" data-label="Prospecting">
 <div class="lud-truncate" title="Prospecting">Prospecting</div>
 </td>
 <td role="gridcell" data-label="Confidence">
 <div class="lud-truncate" title="20%">20%</div>
 </td>
 <td role="gridcell" data-label="Amount">
 <div class="lud-truncate" title="$25k">$25k</div>
 </td>
 <td role="gridcell" data-label="Contact">
 <div class="lud-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div>
 </td>
 <td role="gridcell" class="lud-cell-shrink" data-label="Actions">
 <button class="lud-button lud-button--icon-border lud-button--icon-x-small">
 <lud-icon type="down" class="lud-is-sortable__icon"></lud-icon>
 <span class="lud-assistive-text">Show More</span>
 </button>
 </td>
 </tr>
 </tbody>
 </table>
 ```

 ```html_example
 <table class="lud-table lud-table--bordered lud-table--cell-buffer lud-table--striped">
 <thead>
 <tr class="lud-text-title--caps">
 <th scope="col">
 <div class="lud-truncate" title="Opportunity Name">Opportunity Name</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Account Name">Account Name</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Close Date">Close Date</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Stage">Stage</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Confidence">Confidence</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Amount">Amount</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Contact">Contact</div>
 </th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <th scope="row" data-label="Opportunity Name">
 <div class="lud-truncate" title="Cloudhub"><a href="javascript:void(0);">Cloudhub</a></div>
 </th>
 <td data-label="Account Name">
 <div class="lud-truncate" title="Cloudhub">Cloudhub</div>
 </td>
 <td data-label="Close Date">
 <div class="lud-truncate" title="4/14/2015">4/14/2015</div>
 </td>
 <td data-label="Prospecting">
 <div class="lud-truncate" title="Prospecting">Prospecting</div>
 </td>
 <td data-label="Confidence">
 <div class="lud-truncate" title="20%">20%</div>
 </td>
 <td data-label="Amount">
 <div class="lud-truncate" title="$25k">$25k</div>
 </td>
 <td data-label="Contact">
 <div class="lud-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div>
 </td>
 </tr>
 <tr>
 <th scope="row" data-label="Opportunity Name">
 <div class="lud-truncate" title="Cloudhub + Anypoint Connectors"><a href="javascript:void(0);">Cloudhub + Anypoint Connectors</a></div>
 </th>
 <td data-label="Account Name">
 <div class="lud-truncate" title="Cloudhub">Cloudhub</div>
 </td>
 <td data-label="Close Date">
 <div class="lud-truncate" title="4/14/2015">4/14/2015</div>
 </td>
 <td data-label="Prospecting">
 <div class="lud-truncate" title="Prospecting">Prospecting</div>
 </td>
 <td data-label="Confidence">
 <div class="lud-truncate" title="20%">20%</div>
 </td>
 <td data-label="Amount">
 <div class="lud-truncate" title="$25k">$25k</div>
 </td>
 <td data-label="Contact">
 <div class="lud-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div>
 </td>
 </tr>
 <tr>
 <th scope="row" data-label="Opportunity Name">
 <div class="lud-truncate" title="Cloudhub"><a href="javascript:void(0);">Cloudhub</a></div>
 </th>
 <td data-label="Account Name">
 <div class="lud-truncate" title="Cloudhub">Cloudhub</div>
 </td>
 <td data-label="Close Date">
 <div class="lud-truncate" title="4/14/2015">4/14/2015</div>
 </td>
 <td data-label="Prospecting">
 <div class="lud-truncate" title="Prospecting">Prospecting</div>
 </td>
 <td data-label="Confidence">
 <div class="lud-truncate" title="20%">20%</div>
 </td>
 <td data-label="Amount">
 <div class="lud-truncate" title="$25k">$25k</div>
 </td>
 <td data-label="Contact">
 <div class="lud-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div>
 </td>
 </tr>
 </tbody>
 </table>
 ```

 ```html_example
 <table class="lud-table lud-table--bordered lud-table--cell-buffer lud-table--col-bordered">
 <thead>
 <tr class="lud-text-title--caps">
 <th scope="col">
 <div class="lud-truncate" title="Opportunity Name">Opportunity Name</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Account Name">Account Name</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Close Date">Close Date</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Stage">Stage</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Confidence">Confidence</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Amount">Amount</div>
 </th>
 <th scope="col">
 <div class="lud-truncate" title="Contact">Contact</div>
 </th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <th scope="row" data-label="Opportunity Name">
 <div class="lud-truncate" title="Cloudhub"><a href="javascript:void(0);">Cloudhub</a></div>
 </th>
 <td data-label="Account Name">
 <div class="lud-truncate" title="Cloudhub">Cloudhub</div>
 </td>
 <td data-label="Close Date">
 <div class="lud-truncate" title="4/14/2015">4/14/2015</div>
 </td>
 <td data-label="Prospecting">
 <div class="lud-truncate" title="Prospecting">Prospecting</div>
 </td>
 <td data-label="Confidence">
 <div class="lud-truncate" title="20%">20%</div>
 </td>
 <td data-label="Amount">
 <div class="lud-truncate" title="$25k">$25k</div>
 </td>
 <td data-label="Contact">
 <div class="lud-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div>
 </td>
 </tr>
 <tr>
 <th scope="row" data-label="Opportunity Name">
 <div class="lud-truncate" title="Cloudhub + Anypoint Connectors"><a href="javascript:void(0);">Cloudhub + Anypoint Connectors</a></div>
 </th>
 <td data-label="Account Name">
 <div class="lud-truncate" title="Cloudhub">Cloudhub</div>
 </td>
 <td data-label="Close Date">
 <div class="lud-truncate" title="4/14/2015">4/14/2015</div>
 </td>
 <td data-label="Prospecting">
 <div class="lud-truncate" title="Prospecting">Prospecting</div>
 </td>
 <td data-label="Confidence">
 <div class="lud-truncate" title="20%">20%</div>
 </td>
 <td data-label="Amount">
 <div class="lud-truncate" title="$25k">$25k</div>
 </td>
 <td data-label="Contact">
 <div class="lud-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div>
 </td>
 </tr>
 </tbody>
 </table>
 ```
 */

import './_index.scss';
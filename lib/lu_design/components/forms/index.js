/*doc
 ---
 title: Form 表单
 name: forms
 category: 组件
 ---

 具有数据收集、校验和提交功能的表单，包含输入框、文本框、单选等元素。

## 水平表单

```html_example
 <div class="lud-form--horizontal">
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="inputSample2">Text Input</label>
 <div class="lud-form-element__control">
 <input id="inputSample2" class="lud-input" type="text" placeholder="Placeholder Text" />
 </div>
 </div>
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="textareaSample2">Textarea Label</label>
 <div class="lud-form-element__control">
 <textarea id="textareaSample2" class="lud-textarea"></textarea>
 </div>
 </div>
 <div class="lud-form-element">
 <div class="lud-form-element__control">
 <label class="lud-checkbox" for="agree">
 <input name="default" type="checkbox" id="agree" />
 <span class="lud-checkbox--faux"></span>
 <span class="lud-form-element__label">I agree to the Terms &amp; Service</span>
 </label>
 </div>
 </div>
 </div>
```

## 内联表单

```html_example
 <form class="lud-form--inline">
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="name">Name</label>
 <div class="lud-form-element__control">
 <input id="name" class="lud-input" type="text" />
 </div>
 </div>
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="email">Email</label>
 <div class="lud-form-element__control">
 <input id="email" class="lud-input" type="text" />
 </div>
 </div>
 <div class="lud-form-element">
 <button type="button" class="lud-button lud-button--primary">Send</button>
 </div>
 </form>
```

## 垂直表单

```html_example
 <div class="lud-form--stacked">
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="inputSample2">Text Input</label>
 <div class="lud-form-element__control">
 <input id="inputSample2" class="lud-input" type="text" placeholder="Placeholder Text" />
 </div>
 </div>
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="textareaSample2">Textarea Label</label>
 <div class="lud-form-element__control">
 <textarea id="textareaSample2" class="lud-textarea"></textarea>
 </div>
 </div>

 <div class="lud-form-element">
 <div class="lud-form-element__control">
 <label class="lud-checkbox" for="agree">
 <input name="default" type="checkbox" id="agree" />
 <span class="lud-checkbox--faux"></span>
 <span class="lud-form-element__label">I agree to the Terms &amp; Service</span>
 </label>
 </div>
 </div>
 </div>
```

## 组合表单

```html_example
 <fieldset class="lud-form--compound">
 <legend class="lud-form-element__label lud-text-title--caps">Address</legend>
 <div class="lud-form-element__group">
 <div class="lud-form-element__row">
 <div class="lud-form-element lud-size--1-of-1">
 <label class="lud-form-element__label" for="input-03">Street</label>
 <input id="input-03" class="lud-input" type="text" />
 </div>
 </div>
 <div class="lud-form-element__row">
 <div class="lud-form-element lud-size--1-of-2">
 <label class="lud-form-element__label" for="input-04">City</label>
 <input id="input-04" class="lud-input" type="text" />
 </div>
 <div class="lud-form-element lud-size--1-of-2">
 <label class="lud-form-element__label" for="input-05">State</label>
 <input id="input-05" class="lud-input" type="text" />
 </div>
 </div>
 <div class="lud-form-element__row">
 <div class="lud-form-element lud-size--1-of-2">
 <label class="lud-form-element__label" for="input-06">ZIP Code</label>
 <input id="input-06" class="lud-input" type="text" />
 </div>
 </div>
 </div>
 </fieldset>
```

## Input

```html_example
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="text-input-01">
  <abbr class="lud-required" title="required">*</abbr> Input Label</label>
 <div class="lud-form-element__control">
 <input id="text-input-01" class="lud-input" type="text" placeholder="Placeholder Text" />
 </div>
 </div>
```
```html_example
 <div class="lud-form-element">
 <span class="lud-form-element__label">Input Label</span>
 <div class="lud-form-element__control lud-has-divider--bottom">
 <span class="lud-form-element__static">Read Only</span>
 </div>
 </div>
```
```html_example
 <div class="lud-form-element lud-has-error">
 <label class="lud-form-element__label" for="text-input-01">
 <abbr class="lud-required" title="required">*</abbr> Input Label</label>
 <div class="lud-form-element__control lud-input-has-icon lud-input-has-icon--left">
 <lud-icon type="warning" class="lud-input__icon"></lud-icon>
 <input id="text-input-01" class="lud-input" type="text" placeholder="Placeholder Text" required="" aria-describedby="error-message" />
 </div>
 <div id="error-message" class="lud-form-element__help">This field is required</div>
 </div>
```
```html_example
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="text-input-01">Input Label</label>
 <div class="lud-form-element__control lud-input-has-fixed-addon">
 <span class="lud-form-element__addon">$</span>
 <input id="text-input-01" class="lud-input" type="text" placeholder="Placeholder Text" />
 <span class="lud-form-element__addon">%</span>
 </div>
 </div>
```

## Textarea

```html_example
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="textarea-input-01">
 <abbr class="lud-required" title="required">*</abbr> Textarea Label</label>
 <div class="lud-form-element__control">
 <textarea required="" id="textarea-input-01" class="lud-textarea" placeholder="Placeholder Text"></textarea>
 </div>
 </div>
```

```html_example
 <div class="lud-form-element">
 <label class="lud-form-element__label" for="textarea-input-01">Textarea Label</label>
 <div class="lud-form-element__control">
 <textarea disabled="" id="textarea-input-01" class="lud-textarea" placeholder="Placeholder Text"></textarea>
 </div>
 </div>
```

## Radio

```html_example
 <fieldset class="lud-form-element">
 <legend class="lud-form-element__legend lud-form-element__label">Radio Group Label</legend>
 <div class="lud-form-element__control">
 <span class="lud-radio">
 <input type="radio" id="radio-306" name="options" checked="" />
 <label class="lud-radio__label" for="radio-306">
 <span class="lud-radio--faux"></span>
 <span class="lud-form-element__label">Radio Label One</span>
 </label>
 </span>
 <span class="lud-radio">
 <input type="radio" id="radio-307" name="options" />
 <label class="lud-radio__label" for="radio-307">
 <span class="lud-radio--faux"></span>
 <span class="lud-form-element__label">Radio Label Two</span>
 </label>
 </span>
 </div>
 </fieldset>
```

# Checkbox

```html_example
 <fieldset class="lud-form-element">
 <legend class="lud-form-element__legend lud-form-element__label">
 <abbr class="lud-required" title="required">*</abbr> Checkbox Group Label</legend>
 <div class="lud-form-element__control">
 <span class="lud-checkbox">
 <input type="checkbox" name="options" id="checkbox-324" checked="" />
 <label class="lud-checkbox__label" for="checkbox-324">
 <span class="lud-checkbox--faux"></span>
 <span class="lud-form-element__label">Checkbox Label</span>
 </label>
 </span>
 <span class="lud-checkbox">
 <input type="checkbox" name="options" id="checkbox-325" />
 <label class="lud-checkbox__label" for="checkbox-325">
 <span class="lud-checkbox--faux"></span>
 <span class="lud-form-element__label">Checkbox Label</span>
 </label>
 </span>
 </div>
 </fieldset>
```

 */
import './_index.scss';
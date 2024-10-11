### a11y_accesskey

```
Avoid using accesskey
```

Enforce no `accesskey` on element. Access keys are HTML attributes that allow web developers to assign keyboard shortcuts to elements. Inconsistencies between keyboard shortcuts and keyboard commands used by screen reader and keyboard-only users create accessibility complications. To avoid complications, access keys should not be used.

<!-- prettier-ignore -->
```svelte
<!-- A11y: Avoid using accesskey -->
<div accesskey="z"></div>
```

### a11y_aria_activedescendant_has_tabindex

```
An element with an aria-activedescendant attribute should have a tabindex value
```

An element with `aria-activedescendant` must be tabbable, so it must either have an inherent `tabindex` or declare `tabindex` as an attribute.

```svelte
<!-- A11y: Elements with attribute aria-activedescendant should have tabindex value -->
<div aria-activedescendant="some-id"></div>
```

### a11y_aria_attributes

```
`<%name%>` should not have aria-* attributes
```

Certain reserved DOM elements do not support ARIA roles, states and properties. This is often because they are not visible, for example `meta`, `html`, `script`, `style`. This rule enforces that these DOM elements do not contain the `aria-*` props.

```svelte
<!-- A11y: <meta> should not have aria-* attributes -->
<meta aria-hidden="false" />
```

### a11y_autocomplete_valid

```
'%value%' is an invalid value for 'autocomplete' on `<input type="%type%">`
```

### a11y_autofocus

```
Avoid using autofocus
```

Enforce that `autofocus` is not used on elements. Autofocusing elements can cause usability issues for sighted and non-sighted users alike.

```svelte
<!-- A11y: Avoid using autofocus -->
<input autofocus />
```

### a11y_click_events_have_key_events

```
Visible, non-interactive elements with a click event must be accompanied by a keyboard event handler. Consider whether an interactive element such as `<button type="button">` or `<a>` might be more appropriate. See https://svelte.dev/docs/accessibility-warnings#a11y-click-events-have-key-events for more details
```

Enforce that visible, non-interactive elements with an `onclick` event are accompanied by a keyboard event handler.

Users should first consider whether an interactive element might be more appropriate such as a `<button type="button">` element for actions or `<a>` element for navigations. These elements are more semantically meaningful and will have built-in key handling. E.g. `Space` and `Enter` will trigger a `<button>` and `Enter` will trigger an `<a>` element.

If a non-interactive element is required then `onclick` should be accompanied by an `onkeyup` or `onkeydown` handler that enables the user to perform equivalent actions via the keyboard. In order for the user to be able to trigger a key press, the element will also need to be focusable by adding a [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). While an `onkeypress` handler will also silence this warning, it should be noted that the `keypress` event is deprecated.

```svelte
<!-- A11y: visible, non-interactive elements with an onclick event must be accompanied by a keyboard event handler. -->
<div onclick={() => {}}></div>
```

Coding for the keyboard is important for users with physical disabilities who cannot use a mouse, AT compatibility, and screenreader users.

### a11y_consider_explicit_label

```
Buttons and links should either contain text or have an `aria-label` or `aria-labelledby` attribute
```

### a11y_distracting_elements

```
Avoid `<%name%>` elements
```

Enforces that no distracting elements are used. Elements that can be visually distracting can cause accessibility issues with visually impaired users. Such elements are most likely deprecated, and should be avoided.

The following elements are visually distracting: `<marquee>` and `<blink>`.

```svelte
<!-- A11y: Avoid <marquee> elements -->
<marquee></marquee>
```

### a11y_figcaption_index

```
`<figcaption>` must be first or last child of `<figure>`
```

### a11y_figcaption_parent

```
`<figcaption>` must be an immediate child of `<figure>`
```

Enforce that certain DOM elements have the correct structure.

```svelte
<!-- A11y: <figcaption> must be an immediate child of <figure> -->
<div>
	<figcaption>Image caption</figcaption>
</div>
```

### a11y_hidden

```
`<%name%>` element should not be hidden
```

Certain DOM elements are useful for screen reader navigation and should not be hidden.

<!-- prettier-ignore -->
```svelte
<!-- A11y: <h2> element should not be hidden -->
<h2 aria-hidden="true">invisible header</h2>
```

### a11y_img_redundant_alt

```
Screenreaders already announce `<img>` elements as an image
```

Enforce img alt attribute does not contain the word image, picture, or photo. Screen readers already announce `img` elements as an image. There is no need to use words such as _image_, _photo_, and/or _picture_.

```svelte
<img src="foo" alt="Foo eating a sandwich." />

<!-- aria-hidden, won't be announced by screen reader -->
<img src="bar" aria-hidden="true" alt="Picture of me taking a photo of an image" />

<!-- A11y: Screen readers already announce <img> elements as an image. -->
<img src="foo" alt="Photo of foo being weird." />

<!-- A11y: Screen readers already announce <img> elements as an image. -->
<img src="bar" alt="Image of me at a bar!" />

<!-- A11y: Screen readers already announce <img> elements as an image. -->
<img src="foo" alt="Picture of baz fixing a bug." />
```

### a11y_incorrect_aria_attribute_type

```
The value of '%attribute%' must be a %type%
```

Enforce that only the correct type of value is used for aria attributes. For example, `aria-hidden`
should only receive a boolean.

```svelte
<!-- A11y: The value of 'aria-hidden' must be exactly one of true or false -->
<div aria-hidden="yes"></div>
```

### a11y_incorrect_aria_attribute_type_boolean

```
The value of '%attribute%' must be either 'true' or 'false'. It cannot be empty
```

### a11y_incorrect_aria_attribute_type_id

```
The value of '%attribute%' must be a string that represents a DOM element ID
```

### a11y_incorrect_aria_attribute_type_idlist

```
The value of '%attribute%' must be a space-separated list of strings that represent DOM element IDs
```

### a11y_incorrect_aria_attribute_type_integer

```
The value of '%attribute%' must be an integer
```

### a11y_incorrect_aria_attribute_type_token

```
The value of '%attribute%' must be exactly one of %values%
```

### a11y_incorrect_aria_attribute_type_tokenlist

```
The value of '%attribute%' must be a space-separated list of one or more of %values%
```

### a11y_incorrect_aria_attribute_type_tristate

```
The value of '%attribute%' must be exactly one of true, false, or mixed
```

### a11y_interactive_supports_focus

```
Elements with the '%role%' interactive role must have a tabindex value
```

Enforce that elements with an interactive role and interactive handlers (mouse or key press) must be focusable or tabbable.

```svelte
<!-- A11y: Elements with the 'button' interactive role must have a tabindex value. -->
<div role="button" onkeypress={() => {}} />
```

### a11y_invalid_attribute

```
'%href_value%' is not a valid %href_attribute% attribute
```

Enforce that attributes important for accessibility have a valid value. For example, `href` should not be empty, `'#'`, or `javascript:`.

```svelte
<!-- A11y: '' is not a valid href attribute -->
<a href="">invalid</a>
```

### a11y_label_has_associated_control

```
A form label must be associated with a control
```

Enforce that a label tag has a text label and an associated control.

There are two supported ways to associate a label with a control:

- Wrapping a control in a label tag.
- Adding `for` to a label and assigning it the ID of an input on the page.

```svelte
<label for="id">B</label>

<label>C <input type="text" /></label>

<!-- A11y: A form label must be associated with a control. -->
<label>A</label>
```

### a11y_media_has_caption

```
`<video>` elements must have a `<track kind="captions">`
```

Providing captions for media is essential for deaf users to follow along. Captions should be a transcription or translation of the dialogue, sound effects, relevant musical cues, and other relevant audio information. Not only is this important for accessibility, but can also be useful for all users in the case that the media is unavailable (similar to `alt` text on an image when an image is unable to load).

The captions should contain all important and relevant information to understand the corresponding media. This may mean that the captions are not a 1:1 mapping of the dialogue in the media content. However, captions are not necessary for video components with the `muted` attribute.

```svelte
<video><track kind="captions" /></video>

<audio muted></audio>

<!-- A11y: Media elements must have a <track kind=\"captions\"> -->
<video></video>

<!-- A11y: Media elements must have a <track kind=\"captions\"> -->
<video><track /></video>
```

### a11y_misplaced_role

```
`<%name%>` should not have role attribute
```

Certain reserved DOM elements do not support ARIA roles, states and properties. This is often because they are not visible, for example `meta`, `html`, `script`, `style`. This rule enforces that these DOM elements do not contain the `role` props.

```svelte
<!-- A11y: <meta> should not have role attribute -->
<meta role="tooltip" />
```

### a11y_misplaced_scope

```
The scope attribute should only be used with `<th>` elements
```

The scope attribute should only be used on `<th>` elements.

<!-- prettier-ignore -->
```svelte
<!-- A11y: The scope attribute should only be used with <th> elements -->
<div scope="row" />
```

### a11y_missing_attribute

```
`<%name%>` element should have %article% %sequence% attribute
```

Enforce that attributes required for accessibility are present on an element. This includes the following checks:

- `<a>` should have an href (unless it's a [fragment-defining tag](https://github.com/sveltejs/svelte/issues/4697))
- `<area>` should have alt, aria-label, or aria-labelledby
- `<html>` should have lang
- `<iframe>` should have title
- `<img>` should have alt
- `<object>` should have title, aria-label, or aria-labelledby
- `<input type="image">` should have alt, aria-label, or aria-labelledby

```svelte
<!-- A11y: <input type=\"image\"> element should have an alt, aria-label or aria-labelledby attribute -->
<input type="image" />

<!-- A11y: <html> element should have a lang attribute -->
<html></html>

<!-- A11y: <a> element should have an href attribute -->
<a>text</a>
```

### a11y_missing_content

```
`<%name%>` element should contain text
```

Enforce that heading elements (`h1`, `h2`, etc.) and anchors have content and that the content is accessible to screen readers

```svelte
<!-- A11y: <a> element should have child content -->
<a href="/foo"></a>

<!-- A11y: <h1> element should have child content -->
<h1></h1>
```

### a11y_mouse_events_have_key_events

```
'%event%' event must be accompanied by '%accompanied_by%' event
```

Enforce that `onmouseover` and `onmouseout` are accompanied by `onfocus` and `onblur`, respectively. This helps to ensure that any functionality triggered by these mouse events is also accessible to keyboard users.

```svelte
<!-- A11y: onmouseover must be accompanied by onfocus -->
<div onmouseover={handleMouseover} />

<!-- A11y: onmouseout must be accompanied by onblur -->
<div onmouseout={handleMouseout} />
```

### a11y_no_abstract_role

```
Abstract role '%role%' is forbidden
```

### a11y_no_interactive_element_to_noninteractive_role

```
`<%element%>` cannot have role '%role%'
```

[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#usage_intro) roles should not be used to convert an interactive element to a non-interactive element. Non-interactive ARIA roles include `article`, `banner`, `complementary`, `img`, `listitem`, `main`, `region` and `tooltip`.

```svelte
<!-- A11y: <textarea> cannot have role 'listitem' -->
<textarea role="listitem"></textarea>
```

### a11y_no_noninteractive_element_interactions

```
Non-interactive element `<%element%>` should not be assigned mouse or keyboard event listeners
```

A non-interactive element does not support event handlers (mouse and key handlers). Non-interactive elements include `<main>`, `<area>`, `<h1>` (,`<h2>`, etc), `<p>`, `<img>`, `<li>`, `<ul>` and `<ol>`. Non-interactive [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro) include `article`, `banner`, `complementary`, `img`, `listitem`, `main`, `region` and `tooltip`.

```sv
<!-- `A11y: Non-interactive element <li> should not be assigned mouse or keyboard event listeners.` -->
<li onclick={() => {}}></li>

<!-- `A11y: Non-interactive element <div> should not be assigned mouse or keyboard event listeners.` -->
<div role="listitem" onclick={() => {}}></div>
```

### a11y_no_noninteractive_element_to_interactive_role

```
Non-interactive element `<%element%>` cannot have interactive role '%role%'
```

[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#usage_intro) roles should not be used to convert a non-interactive element to an interactive element. Interactive ARIA roles include `button`, `link`, `checkbox`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch` and `textbox`.

```svelte
<!-- A11y: Non-interactive element <h3> cannot have interactive role 'searchbox' -->
<h3 role="searchbox">Button</h3>
```

### a11y_no_noninteractive_tabindex

```
noninteractive element cannot have nonnegative tabIndex value
```

Tab key navigation should be limited to elements on the page that can be interacted with.

<!-- prettier-ignore -->
```svelte
<!-- A11y: noninteractive element cannot have nonnegative tabIndex value -->
<div tabindex="0"></div>
```

### a11y_no_redundant_roles

```
Redundant role '%role%'
```

Some HTML elements have default ARIA roles. Giving these elements an ARIA role that is already set by the browser [has no effect](https://www.w3.org/TR/using-aria/#aria-does-nothing) and is redundant.

```svelte
<!-- A11y: Redundant role 'button' -->
<button role="button">...</button>

<!-- A11y: Redundant role 'img' -->
<img role="img" src="foo.jpg" />
```

### a11y_no_static_element_interactions

```
`<%element%>` with a %handler% handler must have an ARIA role
```

Elements like `<div>` with interactive handlers like `click` must have an ARIA role.

<!-- prettier-ignore -->
```svelte
<!-- A11y: <div> with click handler must have an ARIA role -->
<div onclick={() => ''}></div>
```

### a11y_positive_tabindex

```
Avoid tabindex values above zero
```

Avoid positive `tabindex` property values. This will move elements out of the expected tab order, creating a confusing experience for keyboard users.

<!-- prettier-ignore -->
```svelte
<!-- A11y: avoid tabindex values above zero -->
<div tabindex="1"></div>
```

### a11y_role_has_required_aria_props

```
Elements with the ARIA role "%role%" must have the following attributes defined: %props%
```

Elements with ARIA roles must have all required attributes for that role.

```svelte
<!-- A11y: A11y: Elements with the ARIA role "checkbox" must have the following attributes defined: "aria-checked" -->
<span role="checkbox" aria-labelledby="foo" tabindex="0"></span>
```

### a11y_role_supports_aria_props

```
The attribute '%attribute%' is not supported by the role '%role%'
```

Elements with explicit or implicit roles defined contain only `aria-*` properties supported by that role.

```svelte
<!-- A11y: The attribute 'aria-multiline' is not supported by the role 'link'. -->
<div role="link" aria-multiline></div>

<!-- A11y: The attribute 'aria-required' is not supported by the role 'listitem'. This role is implicit on the element <li>. -->
<li aria-required></li>
```

### a11y_role_supports_aria_props_implicit

```
The attribute '%attribute%' is not supported by the role '%role%'. This role is implicit on the element `<%name%>`
```

Elements with explicit or implicit roles defined contain only `aria-*` properties supported by that role.

```svelte
<!-- A11y: The attribute 'aria-multiline' is not supported by the role 'link'. -->
<div role="link" aria-multiline></div>

<!-- A11y: The attribute 'aria-required' is not supported by the role 'listitem'. This role is implicit on the element <li>. -->
<li aria-required></li>
```

### a11y_unknown_aria_attribute

```
Unknown aria attribute 'aria-%attribute%'
```

```
Unknown aria attribute 'aria-%attribute%'. Did you mean '%suggestion%'?
```

Enforce that only known ARIA attributes are used. This is based on the [WAI-ARIA States and Properties spec](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties).

```svelte
<!-- A11y: Unknown aria attribute 'aria-labeledby' (did you mean 'labelledby'?) -->
<input type="image" aria-labeledby="foo" />
```

### a11y_unknown_role

```
Unknown role '%role%'
```

```
Unknown role '%role%'. Did you mean '%suggestion%'?
```

Elements with ARIA roles must use a valid, non-abstract ARIA role. A reference to role definitions can be found at [WAI-ARIA](https://www.w3.org/TR/wai-aria/#role_definitions) site.

<!-- prettier-ignore -->
```svelte
<!-- A11y: Unknown role 'toooltip' (did you mean 'tooltip'?) -->
<div role="toooltip"></div>
```

### attribute_avoid_is

```
The "is" attribute is not supported cross-browser and should be avoided
```

### attribute_global_event_reference

```
You are referencing `globalThis.%name%`. Did you forget to declare a variable with that name?
```

### attribute_illegal_colon

```
Attributes should not contain ':' characters to prevent ambiguity with Svelte directives
```

### attribute_invalid_property_name

```
'%wrong%' is not a valid HTML attribute. Did you mean '%right%'?
```

### attribute_quoted

```
Quoted attributes on components and custom elements will be stringified in a future version of Svelte. If this isn't what you want, remove the quotes
```

### bind_invalid_each_rest

```
The rest operator (...) will create a new object and binding '%name%' with the original object will not work
```

### block_empty

```
Empty block
```

### component_name_lowercase

```
`<%name%>` will be treated as an HTML element unless it begins with a capital letter
```

### css_unused_selector

```
Unused CSS selector "%name%"
```

### element_invalid_self_closing_tag

```
Self-closing HTML tags for non-void elements are ambiguous — use `<%name% ...></%name%>` rather than `<%name% ... />`
```

### event_directive_deprecated

```
Using `on:%name%` to listen to the %name% event is deprecated. Use the event attribute `on%name%` instead
```

### export_let_unused

```
Component has unused export property '%name%'. If it is for external reference only, please consider using `export const %name%`
```

### legacy_code

```
`%code%` is no longer valid — please use `%suggestion%` instead
```

### legacy_component_creation

```
Svelte 5 components are no longer classes. Instantiate them using `mount` or `hydrate` (imported from 'svelte') instead.
```

### node_invalid_placement_ssr

```
%thing% is invalid inside `<%parent%>`. When rendering this component on the server, the resulting HTML will be modified by the browser, likely resulting in a `hydration_mismatch` warning
```

HTML restricts where certain elements can appear. In case of a violation the browser will 'repair' the HTML in a way that breaks Svelte's assumptions about the structure of your components. Some examples:

- `<p>hello <div>world</div></p>` will result in `<p>hello </p><div>world</div><p></p>` for example (the `<div>` autoclosed the `<p>` because `<p>` cannot contain block-level elements)
- `<option><div>option a</div></option>` will result in `<option>option a</option>` (the `<div>` is removed)
- `<table><tr><td>cell</td></tr></table>` will result in `<table><tbody><tr><td>cell</td></tr></tbody></table>` (a `<tbody>` is auto-inserted)

This code will work when the component is rendered on the client (which is why this is a warning rather than an error), but if you use server rendering it will cause hydration to fail.

### non_reactive_update

```
`%name%` is updated, but is not declared with `$state(...)`. Changing its value will not correctly trigger updates
```

### options_deprecated_accessors

```
The `accessors` option has been deprecated. It will have no effect in runes mode
```

### options_deprecated_immutable

```
The `immutable` option has been deprecated. It will have no effect in runes mode
```

### options_missing_custom_element

```
The `customElement` option is used when generating a custom element. Did you forget the `customElement: true` compile option?
```

### options_removed_enable_sourcemap

```
The `enableSourcemap` option has been removed. Source maps are always generated now, and tooling can choose to ignore them
```

### options_removed_hydratable

```
The `hydratable` option has been removed. Svelte components are always hydratable now
```

### options_removed_loop_guard_timeout

```
The `loopGuardTimeout` option has been removed
```

### options_renamed_ssr_dom

```
`generate: "dom"` and `generate: "ssr"` options have been renamed to "client" and "server" respectively
```

### perf_avoid_inline_class

```
Avoid 'new class' — instead, declare the class at the top level scope
```

### perf_avoid_nested_class

```
Avoid declaring classes below the top level scope
```

### reactive_declaration_invalid_placement

```
Reactive declarations only exist at the top level of the instance script
```

### reactive_declaration_module_script_dependency

```
Reassignments of module-level declarations will not cause reactive statements to update
```

### reactive_declaration_non_reactive_property

```
Properties of objects and arrays are not reactive unless in runes mode. Changes to this property will not cause the reactive statement to update
```

### script_context_deprecated

```
`context="module"` is deprecated, use the `module` attribute instead
```

### script_unknown_attribute

```
Unrecognized attribute — should be one of `generics`, `lang` or `module`. If this exists for a preprocessor, ensure that the preprocessor removes it
```

### slot_element_deprecated

```
Using `<slot>` to render parent content is deprecated. Use `{@render ...}` tags instead
```

### state_referenced_locally

```
State referenced in its own scope will never update. Did you mean to reference it inside a closure?
```

### store_rune_conflict

```
It looks like you're using the `$%name%` rune, but there is a local binding called `%name%`. Referencing a local variable with a `$` prefix will create a store subscription. Please rename `%name%` to avoid the ambiguity
```

### svelte_component_deprecated

```
`<svelte:component>` is deprecated in runes mode — components are dynamic by default
```

In previous versions of Svelte, the component constructor was fixed when the component was rendered. In other words, if you wanted `<X>` to re-render when `X` changed, you would either have to use `<svelte:component this={X}>` or put the component inside a `{#key X}...{/key}` block.

In Svelte 5 this is no longer true — if `X` changes, `<X>` re-renders.

In some cases `<object.property>` syntax can be used as a replacement; a lowercased variable with property access is recognized as a component in Svelte 5.

For complex component resolution logic, an intermediary, capitalized variable may be necessary. E.g. in places where `@const` can be used:

```diff
{#each items as item}
-	<svelte:component this={item.condition ? Y : Z} />
+	{@const Component = item.condition ? Y : Z}
+	<Component />
{/each}
```

A derived value may be used in other contexts:

```diff
<script>
	...
	let condition = $state(false);
+	const Component = $derived(condition ? Y : Z);
</script>
- <svelte:component this={condition ? Y : Z} />
+ <Component />
```

### svelte_element_invalid_this

```
`this` should be an `{expression}`. Using a string attribute value will cause an error in future versions of Svelte
```

### svelte_self_deprecated

```
`<svelte:self>` is deprecated — use self-imports (e.g. `import %name% from './%basename%'`) instead
```

### unknown_code

```
`%code%` is not a recognised code
```

```
`%code%` is not a recognised code (did you mean `%suggestion%`?)
```
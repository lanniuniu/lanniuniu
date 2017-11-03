/**
 * Created by 懒牛牛 on 2017/11/3.
 */

/*
标签是一些特殊的区块，它们可以对模板执行一些操作。
if

if 为分支语句，与 javascript 中的 if 类似。

{% if variable %}
  It is true
{% endif %}

{% if hungry %}
  I am hungry
{% elif tired %}
  I am tired
{% else %}
  I am good!
{% endif %}
 */

/*
for

for 可以遍历数组 (arrays) 和对象 (dictionaries)。

{% for %}
{% endfor %}

 */

/*
asyncEach
asyncEach 为 for 的异步版本，只有当使用自定义异步模板加载器的时候才使用，否则请不要使用。
异步过滤器和扩展也需要他。如果你在循环中使用了异步过滤器的话，Nunjucks就会在内部自动将循环转换成 asyncEach。
 */

/*
asyncAll
asyncAll 和 asyncEach 类似，但 asyncAll 会并行的执行，并且每项的顺序仍然会保留。除非使用异步的过滤器、扩展或加载器，否则不要使用。

如果你写了一个 lookup 的过滤器用来从数据库获取一些文本，使用 asyncAll 可以并行渲染。
 */

/*
macro

宏 (macro) 可以定义可复用的内容，类似与编程语言中的函数

{% macro field(name, value='', type='text') %}
<div class="field">
  <input type="{{ type }}" name="{{ name }}"
         value="{{ value | escape }}" />
</div>
{% endmacro %}
现在 field 可以当作函数一样使用了：

{{ field('user') }}
{{ field('pass', type='password') }}
 */

/*
set

set 可以设置和修改变量。

{{ username }}
{% set username = "joe" %}
{{ username }}
 */

/*
extends
 */
/*
block
 */

/*
include
include 可引入其他的模板，可以在多模板之间共享一些小模板，如果某个模板已使用了继承那么 include 将会非常有用。

{% include "item.html" %}
可在循环中引入模板

{% for item in items %}
{% include "item.html" %}
{% endfor %}
 */

/*
import

import 可加载不同的模板，可使你操作模板输出的数据，模板将会输出宏 (macro) 和在顶级作用域进行的赋值 (使用 set)。

被 import 进来的模板没有当前模板的上下文，所以无法使用当前模板的变量，
 */

/*
raw

如果你想输出一些 Nunjucks 特殊的标签 (如 {{)，可以使用 {{)，可以使用 {% raw %} 将所有的内容输出为纯文本。
 */

/*
filter

filter区块允许我们使用区块中的内容来调用过滤器。不同于使用|语法，它会将区块渲染出的内容传递给过滤器。
 */

/*
call

call区块允许你使用标签之间的内容来调用一个宏。这在你需要给宏传入大量内容时是十分有用的。在宏中，你可以通过caller()来获取这些内容。

 */


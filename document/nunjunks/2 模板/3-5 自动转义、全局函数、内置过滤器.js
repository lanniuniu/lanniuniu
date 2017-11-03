/**
 * Created by 懒牛牛 on 2017/11/3.
 */

/*
自动转义 (Autoescaping)

如果在环境变量中设置了 autoescaping，所有的输出都会自动转义，但可以使用 safe 过滤器，Nunjucks 就不会转义了。

如果未开启 autoescaping，所有的输出都会如实输出，但可以使用 escape 过滤器来转义。

 */

/*
内置的全局函数
range([start], stop, [step])

如果你需要遍历固定范围的数字可以使用 range，start (默认为 0) 为起始数字，stop 为结束数字，step 为间隔 (默认为 1)。

cycler(item1, item2, ...itemN)

cycler 可以循环调用你指定的一系列的值。

joiner([separator])

当合并多项的时候，希望在他们之间又分隔符 (像逗号)，但又不希望第一项也输出。joiner 将输出分割符 (默认为 ",") 除了第一次调用。

 */

/*
内置的过滤器

default(value, default, [boolean])

(简写为 d)

如果value全等于undefined则返回default，否则返回value。 如果boolean为true，则会在value为JavaScript中的假值时（比如：false, ""等）返回default。

sort(arr, reverse, caseSens, attr)

用JavaScript中的arr.sort函数排序arr。如果reverse为true，则会返回相反的 排序结果。默认状态下排序不会区分大小写，但你可以将caseSens设置为true来让排序 区分大小写。我们可以用attr来指定要比较的属性。

striptags (value, [preserve_linebreaks])

类似于jinja中的striptags. 如果preserve_linebreaks为false（同时也是默认值），则会移去SGML/XML标签并用一个空格符 替换临近的、连续的空白符号。如果preserve_linebreaks为true，则会尝试保留临近的空白符号。 如果你希望使用管道操作符进行类似于{{ text | striptags | nl2br }}这样的操作时，你就会 需要用到后一种。否则你还是应该使用默认的用法。

dump (object)

在一个对象上调用JSON.stringify，并将结果输出到模板上。这在调试时很有用：{{ foo | dump }}。

还有许多过滤器
 */



/*
FormBuilder
建立表单
constructor中引用建立表单的方法

多级FormGroup  在相同的FormBuilder中建立新的表单  子表单

使用 .get() 方法来提取表单中一个单独 FormControl 的状态
value  FormControl 的值。

status  FormControl 的有效性。可能的值有 VALID、INVALID、PENDING 或 DISABLED。

pristine  如果用户尚未改变过这个控件的值，则为 true。它总是与 myControl.dirty 相反。

untouched 如果用户尚未进入这个 HTML 控件，也没有触发过它的 blur（失去焦点）事件，则为 true。 它是 myControl.touched 的反义词。

使用 setValue() 完整修改 和 patchValue()部分修改 来操纵表单模型

control.valueChanges 使用control监听值的变化
 */
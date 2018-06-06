/*
组件的元数据

@Component({
    selector: 'app-hero-list',//css选择器，告诉模板可以使用这个标签来显示这个组件
    templateUrl: './hero-list.component.html',//该组件的 HTML 模板文件相对于这个组件文件的地址
    providers:  [ HeroService ]//当前组件所需的依赖注入提供商的一个数组，它告诉 Angular，该组件的构造函数需要一个 HeroService 实例，以获取要显示的英雄列表。
})
export class HeroListComponent implements OnInit {
    ...
}
 */

/*
模板语法
类似经典HTML
{{}}插值表达式
[hero]="selectedHero" 将父组件selectedHero传到子组件hero属性中
() 监听器
 [(ngModel)] 指令
 */

/*
管道
可以让你在模板中声明显示值的转换逻辑。
带有 @Pipe 装饰器的类中会定义一个转换函数，用来把输入值转换成供视图显示用的输出值。
| 管道操作符
 */

/*
指令
指令就是一个带有 @Directive 装饰器的类。
分为结构性指令（*ngFor、*ngIf）和属性型指令([(ngModel)])
 */


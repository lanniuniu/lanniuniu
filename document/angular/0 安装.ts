/*
安装
1.全局安装 npm install -g @angular/cli
2.创建新的项目
3.启动开发服务器 ng serve --open
 */

/*
组件
1.组件修饰器中selector 定义的可以作为template的标签名。
    例如,如果selector: 'hero'，那么 template中使用<hero></hero>引入
2.模板渲染方面和vue一样，可以加入过滤器
3.使用 [(ngModel)] 进行双向绑定，使用前需要导入 FormsModule
4.使用ng generate component hero-detail 添加一个叫做hero-detail的组件
 */

/*
指令事件等模板操作
1.*ngFor 循环渲染
2.事件绑定 (click)="onSelect()"
3.*ngIf 条件渲染
4.样式选择 [class.selected]="hero === selectedHero" 如果hero===selectedHero,那么就有selected这个样式
5.[hero]="selectedHero" 是 Angular 的属性绑定语法，属于单向绑定
 */
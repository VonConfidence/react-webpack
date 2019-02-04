## 对于 React.PureComponent 组件函数传递渲染情况探讨

1. 对于给子组件传递函数的时候, 方式如下

   ```jsx
   // Parent.js (class Parent extends React.Component)
   state = { a : 1}
   changeA = ()=> {
     this.setState({a:2});
   }
   handle1() {}
   handle2=()=> {}

   render() {
     return (
       <div>
        <button onClick={this.changeA}>Change Parent State</button>
        <PureChildren myfunc={this.handle1} text="handle1 no-arrow" />
        <PureChildren myfunc={() => this.handle1} text="handle1 with-arrow" />

        <PureChildren myfunc={this.handle2} text="handle2 no-arrow" />
        <PureChildren myfunc={() => this.handle2} text="handle2 with-arrow" />
       </div>
     );
   }
   ```

2. 上述代码输出结果

   ```jsx
   // 点击change parent state按钮, 修改parent组件的state, 打印结果如下
   PageA render
   handle1 with-arrow PureChildren Render
   handle2 with-arrow PureChildren Render
   ```

## PureComponent 引用

```js
export default class PageB extends React.PureComponent {
  // 将PureComponebt改成Component看看效果
  state = {
    items: [{ a: 1 }, { a: 2 }, { a: 3 }],
  };
  handleClick = () => {
    const { items } = this.state;
    // items[0].a = 3;
    // items.pop();
    items.splice(items.length - 1, 1);
    this.setState({ items });
    // this.setState({ items: [...items] });
  };
  render() {
    console.log('Parent Rendering', this.state.items);
    return (
      <div>
        <ul>
          {this.state.items.map(i => (
            // <li key={i}>{i}</li>
            <li key={i.a}>{i.a}</li>
          ))}
        </ul>
        {/* <div>{this.state.item[0].a}</div> */}
        <button onClick={this.handleClick}>delete</button>
      </div>
    );
  }
}
```

点击上述 delete 按钮, 发现节点 li 并没有删除, 这是因为 PureComponent 帮助我们进行了一个简单的 diff, 发现 nextState.items === prevState.items 为 true, 因为 items 是引用关系, 所以如果在 PureComponent 组件下, 需要重新创建一个新数组

```
handleClick = () => {
  const { items } = this.state;
  items.pop();
  this.setState({ items: [...items] });
};
```

## 固定空对象

```js
export default class PageC extends React.Component {
  static obj = {};

  state = {
    c: '3',
  };

  handleClick = () => {
    this.setState({
      c: '4',
    });
  };

  render() {
    // const obj = {}; // 对象放在这里, 每一次渲染都是一个新对象, 所以会造成PureComponent 的重新渲染
    return (
      <div>
        <button onClick={this.handleClick}>PageC {this.state.c}</button>
        <PureComponent obj={PageC.obj} />
      </div>
    );
  }
}
```

点击 PageC 按钮的时候, 组件状态更新, 如果使用 render 中定义的 obj, 每次传递给 PureComponent 组件的属性 obj 都是一个新的对象, 所以会造成 PureComponent 的 re-render

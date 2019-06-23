import React from 'react';
import * as RRWeb from 'rrweb';
import rrwebPlayer from 'rrweb-player';
import './rrweb.css';

export default class RRWebDemo extends React.Component {
  constructor(props) {
    super(props);
    this.events = [];
    this.stopFn = null;
  }

  // 开始录制
  startRecord() {
    console.log('开始录制');
    const vm = this;
    vm.stopFn = RRWeb.record({
      emit(event) {
        /*
        if (this.events.length  > 100) {
          this.stopFn();
        }
        */
        // 用任意方式存储 event
        console.log(vm.events.length, ': ', event);
        vm.events.push(event);
      },
    });
  }

  // 暂停录制
  stopRecord() {
    if (this.stopFn) {
      console.log('暂停录制: ', this.events);
      this.stopFn();
    }
  }

  saveRecord() {
    if (this.events.length > 0) {
      console.log(this.events);
      const body = JSON.stringify({ events: this.events, });
      fetch('http://localhost:3000/uploadRecordEvents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    }
  }

  // 回放数据
  replayRecord() {
    const vm = this;
    fetch('http://localhost:3000/getRecordEvents')
      .then(res => res.json())
      .then(res => {
        console.log('回放数据', res.data);
        if (Array.isArray(res.data) && res.data.length >= 2) {
          // const replayer = new RRWeb.Replayer(res.data);
          // replayer.play();
          const events = res.data;
          const player = new rrwebPlayer({
            target: document.body, // 可以自定义 DOM 元素
            data: {
              events,
            },
          });
          console.log(player)
        } else {
          alert('回放的数据长度太短');
        }
      });
  }

  // 清除远程数据记录
  clearRecord() {
    fetch('http://localhost:3000/clearRecordEvents')
      .then(res => res.json())
      .then(res => {
        alert(res.msg);
      });
  }

  // 渲染函数
  render() {
    return (
      <div className="rrweb-container"
        id="rrweb-replay-container"
      >
        <header>RRWeb测试</header>
        <form action="/style"
          className="form"
        >
          <div>
            <label>
              姓名: <input type="text" />
            </label>
          </div>
          <div>
            <label>
              语言: <input type="text" />
            </label>
          </div>
          <div>
            <label>
              密码: <input type="password" />
            </label>
          </div>
          <div>
            <label>
              登录: <input type="submit" />
            </label>
          </div>
        </form>
        <div className="footer">
          <button onClick={this.startRecord.bind(this)}>开始录制</button>
          <button onClick={this.stopRecord.bind(this)}>结束录制</button>
          <button onClick={this.saveRecord.bind(this)}>保存录制</button>
          <button onClick={this.replayRecord.bind(this)}>回放录制</button>
          <button onClick={this.clearRecord.bind(this)}>清除数据</button>
        </div>
      </div>
    );
  }
}

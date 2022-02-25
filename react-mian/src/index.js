import render from "./App"
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: '$microAppname',      // 微应用package.json name字段，微应用名称标识
    entry: 'http://111.67.199.122:3000',  // 微应用服务器地址
    container: '#container',    // 微应用dom容器，根元素
    activeRule: '/courses',     // 匹配路由展示微应用
  }
]);

start();

render();

import './public-path';
import ReactDOM from 'react-dom';
import render from "./App"

function microRender(props) {
    const { container } = props;
    render(
        window.__POWERED_BY_QIANKUN__ ? '/courses' : '/',
        container ? container.querySelector('#root') : document.querySelector('#root')
    )
};

if (!window.__POWERED_BY_QIANKUN__) {
    microRender({});
}

export async function bootstrap() {
    console.log(' react app bootstraped');
}

export async function mount(props) {
    console.log('props from main framework', props);
    microRender(props);
}

export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
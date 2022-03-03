import { reactive, toRefs } from 'vue';
interface timeProps{
    title: string,
    nowTime: string,
    getNowTime: () => void
}
const timeData: timeProps = reactive({
    title: '时间显示模块',
    nowTime: '00:00:00',
    getNowTime: () => {
        const now = new Date();
        const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
        const mint = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
        const sec = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
        timeData.nowTime = hour + ':' + mint + ';' + sec;
        setInterval(timeData.getNowTime, 1000);
    }
})
const data = toRefs(timeData);
export {data}
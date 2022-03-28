import TabsHead from "../src/tabs-head";

const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsBody from "../src/tabs-body";
import TabsItem from "../src/tabs-item";
import TabsPane from "../src/tabs-pane";
import tabs from "../src/tabs";
import tabsItem from "../src/tabs-item";
import sinon from "sinon";

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })

    it('接受selected属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs-head selected="首页">
            <g-tabs-item name="首页">首页</g-tabs-item>
            <g-tabs-item name="消息">消息</g-tabs-item>
            <g-tabs-item name="设置">设置</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="首页">首页内容</g-tabs-pane>
            <g-tabs-pane name="消息">消息内容</g-tabs-pane>
            <g-tabs-pane name="设置">设置内容</g-tabs-pane>
        </g-tabs-body>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            expect(vm.$el.querySelectorAll('.g-tabs-head-item').length).to.equal(3)
            let x = vm.$el.querySelector(`.tabs-item[data-name='首页']`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    });
    it('接受direction属性', function () {

    });


})

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })

    it('接受name属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: '首页'
            }
        }).$mount()
        console.log(vm.$el.getAttribute('data-name'));
        expect(vm.$el.getAttribute('data-name')).to.eq('首页')
    })

    it('接受disabled属性 ', function () {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    });
})
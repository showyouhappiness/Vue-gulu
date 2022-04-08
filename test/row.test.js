
const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/grid/row'
import Col from '../src/grid/col'
import Button from "../src/button/button";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('接受gutter属性', (done) => {  //测试内如果有异步，就需要在参数里面加done
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-row gutter="20">
             <g-col span="12"></g-col>
             <g-col span="12"></g-col>
        </g-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            console.log(vm.$el.outerHTML)
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft.to.eq('-10px'))
            expect(getComputedStyle(row).marginRight.to.eq('-10px'))
            const cols = vm.$el.querySelector('.col')
            expect(getComputedStyle(cols).marginLeft.to.eq('10px'))
            expect(getComputedStyle(cols).marginRight.to.eq('10px'))
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    it('接收align属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'center',
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent.to.eq('center'))
        div.remove()
        vm.$destroy()
    });
})
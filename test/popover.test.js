import Col from "../src/grid/col";

const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {


    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('可以设置position.', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover position="bottom" ref="a">
            <template v-slot:content>
                弹出内容
            </template>
            <button>点我</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        setTimeout(() => {
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        }, 500)
    })
    xit('可以设置trigger.', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover trigger="hover" ref="a">
            <template v-slot:content>
                弹出内容
            </template>
            <button>点我</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick = () => {
            let event = new Event('mouseenter')
            vm.$el.querySelector('button').dispatchEvent(event)
            setTimeout(() => {
                expect(vm.$refs.a.visible).to.be.true
                done()
            }, 500)
        }
    })
})
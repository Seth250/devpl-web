import { shallowMount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import DashBoard from '@/components/DashBoard.vue'
import store from '@/store'

const localVue = createLocalVue()

describe('DashBoard.vue', () => {
  it('is instantiated', () => {
    const wrapper = shallowMount(DashBoard, {
      localVue,
      router,
      store
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})
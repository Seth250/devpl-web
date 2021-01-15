import { shallowMount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import PageView from '@/components/PageView.vue'
import store from '@/store'

const localVue = createLocalVue()

describe('PageView.vue', () => {
  it('is instantiated', () => {
    const wrapper = shallowMount(PageView, {
      localVue,
			router,
      store
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})
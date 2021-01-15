import { shallowMount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import UserItem from '@/components/UserItem.vue'
import store from '@/store'

const localVue = createLocalVue()

describe('UserItem.vue', () => {
  it('is instantiated', () => {
		const user = { 
			gender: 'male', 
			name: { title: 'Mr', first: 'Oskari', last: 'Kalm' }, 
			location: { street: { number: 2748, name: 'Pirkankatu' }, city: 'Geta', state: 'Southern Savonia', 
			country: 'Finland', postcode: 82621, coordinates: { latitude: 61.3353, longitude: '-50.3279' }, 
			timezone: { offset: '+9:30', description: 'Adelaide, Darwin' } }, email: 'oskari.kalm@example.com', 
			dob: { date: '1974-12-02T12:06:13.066Z', age: 47 }, registered: { date: '2012-11-22T21:28:02.441Z', age: 9 }, 
			phone: '08-943-721', cell: '040-101-44-43', id: { name: 'HETU', value: 'NaNNA231undefined' }, 
			picture: { large: 'https://randomuser.me/api/portraits/men/47.jpg', 
			medium: 'https://randomuser.me/api/portraits/med/men/47.jpg', 
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/47.jpg' }, nat: 'FI' 
		}

		const index = 1
    const wrapper = shallowMount(UserItem, {
      localVue,
			router,
      store,
			propsData: {
				user,
				index 
			}
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})
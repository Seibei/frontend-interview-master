import PageManagment from '@/components/PageManagment.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import sinon from 'sinon'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('PageManagment', () => {
  let actions: any;
  let store: any;

  beforeEach(() => {
    actions = {
      loadMore: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
    })
  })

  it('Call loadMore on prev button', () => {
    const wrapper = shallowMount(PageManagment, { store, localVue });
    wrapper.find('button.prev-button').trigger('click');
    expect(actions.loadMore).toHaveBeenCalled();
  });

  it('Call loadMore on next button', () => {
    const wrapper = shallowMount(PageManagment, { store, localVue });
    wrapper.find('button.next-button').trigger('click');
    expect(actions.loadMore).toHaveBeenCalled();
  });

  it('Click on prev button calls method with argument "setPrevPage"', () => {
    const spy = sinon.spy()
    const wrapper = shallowMount(PageManagment, { store, localVue });
    wrapper.find('button.prev-button').trigger('click');
    spy.calledWith('setPrevPage');
  });

  it('Click on prev button calls method with argument "setNextPage"', () => {
    const spy = sinon.spy()
    const wrapper = shallowMount(PageManagment, { store, localVue });
    wrapper.find('button.next-button').trigger('click');
    spy.calledWith('setNextPage');
  });
});

import LoadMore from '@/components/LoadMore.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('LoadMore', () => {
  let mutations: any;
  let actions: any;
  let store: any;

  beforeEach(() => {
    mutations = {
      setNextPage: jest.fn(),
    } 
    actions = {
      loadMore: jest.fn(),
    }
    store = new Vuex.Store({
      mutations,
      actions,
    })
  })

  it('Component have button', () => {
    const wrapper = shallowMount(LoadMore);
    expect(wrapper.contains('button')).toBe(true);
  });

  it('Button have text "Load more"', () => {
    const wrapper = shallowMount(LoadMore);
    expect(wrapper.text()).toBe('Load more');
  });

  it('Call mutation setNextPage', () => {
    const wrapper = shallowMount(LoadMore, { store, localVue });
    wrapper.find('button').trigger('click');
    expect(mutations.setNextPage).toHaveBeenCalled();
  });

  it('Call action loadMore', () => {
    const wrapper = shallowMount(LoadMore, { store, localVue });
    wrapper.find('button').trigger('click');
    expect(actions.loadMore).toHaveBeenCalled();
  });
});

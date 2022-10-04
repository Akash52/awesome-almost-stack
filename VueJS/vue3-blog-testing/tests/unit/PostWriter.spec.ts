import { flushPromises, mount } from '@vue/test-utils';
import PostWriter from '../../src/components/PostWriter.vue';

describe('PostWriter', () => {
  it('emits a save event with the new post', async (done) => {
    const wrapper = mount(PostWriter, {
      props: {
        post: {
          title: 'New Post',
        },
      },
    });

    await wrapper.find('[data-test="title"]').setValue('New Post');
    const $content = wrapper.find<HTMLDivElement>('[data-test="content"]');
    $content.element.innerText = '## Hello World';
    await $content.trigger('input');

    setTimeout(async () => {
      await wrapper.find('[data-test="submit"]').trigger('click');

      const emmitted = (wrapper.emitted()['save'] as any)[0][0];
      console.log(emmitted);

      expect(emmitted.title).toBe('New Post');
      expect(emmitted.markdown).toBe('## Hello World');
      expect(emmitted.html).toBe('<h2 id="hello-world">Hello World</h2>\n');
      done();
    }, 300);
  });
});

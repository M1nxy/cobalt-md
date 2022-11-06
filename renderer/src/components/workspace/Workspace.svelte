<script>
  import Editor from '../editor/Editor.svelte';
  import Renderer from '../renderer/renderer.svelte';
  import Toggle from '../toolbar/Toggle.svelte';
  import Tabs from '../toolbar/Tabs.svelte';
  import { test_markdown_checkbox } from './temp-test';

  export let editorThemes;

  let viewState = 1;
  let currentTab = 0;
  let tabs = [];

  function createTab(tabData) {
    tabs.push(tabData);
  }

  createTab({
    name: 'test.md',
    value: "# test\n```js\nconsole.log('test')\n```",
  });
  createTab({
    name: 'test2.md',
    value: test_markdown_checkbox,
  });

  function setValue({ detail }) {
    console.log(detail.value);
    tabs[currentTab].value = detail.value;

    console.log(tabs);
  }

  function viewUpdate({ detail }) {
    viewState = detail.state;
  }
  function tabUpdate({ detail }) {
    currentTab = detail.activeTab;
  }
</script>

<div id="workspace">
  <span class="flex justify-between">
    <Tabs {tabs} on:tabUpdate={tabUpdate} />
    <Toggle on:viewUpdate={viewUpdate} />
  </span>
  {#key currentTab}
    {#if tabs.length > 0}
      <div id="workspace-content">
        {#if viewState === 1}
          <Editor
            value={tabs[currentTab].value}
            minimap={false}
            theme="tomorrow-night"
            themes={editorThemes}
            on:editorUpdate={setValue}
          />
        {:else if viewState === 2}
          <Editor
            value={tabs[currentTab].value}
            minimap={false}
            theme="tomorrow-night"
            themes={editorThemes}
            on:editorUpdate={setValue}
          />
          <Renderer value={tabs[currentTab].value} />
        {:else}
          <Renderer value={tabs[currentTab].value} />
        {/if}
      </div>
    {:else}
      <div />
    {/if}
  {/key}
</div>

<style>
  #workspace {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  #workspace-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  #workspace-content {
    transition: width 2s, height 2s, transform 2s;
  }
</style>

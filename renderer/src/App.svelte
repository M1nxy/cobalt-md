<script>
  import Workspace from './components/workspace/Workspace.svelte';
  import monokai from '@/assets/themes/monokai.json';
  import tomorrowNight from '@/assets/themes/tomorrow-night.json';

  let editorThemes = [
    { name: 'monokai', data: monokai },
    { name: 'tomorrow-night', data: tomorrowNight },
  ];
</script>

<main
  id="app"
  class="flex flex-col w-screen h-screen"
  style=" --editorBackground: {monokai.colors['editor.background']}"
>
  <Workspace {editorThemes} />
</main>

<style>
  #app {
    height: 100vh;
    width: 100vw;
  }
</style>

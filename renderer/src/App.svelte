<script>
    import Workspace from "./components/workspace/Workspace.svelte";
    import monokai from "@/assets/themes/monokai.json";
    import tomorrowNight from "@/assets/themes/tomorrow-night.json";
    import { onMount } from "svelte";
</script>

<main
    id="app"
    class="flex flex-col w-screen h-screen"
    style=" --editorBackground: {monokai.colors['editor.background']}"
>
    <Workspace />
</main>

<style>
    #app {
        height: 100vh;
        width: 100vw;
    }
</style>

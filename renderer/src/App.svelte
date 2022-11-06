<script>
    import Editor from "./components/editor/Editor.svelte";
    import Workspace from "./components/workspace/Panel.svelte";
    import Renderer from "./components/renderer/renderer.svelte";
    import monokai from "./assets/themes/monokai.json";
    import tomorrowNight from "./assets/themes/tomorrow-night.json";

    let editorThemes = [
        { name: "monokai", data: monokai },
        { name: "tomorrow-night", data: tomorrowNight },
    ];

    let editor = {
        props: {
            value: "#test\n```js\nconsole.log('test');\n```",
            minimap: false,
            theme: "tomorrow-night",
            themes: editorThemes,
        },
        component: Editor,
    };

    let renderer = {
        props: {
            value: "test",
        },
        component: Renderer,
    };

    const title = "Change";
</script>

<main id="app" class="flex w-screen h-screen">
    <Workspace {editor} {renderer} />
</main>

<style>
    #app {
        height: 100vh;
        width: 100vw;
    }
</style>

<script>
    import Editor from "../editor/Editor.svelte";
    import Renderer from "../renderer/renderer.svelte";
    import Toolbar from "../toolbar/Toolbar.svelte";

    import monokai from "@/assets/themes/monokai.json";
    import tomorrowNight from "@/assets/themes/tomorrow-night.json";

    let state = 1;
    let value = "# test\n```js\nconsole.log('test')\n```";

    let editorThemes = [
        { name: "monokai", data: monokai },
        { name: "tomorrow-night", data: tomorrowNight },
    ];

    function setValue({ detail }) {
        value = detail.value;
    }

    function viewUpdate({ detail }) {
        console.log(detail);
        state = detail.state;
    }
</script>

<div id="workspace">
    <Toolbar on:viewUpdate={viewUpdate} />
    <div id="workspace-content">
        {#if state === 1}
            <Editor
                {value}
                minimap={false}
                theme="tomorrow-night"
                themes={editorThemes}
                on:editorUpdate={setValue}
            />
        {:else if state === 2}
            <Editor
                {value}
                minimap={false}
                theme="tomorrow-night"
                themes={editorThemes}
                on:editorUpdate={setValue}
            />
            <Renderer />
        {:else}
            <Renderer />
        {/if}
    </div>
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

<script>
    import { onMount } from "svelte";
    import monaco from "./monaco/";

    import { MonacoMarkdownExtension } from "monaco-markdown";

    export let value = "";
    export let minimap = false;
    export let themes = [];
    export let theme = "vs-light";

    for (let theme of themes) {
        monaco.editor.defineTheme(theme.name, theme.data);
    }
    onMount(() => {
        let editor = monaco.editor.create(document.getElementById("editor"), {
            value,
            language: "markdown",
            minimap: {
                enabled: minimap,
            },
            extraEditorClassName: "editor",
            automaticLayout: true,
            theme: theme,
        });
        new MonacoMarkdownExtension().activate(editor);
    });
</script>

<div id="editor" />

<style>
    #editor {
        height: 100%;
        width: 100%;
    }
</style>

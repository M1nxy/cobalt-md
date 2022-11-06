<script>
    import { onMount, createEventDispatcher } from "svelte";
    import { MonacoMarkdownExtension } from "monaco-markdown";
    import monaco from "./monaco/";

    export let value = "";
    export let minimap = false;
    export let themes = [];
    export let theme = "vs-light";

    let dispatch = createEventDispatcher();

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

        editor.getModel().onDidChangeContent((event) => {
            dispatch("editorUpdate", {
                value: editor.getValue(),
            });
        });
    });
</script>

<div id="editor" />

<style>
    #editor {
        height: 100%;
        width: 100%;
    }
</style>

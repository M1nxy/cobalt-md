<script>
    import Toggle from "./Toggle.svelte";

    export let editor;
    export let renderer;
    let state = 1;

    function setState({ detail }) {
        state = detail.state;
    }
</script>

<div id="workspace">
    <div id="toolbar">
        <Toggle on:viewUpdate={setState} />
    </div>
    <div id="workspace-content">
        {#if state === 1}
            <svelte:component this={editor.component} {...editor.props} />
        {:else if state === 2}
            <svelte:component this={editor.component} {...editor.props} />
            <svelte:component this={renderer.component} {...renderer.props} />
        {:else}
            <svelte:component this={renderer.component} {...renderer.props} />
        {/if}
    </div>
</div>

<style>
    #toolbar {
        display: flex;
        flex-direction: row-reverse;
    }
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

<script>
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
    export let tabs = [];
    let activeTab = 0;

    let changeTab = (tab) => {
        activeTab = tab;
        dispatch("tabUpdate", {
            activeTab,
        });
    };
</script>

<div class="tabs w-full flex-nowrap">
    {#each tabs as tab, i}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            class="tab tab-lifted {activeTab === i ? 'tab-active' : ''}"
            on:click={() => changeTab(i)}
        >
            {tab.name}
        </a>
    {/each}
    <div class="h-full w-full flex-1" />
</div>

<style>
    a {
        --tab-border-color: #000;
    }

    .tab-active {
        --tab-bg: var(--editorBackground);
        background-color: var(--editorBackground);
    }
    .tabs > div {
        border-bottom: 1px solid #000;
    }
</style>

<script>
    import { createEventDispatcher } from "svelte";
    import Toggle from "./Toggle.svelte";
    import Tabs from "./Tabs.svelte";

    const dispatch = createEventDispatcher();

    const viewUpdate = ({ detail }) => {
        dispatch("viewUpdate", {
            state: detail.state,
        });
    };
</script>

<div>
    <span>
        <Toggle on:viewUpdate={viewUpdate} />
    </span>
</div>

<style>
</style>

<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const changeView = (state) => {
        dispatch("viewUpdate", {
            state,
        });
    };
</script>

<div class="btn-group">
    <div class="p-1">
        <input
            id="radio-1"
            class="radio-custom"
            name="radio-group"
            type="radio"
            checked
            on:change={() => {
                changeView(1);
            }}
        />
        <label for="radio-1">
            <img src="/icons/edit-2.svg" alt="edit" class="toggle-icon" />
        </label>
    </div>
    <div class="p-1">
        <input
            id="radio-2"
            class="radio-custom"
            name="radio-group"
            type="radio"
            on:change={() => {
                changeView(2);
            }}
        />
        <label for="radio-2">
            <img src="/icons/columns.svg" alt="edit" class="toggle-icon" />
        </label>
    </div>
    <div class="p-1">
        <input
            id="radio-3"
            class="radio-custom"
            name="radio-group"
            type="radio"
            on:change={() => {
                changeView(3);
            }}
        />
        <label for="radio-3">
            <img src="/icons/book-open.svg" alt="edit" class="toggle-icon" />
        </label>
    </div>
</div>

<style>
    .btn-group {
        align-items: center;
        border-bottom: 1px #000 solid;
    }
    input {
        display: none;
    }
    input:checked ~ label > img {
        filter: invert(1);
    }
    img {
        height: 1em;
        width: 1em;
    }
</style>

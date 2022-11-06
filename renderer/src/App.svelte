<script>
    import Workspace from "./components/workspace/Workspace.svelte";
    import monokai from "@/assets/themes/monokai.json";
    import tomorrowNight from "@/assets/themes/tomorrow-night.json";

    let editorThemes = [
        { name: "monokai", data: monokai },
        { name: "tomorrow-night", data: tomorrowNight },
    ];

    function saveDocument({ detail }) {
        let { file } = detail;
        console.log(file);
    }
</script>

<main
    id="app"
    class="flex flex-col w-screen h-screen bg-base-100 text-base-content"
    style=" --editorBackground: {monokai.colors['editor.background']}"
>
    <div class="flex flex-col h-full w-full">
        <div class="flex w-full justify-between relative grabbable">
            <div class="px-2">Cobalt</div>
            <div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="p-1">min</a>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="p-1">max</a>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="p-1">close</a>
            </div>
        </div>

        <div class="flex h-full w-full">
            <div class="h-full flex flex-col justify-between z-10">
                <div
                    class="tooltip tooltip-primary tooltip-right w-10 h-10 flex justify-center align-middle"
                    data-tip="Explorer"
                >
                    <img src="/icons/folder.svg" alt="folder" />
                </div>

                <div
                    class="tooltip tooltip-primary tooltip-right w-10 h-10 flex justify-center align-middle"
                    data-tip="Preferences"
                >
                    <img src="/icons/settings.svg" alt="settings" />
                </div>
            </div>
            <div id="slot" />
            <Workspace {editorThemes} on:saveDocument={saveDocument} />
        </div>
    </div>
</main>

<style>
    #app {
        height: 100vh;
        width: 100vw;
    }
    img {
        filter: invert(1) brightness(0.4);
        transition: ease 100ms;
    }
    img:hover {
        filter: invert(1) brightness(0.8);
    }
    .grabbable {
        -webkit-user-select: none;
        -webkit-app-region: drag;
    }
</style>

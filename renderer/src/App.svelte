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
        <div class="flex w-full justify-between relative">
            <div class="flex-1 grabbable flex items-center">
                <div class="px-2">Cobalt</div>
            </div>
            <div class="btn-group px-2 gap-1">
                <div
                    alt="window min"
                    class="toggle-icon w-6 h-6 min win-button"
                    on:click={window.app.minimize}
                />
                <div
                    alt="window max"
                    class="toggle-icon w-6 h-6 max win-button"
                    on:click={window.app.maximize}
                />
                <div
                    alt="window close"
                    class="toggle-icon w-4 h-4 close win-button"
                    on:click={window.app.close}
                />
            </div>
        </div>

        <div class="flex h-full w-full overflow-y-auto">
            <div class="h-full flex flex-col justify-between z-10">
                <div
                    class="tooltip tooltip-primary tooltip-right w-10 h-10 p-2 flex justify-center align-middle"
                    data-tip="Explorer"
                >
                    <img src="/icons/folder.svg" alt="folder" />
                </div>

                <div
                    class="tooltip tooltip-primary tooltip-right w-10 h-10 p-2 flex justify-center align-middle"
                    data-tip="Preferences"
                >
                    <img src="/icons/settings.svg" alt="settings" />
                </div>
            </div>
            <div id="slot overflow-hidden" />
            <Workspace {editorThemes} on:saveDocument={saveDocument} />
        </div>
    </div>
</main>

<style>
    #app {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    .btn-group {
        align-items: center;
    }
    .win-button {
        background-color: rgb(255, 255, 255, 0.8);
        mask-position: center;
        mask-repeat: no-repeat;
    }
    .min {
        mask-image: url(/icons/minus.svg);
        -webkit-mask-image: url(/icons/minus.svg);
        mask-size: 80%;
    }
    .max {
        mask-image: url(/icons/minus.svg);
        -webkit-mask-image: url(/icons/square.svg);
        mask-size: 60%;
    }
    .close {
        mask-image: url(/icons/x.svg);
        -webkit-mask-image: url(/icons/x.svg);
        mask-size: 120%;
    }
    .min:hover,
    .max:hover {
        background-color: rgb(255, 255, 255);
    }
    .close:hover {
        background-color: red;
    }
    .grabbable {
        user-select: none;
        -webkit-user-select: none;
        -webkit-app-region: drag;
    }
</style>

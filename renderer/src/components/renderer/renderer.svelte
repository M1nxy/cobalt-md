<script>
    import markdownit from "markdown-it";
    import { beforeUpdate } from "svelte";
    import mdTaskLists from "markdown-it-task-lists";
    export let value;

    let wrapper;
    let parsedHtml = "";

    if (window && window.Prism) {
        window.Prism.manual = true;
    }
    const defaultOptions = {
        langPrefix: "language-",
        html: true,
        linkify: true,
        typographer: true,
        highlight: handleWithPrePackedPrism,
    };

    function handleWithPrePackedPrism(code, lang) {
        if (!window.Prism) {
            return code;
        }
        try {
            const highlighted_html = window.Prism.highlight(
                code,
                window.Prism.languages[lang],
                lang
            );
            window.Prism.highlightAll();

            return highlighted_html;
        } catch (err) {
            console.log({ err, message: "Grammar Not Found" });
            return window.Prism.util.encode(code);
        }
    }

    const md = markdownit(defaultOptions);
    md.use(mdTaskLists, { label: true, enabled: true });

    beforeUpdate(() => {
        parsedHtml = md.render(value ?? "<div>Not Working</div>");
    });
</script>

<main class="bg-base-300 h-full w-full relative line-numbers overflow-auto p-2">
    <div>
        <div>
            {#if parsedHtml}
                <div bind:this={wrapper}>
                    {@html parsedHtml}
                </div>
            {/if}
        </div>
    </div>
</main>

<style>
</style>

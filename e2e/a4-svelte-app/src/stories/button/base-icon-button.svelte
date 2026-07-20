<script lang="ts">
    import { Button } from "@lifesg/react-design-system/core/svelte";

    const sizes = ["large", "default", "small"] as const;
    const styles = ["default", "secondary", "light", "link"] as const;
</script>

<div class="story-column-container">
    {#each sizes as size}
        <div class="story-row-container">
            {#each styles as style}
                <Button sizeType={size} styleType={style} iconOnly aria-label="{size} {style}">
                    &#9733;
                </Button>
            {/each}
            <Button sizeType={size} disabled iconOnly aria-label="{size} disabled">
                &#9733;
            </Button>
        </div>
    {/each}
</div>

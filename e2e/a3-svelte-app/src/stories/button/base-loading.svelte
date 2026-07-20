<script lang="ts">
    import { Button } from "@lifesg/react-design-system/svelte";

    const sizes = ["large", "default", "small"] as const;
    const styles = ["default", "secondary", "light", "link"] as const;
</script>

<div class="story-column-container">
    {#each sizes as size}
        <div class="story-row-container">
            {#each styles as style}
                <Button sizeType={size} styleType={style} loading>
                    {size} {style}
                </Button>
            {/each}
            <Button sizeType={size} disabled loading>
                {size} disabled
            </Button>
        </div>
    {/each}
</div>

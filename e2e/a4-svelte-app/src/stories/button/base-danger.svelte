<script lang="ts">
    import { Button } from "@lifesg/react-design-system/core/svelte";

    const sizes = ["large", "default", "small"] as const;
    const styles = ["default", "secondary", "light", "link"] as const;
</script>

<div class="story-column-container">
    {#each sizes as size}
        <div class="story-row-container">
            {#each styles as style}
                <Button sizeType={size} styleType={style} danger>
                    {size} {style}
                </Button>
            {/each}
            <Button sizeType={size} danger disabled>
                {size} disabled
            </Button>
        </div>
    {/each}
</div>

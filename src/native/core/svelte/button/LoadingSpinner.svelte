<script lang="ts">
    import { loadingSpinner as cls } from "../../../styles";

    interface Props {
        size?: string;
        colour?: string;
    }

    let { size, colour }: Props = $props();

    let style = $derived.by(() => {
        const parts: string[] = [];
        if (size) parts.push(`--fds-internal-loading-spinner-size: ${size}`);
        if (colour) parts.push(`--fds-internal-loading-spinner-colour: ${colour}`);
        return parts.join("; ");
    });
</script>

<div class={cls.root} style={style || undefined}>
    <div class={cls.ring}></div>
    <div class="{cls.ring} {cls.ring2}"></div>
    <div class="{cls.ring} {cls.ring3}"></div>
    <div class="{cls.ring} {cls.ring4}"></div>
</div>

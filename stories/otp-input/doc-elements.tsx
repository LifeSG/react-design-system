import { Button, Card } from "../../src";

export const CustomContent = ({
    countdown,
    onClick,
}: {
    countdown: number;
    onClick: () => void;
}) => {
    return (
        <Card style={{ marginTop: "1rem" }}>
            <div>This can be any component</div>
            <Button.Small
                onClick={onClick}
                style={{ width: "100%", marginTop: "0.5rem" }}
                disabled={countdown !== 0}
            >
                {countdown === 0
                    ? "Start Cooldown"
                    : `Cooling down... ${countdown}s`}
            </Button.Small>
        </Card>
    );
};

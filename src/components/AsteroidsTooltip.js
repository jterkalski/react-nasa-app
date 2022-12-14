import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const tooltipText =
    'Near-Earth object with an orbit that can make close approaches to the Earth and is large enough to cause significant regional damage in the event of impact.';

const TooltipPositionedExample = () => {
    return (
        <OverlayTrigger
            key="bottom"
            placement="bottom"
            overlay={
                <Tooltip
                    id={`tooltip-bottom`}
                    style={{ width: '150px', marginTop: '15px' }}>
                    {tooltipText}
                </Tooltip>
            }>
            <img
                src="./icons/info-circle.svg"
                alt="info-circle"
                style={{
                    height: '14px',
                    position: 'relative',
                    margin: '0 0 15px 5px',
                    cursor: 'pointer',
                }}
            />
        </OverlayTrigger>
    );
};

export default TooltipPositionedExample;

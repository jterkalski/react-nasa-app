import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const tooltipText =
    'A potentially hazardous object is a near-Earth object with an orbit that can make close approaches to the Earth and is large enough to cause significant regional damage in the event of impact.';

const TooltipPositionedExample = () => {
    return (
        <OverlayTrigger
            key='bottom'
            placement='bottom'
            overlay={
                <Tooltip id={`tooltip-bottom`} style={{ marginTop: '15px' }}>
                    {tooltipText}
                </Tooltip>
            }
        >
            <img
                src='./icons/info-circle.svg'
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

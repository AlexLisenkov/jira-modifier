import Button from '../button/Button'

class CollapseDone extends Button
{
    /**
     * Define button text
     *
     * @return {string}
     */
    buttonText() {
        return "DONE";
    }

    /**
     * Handle click event of button
     *
     * @return {EventListener}
     * @param event
     */
    handleClick(event) {
        let swimlanes = document.querySelectorAll('.ghx-swimlane');
        for (let i = 0, l = swimlanes.length; i < l; i++) {
            let current = swimlanes[i];
            if( current.querySelector('.ghx-swimlane-header').classList.contains('ghx-done') ){
                current.classList.remove('ghx-closed');
            } else {
                current.classList.add('ghx-closed');
            }
        }
    }
}

export default CollapseDone;
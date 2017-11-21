import Button from '../button/Button'

class CollapseTodo extends Button {
    buttonText() {
        return "Alleen TODO";
    }
    handeClick(event) {
        let swimlanes = document.querySelectorAll('.ghx-swimlane');
        for (let i = 0, l = swimlanes.length; i < l; i++) {
            let current = swimlanes[i];
            if( current.querySelector('.ghx-swimlane-header').classList.contains('ghx-done') ){
                current.classList.add('ghx-closed');
            } else {
                current.classList.remove('ghx-closed');
            }
        }
    }
}

export default CollapseTodo;
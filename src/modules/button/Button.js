class Button
{
    /**
     * Get the 'Complete sprint' button
     * Used as reference to place the button in the correct position
     *
     * @return {Element}
     */
    static getCompleteSprintButton() {
        return document.querySelector('#ghx-complete-sprint');
    }

    /**
     * Button constructor
     */
    constructor() {
        let target = document.querySelector('#ghx-modes-tools');

        let config = { childList: true };
        let that = this;
        let observer = new MutationObserver((mutations) => {
            that.addButton();
        });
        observer.observe(target, config);
    }

    /**
     * Add button element to dom
     *
     * @return {void}
     */
    addButton() {
        const DOMbutton = this.button();
        Button.getCompleteSprintButton().insertAdjacentElement('beforebegin', DOMbutton);
        DOMbutton.addEventListener('click', this.handleClick);
    }

    /**
     * Define button text
     *
     * @return {string}
     */
    buttonText() {
        return null;
    }

    /**
     * Generate button HTML
     *
     * @return {string}
     */
    buttonHtml() {
        return `<button class="aui-button">${this.buttonText()}</button>`;
    }

    /**
     * Generate button Element
     *
     * @return {Element}
     */
    button() {
        const button = document.createElement('button');
        const content = document.createTextNode(this.buttonText());
        button.classList.add('aui-button');
        button.appendChild(content);
        return button;
    }

    /**
     * Handle click event of button
     *
     * @return {EventListener}
     * @param {EventListener} event
     */
    handleClick(event){
        // void
    }
}

export default Button;
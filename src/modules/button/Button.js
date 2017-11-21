class Button {
    static getCompleteSprintButton() {
        return document.querySelector('#ghx-complete-sprint');
    }
    constructor() {
        let target = document.querySelector('#ghx-header');

        let config = { childList: true };
        let that = this;
        let observer = new MutationObserver((mutations) => {
             that.addButton();
        });
        observer.observe(target, config);
    }
    addButton() {
        const DOMbutton = this.button();
        Button.getCompleteSprintButton().insertAdjacentElement('beforebegin', DOMbutton);
        DOMbutton.addEventListener('click', this.handeClick);
    }
    buttonText() {
        return null;
    }
    buttonHtml() {
        return `<button class="aui-button">${this.buttonText()}</button>`;
    }
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
     * @param event
     */
    handeClick(event) {

    }

}

export default Button;
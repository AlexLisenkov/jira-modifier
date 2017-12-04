import TagController from '../tags/TagController'

class IssueMutator
{
    /**
     * Construct IssueMutator
     *
     * @param {Element} issue
     */
    constructor(issue) {
        this.issue = issue;
        TagController.renderIssue(this.issue);
        this.relocateAssignee();
        this.observeForChanges();
    }

    /**
     * Relocate assigned person of issue
     *
     * @return {void}
     */
    relocateAssignee() {
        const assignee_image = this.issue.querySelector('.ghx-row.ghx-stat-2 span.ghx-field img');
        if( assignee_image )
            this.issue.insertAdjacentElement('afterbegin', assignee_image).classList.add(...["alex-jira-img", "avatar"]);
    }

    /**
     * Add MutationObserver to issue
     *
     * @return void
     */
    observeForChanges() {
        let config = { childList: true, attributes: true };
        let observer = new MutationObserver((mutations) => {
            TagController.renderIssue(this.issue);
            this.relocateAssignee();
        });
        observer.observe(this.issue, config);
    }

    /**
     * Set issue dom element
     *
     * @param {Element} issue
     */
    set issue(issue) {
        this._issue = issue;
    }

    /**
     * Get issue dom element
     *
     * @return {Element} issue
     */
    get issue() {
        return this._issue;
    }
}

export default IssueMutator;
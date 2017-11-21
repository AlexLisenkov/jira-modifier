import TagController from '../tags/TagController'

class IssueMutator
{
    /**
     * Get issue elements
     *
     * @return {Element}
     */
    static getIssues() {
        return document.querySelectorAll('div.ghx-issue');
    }

    /**
     * Get pool of swimlanes
     *
     * @return {Element}
     */
    static getPool() {
        return document.querySelector('#ghx-pool');
    }

    /**
     * Construct IssueMutator
     */
    constructor() {
        let target = IssueMutator.getPool();

        let config = { childList: true };
        let observer = new MutationObserver((mutations) => {
            const issues = IssueMutator.getIssues();
            issues.forEach( (issue) => {
                TagController.renderIssue(issue);
                IssueMutator.relocateAssignee(issue);
            });
        });
        observer.observe(target, config);
    }

    /**
     * Relocate assigned person of issue
     *
     * @return {void}
     */
    static relocateAssignee(issue) {
        const assignee_image = issue.querySelector('.ghx-row.ghx-stat-2 span.ghx-field img');
        if( assignee_image )
            issue.insertAdjacentElement('afterbegin', assignee_image).classList.add(...["alex-jira-img", "avatar"]);
    }
}

export default IssueMutator;
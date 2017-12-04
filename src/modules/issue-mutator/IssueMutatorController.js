import IssueMutator from './IssueMutator'

class IssueMutatorController
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
        let target = IssueMutatorController.getPool();

        let config = { childList: true, attributes: true, subtree: true };
        let observer = new MutationObserver((mutations) => {
            const issues = IssueMutatorController.getIssues();
            issues.forEach( (issue) => {
                new IssueMutator(issue);
            });
        });
        observer.observe(target, config);
    }
}

export default IssueMutatorController;
import tags from './TagList';

class TagController {
    static get tags() {
        return tags;
    }
    static renderIssue(issue) {
        let hasTag = false;
        let activeTag = null;
        let summary = issue.querySelector('.ghx-summary');
        let grabber = issue.querySelector('.ghx-grabber');

        TagController.tags.forEach( (tag) => {
            hasTag = (summary.innerHTML.indexOf(tag.tag) >= 0);
            if( hasTag ){
                activeTag = tag;
            }
        });
        if( activeTag === null )
            return;

        summary.innerHTML = summary.innerHTML.replace(activeTag.tag, activeTag.getFullImageTag());
        grabber.style.backgroundColor = activeTag.hexColor;

        return issue;
    }
}

export default TagController;
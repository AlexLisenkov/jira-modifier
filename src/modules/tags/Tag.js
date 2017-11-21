class Tag
{
    /**
     * Construct Tag
     *
     * @param {string} tag
     * @param {string} hexColor
     * @param {string} imageUrl
     */
    constructor(tag, hexColor, imageUrl) {
        this._tag = tag;
        this._hexColor = hexColor;
        this._imageUrl = imageUrl;
    }

    /**
     * @return {string}
     */
    get hexColor() {
        return this._hexColor;
    }

    /**
     * @param {string} hexColor
     */
    set hexColor(hexColor) {
        this._hexColor = hexColor;
    }

    /**
     * @return {string}
     */
    get imageUrl() {
        return this._imageUrl;
    }

    /**
     * @param {string} imageUrl
     */
    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
    }

    /**
     * @return {string}
     */
    get tag() {
        return this._tag;
    }

    /**
     * @param {string} tag
     */
    set tag(tag) {
        this._tag = tag;
    }

    /**
     * Make a textual image tag from the image url
     *
     * @return {string}
     */
    getFullImageTag() {
        return `<img src="${this.imageUrl}" class="alex-jira-img"/>`
    }
}

export default Tag;
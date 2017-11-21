class Tag {
    constructor(tag, hexColor, imageUrl) {
        this._tag = tag;
        this._hexColor = hexColor;
        this._imageUrl = imageUrl;
    }
    get hexColor() {
        return this._hexColor;
    }
    set hexColor(hexColor) {
        this._hexColor = hexColor;
    }
    get imageUrl() {
        return this._imageUrl;
    }
    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
    }
    get tag() {
        return this._tag;
    }
    set tag(tag) {
        this._tag = tag;
    }
    getFullImageTag() {
        return `<img src="${this.imageUrl}" class="alex-jira-img"/>`
    }
}

export default Tag;
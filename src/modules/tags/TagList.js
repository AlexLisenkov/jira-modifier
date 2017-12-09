import Tag from './Tag';
import * as firebase from 'firebase';


const firebase_config = require('../../firebase.config.json');
const key = "TEAMVWA";

firebase.initializeApp(firebase_config);

const db = firebase.database();
const ref = db.ref(`spaces/${key}`);

let tags = [];

ref.on("value", function(tagListResults) {
    tagListResults.forEach(function(tag) {
        tags.push(
            new Tag(
                `[${tag.key}]`,
                tag.child('COLOR').val(),
                tag.child('IMAGE').val()
            )
        );
    });
});

export default tags;
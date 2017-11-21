var find_replace = [
    [
        '[PO]',
        'https://ca.slack-edge.com/T52NAUEGG-U7CR8CWAK-f6f1c1af2e99-72',
        '#f4b342'
    ],
    [
        '[BE]',
        'https://cdn4.iconfinder.com/data/icons/logos-3/256/laravel-64.png',
        '#787CB5'
    ],
    [
        '[FE]',
        'https://cdn0.iconfinder.com/data/icons/HTML5/128/HTML_Logo.png',
        '#E44D26'
    ],
    [
        '[DESIGN]',
        'https://dl2.macupdate.com/images/icons256/35230.png?d=1508272838',
        '#FEEDAD'
    ],
    [
        '[GIT]',
        'https://gitlab.com/uploads/-/system/project/avatar/13083/logo-extra-whitespace.png',
        '#4286f4'
    ]
];


function checkForStories()
{
    var stories = document.querySelectorAll('section.ghx-summary');

    for (var i = 0, l = stories.length; i < l; i++) {
        for (var j = 0, p = find_replace.length; j < p; j++) {
            var parent = jQuery(stories[i]).parent();
            var assigned = parent.find('.ghx-row.ghx-stat-2 span.ghx-field img');
            if( assigned ){
                assigned.addClass('alex-jira-img');
                parent.prepend(assigned);
            }

            parent.find('.ghx-stat-fields').hide();
            var content = stories[i].innerHTML;
            jQuery(stories[i]).css('line-height', '25px');
            parent.css('display', 'flex');

            if( content.indexOf(find_replace[j][0]) >= 0){
                parent.find('.ghx-grabber').css('background-color', find_replace[j][2]);
                var image = '<img class="alex-jira-img" src="'+find_replace[j][1]+'"/>';
                stories[i].innerHTML = content.replace(
                    find_replace[j][0], ''
                );
                parent.prepend(image);
            }
            else if( !parent.find('img.alex-jira-img') ) {
                var image = '<img class="alex-jira-img" src="https://orig00.deviantart.net/87e2/f/2014/003/4/8/emoji_kissingniv_by_ariedry-d70o9rh.png"/>';
                parent.prepend(image);
            }
        }

    }
}

timer = setTimeout(function() {
    checkForStories();

    jQuery('#ghx-complete-sprint').parent().prepend(
        '<button id="collapse" class="aui-button ">Alleen todo aub</button>'
    );

    jQuery('#collapse').click(function () {
        var swimlanes = document.querySelectorAll('.ghx-swimlane-header');
        for (var i = 0, l = swimlanes.length; i < l; i++) {
            var current = jQuery(swimlanes[i]);
            if( current.hasClass('ghx-done') ){
                current.parent().addClass('ghx-closed');
            } else {
                current.parent().removeClass('ghx-closed');
            }
        }
    });
}, 1500);
window.addEventListener("mouseup", function () {
    timer = setTimeout(function() {
        checkForStories();
    }, 1500);
});
checkForStories();
console.log(jQuery('.ghx-modes-tools'));
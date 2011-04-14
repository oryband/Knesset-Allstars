$(document).ready( function() {

var formation = {
    'forward-left'          : null,
    'forward-center'        : null,
    'forward-right'         : null,

    'midfield-left'         : null,
    'midfield-center-left'  : null,
    'midfield-center-right' : null,
    'midfield-right'        : null,

    'defence-left'          : null,
    'defence-center'        : null,
    'defence-right'         : null
};


$('#save').click( function (e) {
    var string = '';
    $.each(formation, function(key, value) {
        string += key + ' : ' + value + '<br/>'; 
    });

    $('#formation').html(string);
});


function initMembers(data, formation) {
    var template = '{{#member}}{{#is_current}}<div class="member" id="member_{{id}}" mk_id="{{id}}"><img src="{{img_url}}"></div>{{/is_current}}{{/member}}';

    var images = Mustache.to_html( template, {'member': data} );  // Build member's images list.
    $('#faces').html(images);  // Push images to HTML.

    $('.member') .draggable( { revert : 'invalid' } );  // Set members in list to be draggable.

    $('#faces').droppable( { accept : '.member' } );  // Set members list to be a droppable area.

    $('.member').hover(function (event) {  // Show member's data on hover.
        if (event.type == 'mouseenter') { // && (!jQuery('.ui-draggable-dragging') ))
            var id = parseInt(jQuery(event.currentTarget).attr('mk_id'), 10);
            $.each(document.members, function (i, m) {
                if (m.id == id) {
                    $('#member_info').html(m.name);
                    return false;
                }
            });
        }
    });

    $('.role').droppable({
        accept : '.member',  // Set role 'baskets' to be a droppable area.
        drop   : function (e, ui) {  // Add member to formation on drop to basket.
            var classes = $(this)[0].className.split(/\s+/);
            var position, side;

            if ( $.inArray('forward', classes) != -1 ) {
                position = 'forward';
            } else if ( $.inArray('midfield', classes) != -1 ) {
                position = 'midfield';
            } else if ( $.inArray('defence', classes) != -1 ) {
                position = 'defence';
            }

            if ( $.inArray('left', classes) != -1 ) {
                side = 'left';
            } else if ( $.inArray('center', classes) != -1 ) {
                side = 'center';
            } else if ( $.inArray('center-left', classes) != -1 ) {
                side = 'center-left';
            } else if ( $.inArray('center-right', classes) != -1 ) {
                side = 'center-right';
            } else if ( $.inArray('right', classes) != -1 ) {
                side = 'right';
            }

            var oldMkId = formation[position + '-' + side];
            var newMkId = parseInt( ui.draggable.attr('mk_id'), 10 );

            // Old member cleanup.
            $.each(formation, function (key, value) {  // TODO: Finish this. Clear oldMkId from old basket.
                /*if (value == oldMkId) {
                    formation[key] = null;
                    return false;  // =break
                    }*/
            });
            if ( oldMkId != null && newMkId != oldMkId ) {  // Return old member to members' list.
                var re = '.member[mk_id="' + oldMkId + '"]';
                $(re).css('left', 0);
                $(re).css('top',  0);
            }

            formation[position + '-' + side] = newMkId;  // Push new member to basket.
        }
    });
}


initMembers(document.members, formation);

});


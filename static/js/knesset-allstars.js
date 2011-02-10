/*
$(document).ready(function() {
    //var url = 'http://oknesset.org/api/member/801/';
    //var url = 'http://localhost:8000/api/member/771/';
    var url = 'http://localhost:8000/api/member/';
    var callback = function (data, textStatus, xhr) {
        var template = '<ul> {{#member}} <li> <img src="{{img_url}}"> </li> {{/member}} </ul>';
        var images = Mustache.to_html(template, {"member": data} );
        $('#members').html(images);
    };

    $.getJSON(url, {}, callback);
});
*/

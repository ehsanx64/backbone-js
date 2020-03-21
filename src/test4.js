import { TestBox} from "./TestBox";

var test4Content = " \
<p>\
<em>Test #4</em>&nbsp;\
is about how to use Backbone.js powered UI components.\
</p>\
";

const test4Content2meta = {
    title: 'Test #4 - II',
    description: 'is the second version of the Backbone.js powered UI components demo.'
}

const test4Content2 = `
    <p>
        <em><strong>${test4Content2meta.title}</strong></em>&nbsp; ${test4Content2meta.description}
    </p>
`;


(function ($) {
    $(function () {
        var testbox4 = new TestBox({
            'el': '#test-4',
            'title': "Test #4",
            'content': test4Content2,
            'image': 'images/service-4.jpg'
        });
    })
})(jQuery);

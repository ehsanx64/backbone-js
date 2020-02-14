import { TestBox } from './TestBox';


(function ($) {
    $(function () {
        new TestBox({
            'el': '#test-3',
            'title': "Test #3",
            'content': '<p><strong>Hello</strong>!&nbsp;This is the content for Test #3.</p>',
            'image': 'images/service-3.jpg'
        });
    })
})(jQuery);

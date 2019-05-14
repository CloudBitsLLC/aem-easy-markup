;(function ($, ns, channel) {
    'use strict';

    ns.cloudbits.easymarkup.SidePanel = (function() {
        var self = {};

        self.build = function() {
            if (typeof ace !== 'undefined') {
                self.initEditors();
            } else {
                var script = document.createElement('script');
                script.onload = function () {
                    self.initEditors();
                };
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.4/ace.js';
                document.head.appendChild(script);
            }
        };

        self.initEditors = function() {
            self.editors.forEach(function(item) {
                item.init();
            });
        };

        self.handleSelection = function(editable) {
            if (editable.type === 'easy-markup/components/content/markup') {
                $.get(editable.path + '.json', function( data ) {
                    self.editors.forEach(function(item) {
                        item.setEditMode(editable, data);
                    });
                }).fail(function() {
                    self.editors.forEach(function(item) {
                        item.setEditMode(editable);
                    });
                });
            } else {
                $.get(editable.slingPath + '?wcmmode=disabled', function( data ) {
                    var content = { markupHTML: data};
                    self.editors.forEach(function(item) {
                        item.setViewMode(content);
                    });
                });
            }
        };

        channel.on('foundation-contentloaded', function (event) {
            var $easymarkupSidePanel = $(event.target).find('.js-SidePanel-content--easymarkup');
            if ($easymarkupSidePanel.length) {
                self.editors = [
                    new ns.cloudbits.easymarkup.Editor($easymarkupSidePanel, 'html', 'markupHTML'),
                    new ns.cloudbits.easymarkup.Editor($easymarkupSidePanel, 'css', 'markupCSS'),
                    new ns.cloudbits.easymarkup.Editor($easymarkupSidePanel, 'javascript', 'markupJS')
                ];
            }
        });

        return self;
    }());

}(jQuery, Granite.author, jQuery(document)));

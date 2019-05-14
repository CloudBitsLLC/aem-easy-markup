;(function ($, ns, channel) {
    'use strict';

    function setUpSidePanel() {
        ns.ui.SidePanel.loadContent({
            selector: '.js-SidePanel-content--developer',
            path: '/apps/easy-markup/components/content/editor/jcr:content/sidepanels/easymarkup.html'
        }).then(function() {
            ns.ui.SidePanel.showContent('js-SidePanel-content--easymarkup');
            ns.cloudbits.easymarkup.SidePanel.build();
            ns.ui.SidePanel.open(true);
        });
        channel.on('cq-interaction-focus.easymarkup', function(event) {
            ns.cloudbits.easymarkup.SidePanel.handleSelection(event.editable);
        });
    }

    var CONFIG = $.extend(true, {}, ns.edit.CONFIG, {
            name:  'Easy Markup',
            title: Granite.I18n.get('Easy Markup', 'title of Easy Markup layer'),
            toolbarConstructor: ns.cloudbits.easymarkup.Toolbar,
            sidePanel: {
                setUp: setUpSidePanel
            }
        });

    ns.cloudbits.easymarkup.EasyMarkupLayer = ns.util.extendClass(ns.edit.Layer, {
        constructor: function MyLayer(config) {
            ns.cloudbits.easymarkup.EasyMarkupLayer.super_.constructor.apply(this, arguments);
        },

        config: CONFIG,

        isAvailable: function () {
            return true;
        }
    });

    ns.layerManager.registerLayer(new ns.cloudbits.easymarkup.EasyMarkupLayer());

}(jQuery, Granite.author, jQuery(document)));

;(function ($, ns, channel, window) {

    var ACTIONS = {
        'ADDMARKUP': new ns.ui.ToolbarAction({
            icon: 'code',
            text: Granite.I18n.get('Add new markup'),
            execute: function (editable, param, target) {
                var markupComponent = ns.components.find('/apps/easy-markup/components/content/markup');
                ns.edit.EditableActions.INSERT.execute(markupComponent[0], 'before', editable);
            },
            condition: function (editable) {
                return editable.type === 'wcm/foundation/components/responsivegrid/new';
            }
        }),
        'COPYMARKUP': new ns.ui.ToolbarAction({
            icon: 'copy',
            text: Granite.I18n.get('Create as markup component'),
            execute: function (editable, param, target) {
                $.get(editable.slingPath + '?wcmmode=disabled', function( htmlrender ) {
                    var markupComponent = ns.components.find('/apps/easy-markup/components/content/markup');
                    ns.edit.EditableActions.INSERT.execute(markupComponent[0], 'after', editable).then(function (data) {
                        $.post(data.editable.path, { markupHTML: htmlrender } );
                    });
                });
            },
            condition: function (editable) {
                if (editable.type === 'wcm/foundation/components/responsivegrid/new' ||
                    editable.type === 'easy-markup/components/content/markup') {
                    return false;
                }
                var parent = ns.editables.getParent(editable);
                return parent && parent.config && parent.config.isResponsiveGrid;
            }
        })
    };

    ns.cloudbits.easymarkup.Toolbar = function () {
        ns.cloudbits.easymarkup.Toolbar.super_.constructor.apply(this, arguments);
        return ns.cloudbits.easymarkup.Toolbar.super_.init.call(this, {
            actions: ACTIONS
        });
    };

    ns.util.inherits(ns.cloudbits.easymarkup.Toolbar, ns.ui.Toolbar);

    ns.cloudbits.easymarkup.Toolbar.prototype.destroy = function () {
        ns.cloudbits.easymarkup.Toolbar.super_.destroy.apply(this, arguments);
    };


    ns.cloudbits.easymarkup.Toolbar.prototype.appendButton = function (editable, name, action) {
        ns.cloudbits.easymarkup.Toolbar.super_.appendButton.apply(this, arguments);
    };

    ns.cloudbits.easymarkup.Toolbar.prototype.render = function (editable) {
        return ns.cloudbits.easymarkup.Toolbar.super_.render.apply(this, arguments);
    };

    ns.cloudbits.easymarkup.Toolbar.prototype.handleEvent = function (event) {
        ns.cloudbits.easymarkup.Toolbar.super_.handleEvent.apply(this, arguments);
    };

}(jQuery, Granite.author, jQuery(document), this));

;(function ($, ns, channel) {
    'use strict';

    ns.cloudbits.easymarkup.Editor = function(sidepanel, mode, property) {

        this.component = sidepanel.find('.js-markup-' + mode);
        this.button = sidepanel.find('.js-markup-' + mode + '-applybtn');
        this.mode = mode;
        this.property = property;

        this.init = function() {
            if (!this.editor) {
                var self = this;
                this.editor = ace.edit(this.component[0], {
                    mode: 'ace/mode/' + this.mode,
                    selectionStyle: 'text'
                });
                this.button.click(function() {
                    if (self.editable) {
                        var data = {};
                        data[self.property] = self.editor.getValue();
                        $.post(self.editable.path, data).done(function() {
                            ns.edit.EditableActions.REFRESH.execute(self.editable);
                        });
                    }
                });
            }
            this.setViewMode();
        };

        this.setEditMode = function (editable, content) {
            this.editable = editable;
            if (content && content[this.property]) {
                this.editor.setValue(content[this.property]);
                this.editor.clearSelection();
            } else {
                this.editor.setValue('');
            }
            this.editor.setTheme('ace/theme/textmate');
            this.editor.setReadOnly(false);
            this.button.prop('disabled', false);
        };

        this.setViewMode = function (content) {
            this.editable = null;
            if (content && content[this.property]) {
                this.editor.setValue(content[this.property]);
                this.editor.clearSelection();
            } else {
                this.editor.setValue('');
            }
            this.editor.setTheme('ace/theme/kuroir');
            this.editor.setReadOnly(true);
            this.button.prop('disabled', true);
        };

    };

}(jQuery, Granite.author, jQuery(document)));

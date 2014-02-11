'use strict';

/* globals module */
module.exports = function(context) {
  return {
    Identifier: function(node) {
      var nameWithMaybeColon = context.getSource(node, 0, 1);
      if (nameWithMaybeColon[nameWithMaybeColon.length - 1] !== ':') {
        if (nameWithMaybeColon.indexOf('_') !== -1) {
          context.report(node, '`{{identifier}}` : _ in names only allowed in properties', {
            identifier: node.name
          });
        }
      }
    }
  };
};

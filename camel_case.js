'use strict';

/* globals module */
module.exports = function(context) {
  var allCapsWithUnderScore = /^[A-Z_]+$/;

  return {
    Identifier: function(node) {
      var nameWithMaybeColon = context.getSource(node, 0, 1);
      if (nameWithMaybeColon[nameWithMaybeColon.length - 1] !== ':') {
        if (nameWithMaybeColon.indexOf('_') !== -1) {
          // allow constants FOO_BAR with all caps to use _
          if (allCapsWithUnderScore.test(nameWithMaybeColon)) {
            console.log(nameWithMaybeColon, 'is all caps with _');
            return;
          }

          context.report(node, '`{{identifier}}` : _ in names only allowed in properties', {
            identifier: node.name
          });
        }
      }
    }
  };
};

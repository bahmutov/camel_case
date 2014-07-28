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
          var justName = node.name.trim();
          console.log('checking', justName);
          if (allCapsWithUnderScore.test(justName)) {
            console.log(justName, 'is all caps with _');
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

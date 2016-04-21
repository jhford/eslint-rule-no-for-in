/**
 * @fileoverview Rule to flag for-in loops existence
 * @author John Ford
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "ForInStatement": function(node) {
          context.report(node, "You should not use a for-in statement");
        }

    };

};

module.exports.schema = [];

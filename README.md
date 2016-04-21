# no-for-in
The javascript for-in loop is not great.  Now that there's a for-of loop, which
behaves like the for-in loop of other languages, it's easy to confuse the two
and unintentionally use for-in when for-of is meant.  This eslint rule is
designed to make unintentional use of for-in impossible.  If a for-in loop
truly is required, the rule should be disabled on a per-line basis.

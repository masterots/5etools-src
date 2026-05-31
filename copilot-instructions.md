# Copilot Instructions

- Never write single-line control-flow statements.
- Always use `{}` for the body of `if`, `else`, `for`, `while`, `do`, `switch`, `try`, `catch`, and similar control-flow constructs, even when the body contains only one statement.
- Never write single-line `if (...) return ...;` statements.
- When returning from a block, put `return` on its own line inside the block.

Preferred:

```js
if (!value) {
	return null;
}
```

Not allowed:

```js
if (!value) return null;
```
# 5e.tools

Visit the [main site](https://5e.tools/index.html) or go to the unofficial GitHub [mirror](index.html).

[Join the 5etools Discord here!](https://discord.gg/5etools)

## Help and Support

Please see [our wiki](https://wiki.tercept.net/) for FAQs, installation guides, supported integrations, and more.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Development Setup

### Source + Images

Clone this repository with submodules to include images locally:

```bash
git clone --recurse-submodules https://github.com/5etools-mirror-3/5etools-src.git
```

If you already cloned the source repo, run:

```bash
npm run setup:img
```

To verify local image availability before serving:

```bash
npm run verify:img
```

Or run the image-aware local server flow:

```bash
npm run serve:dev:img
```

### Updating the Pinned Image Version

Images are tracked as a git submodule at `img`, so production builds are reproducible from a pinned commit.

To move to newer images:

```bash
npm run update:img
npm run status:img
git add img
git commit -m "chore(images): bump img submodule"
```

## License

This project is licensed under the terms of the MIT license.

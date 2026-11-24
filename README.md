# Ugaverse Studios website

The website for **Ugaverse Studios**, a Ugandan creative technology studio that makes virtual tours, 360° films and interactive experiences.

**Live site:** [www.ugaverse.com](https://www.ugaverse.com)

## Live demos

- [Buganda Palace tour](https://www.ugaverse.com/projects/buganda-palace-tour/): an interactive 3D heritage tour.
- [Daddy's House](https://www.ugaverse.com/daddys-house.html): a project page with a 360° video player.

## What's on the site

- **Homepage** (`index.html`): the studio's introduction, how the work is done, and a gallery of photography.
- **Buganda Palace tour** (`projects/buganda-palace-tour/`): the project page for an interactive 3D heritage tour. The tour itself is a separate build, hosted on its own: see [buganda-palace-tour](https://github.com/nantabaelsie/buganda-palace-tour).
- **Timeless Frames** (`projects/timeless-frames/`): a project page for a photography project, with its own green and gold theme.
- **Daddy's House** (`daddys-house.html`): a project page for a short-stay property, with a 360° video player.
- **360° player** (`player.html`): a WebXR video player built with A-Frame.

## Built with

- HTML, CSS and vanilla JavaScript. There is no framework and no CMS.
- [A-Frame](https://aframe.io) for the 360° video player.
- Tailwind CSS, compiled for the Daddy's House page only.
- Self-hosted fonts, with a mobile-first responsive layout that works from phone to desktop.
- Hosted on [Vercel](https://vercel.com), with a permanent redirect from the old `ugaverse.vercel.app` address.

## My role

I designed and built the site: layout, responsive behaviour, image handling and the project pages.

## Running it locally

It's a static site, so there's nothing to install:

1. Clone the repo.
2. Open `index.html` in a browser, or serve the folder with any static server (for example `npx serve`).

The 360° player loads A-Frame from a CDN, so it needs an internet connection.

## Contact

Ugaverse Studios, Uganda. Get in touch through the enquiry form on the site.

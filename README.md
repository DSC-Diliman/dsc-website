<div align="center">

  <img src="public/images/dsc-upd-logo.png" width="50%" alt="Logo">
  <h1>Google Developer Student Clubs - UP Diliman website</h1>

<a href="">[![Netlify Status](https://api.netlify.com/api/v1/badges/e1ff313a-7e40-4c01-b334-b943c7279f4d/deploy-status)](https://app.netlify.com/sites/dscupd/deploys)</a>

Link | <a href="gdscupd.com">gdscupd.com</a>

</div>

<br />

<div align="center">
  <h2>Project Members</h2>
</div>

<br />

<div align="center">

| <br /> <img src="public/images/daryll-circle.png" width="125" alt="Daryll"> <p><b>Daryll Ko</b></p> | <br/> <img src="public/images/edrick-circle.png" width="125" alt="Edrick"> <p><b>Edrick Gador</b></p> | <br/> <img src="public/images/marc-circle.png" width="125" alt="Marc"> <p><b>Marc Viernes</b></p> |
| :-------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
|                                          _Lead Developer_                                           |                                              _Developer_                                              |                                            _Developer_                                            |

</div>

<br />

Welcome to the codebase for the GDSC-UPD website! This README file contains notes for data contributors and site developers in the sections to follow.

<br />

## For data contributors

To add an event, project, or a member, go to [the site's `admin` page](https://gdscupd.com/admin):

<br />

<div align="center">
  <img src="public/images/netlify-cms-landing.png" width="60%" alt="Netlify CMS landing page"/>
</div>

<br />

If you don't have access to the content management system (CMS) yet, ask for an invite from one of the developers on Discord.

Adding data is as simple as choosing a `Collection`, clicking the `New [Event/Project/Member]` button, filling up the necessary information, and clicking the `Publish` button.

If you have any specific questions about the CMS, hit up Daryll on Discord!

<br />

## For developers

If you don't have access to the [Netlify dashboard](https://app.netlify.com/sites/dscupd) yet, ask for an invite from one of the developers on Discord.

Clone the repository to your local machine like so:

```bash
git clone git@github.com:DSC-Diliman/dsc-website.git
```

Once a clone has been made, install packages using npm like so:

```bash
npm i
```

To generate the site's code, run `npm run build`. Afterwards, run `npm run dev` or `npm start` to see the site in development or production mode, respectively.

Contributions are carried out in 3 main steps:

1. Create a new branch via `git checkout -b [branch name]`.
2. Once you finish your work on the branch, create a pull request via the GitHub web interface. A deploy preview will pop up in the Netlify dashboard.
3. If the deploy preview works as intended, ask one of the developers for a code review. Once your changes are approved, they can be merged into the `master` branch.

<div align="center">

### Tech stack

| Technology                                                                                                                | Purpose              | Notes                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://img.shields.io/static/v1?label=&logo=nextdotjs&message=Next.js&labelColor=000000&color=000000">         | React framework      | v13, [Documentation](https://nextjs.org/docs), [Tutorial](https://nextjs.org/learn)                                                               |
| <img src="https://img.shields.io/static/v1?label=&logo=react&message=React&labelColor=272B33&color=272B33">               | JavaScript framework | v18, [Documentation](https://reactjs.org/docs/getting-started.html), [React Icons](https://react-icons.github.io/react-icons)                     |
| <img src="https://img.shields.io/static/v1?label=&logo=typescript&message=TypeScript&labelColor=000000&color=000000">     | Type safety          | v4, [Documentation](https://www.typescriptlang.org/docs)                                                                                          |
| <img src="https://img.shields.io/static/v1?label=&logo=tailwindcss&message=Tailwind CSS& labelColor=272B33&color=272B33"> | Styling              | v3, [Documentation](https://tailwindcss.com/docs)                                                                                                 |
| <img src="https://img.shields.io/static/v1?label=&logo=playwright&message=Playwright&labelColor=000000&color=000000">     | End-to-end testing   | v1, [Documentation](https://playwright.dev/docs/intro)                                                                                            |
| <img src="https://img.shields.io/static/v1?label=&logo=figma&message=Figma&labelColor=272B33&color=272B33">               | Wireframe            | [Wireframe](https://www.figma.com/file/VLKIQqE9Vb1W9A3t3NWgAb/DSC-Website-UI-Final-Submission?node-id=0%3A1)                                      |
| <img src="https://img.shields.io/static/v1?label=&logo=greensock&message=GSAP&labelColor=000000&color=000000">            | Animation            | [Documentation](https://greensock.com/docs), [Getting started](https://greensock.com/get-started), [Cheatsheet](https://greensock.com/cheatsheet) |

</div>

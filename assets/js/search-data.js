// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/VIP_website/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/VIP_website/projects/";
          },
        },{id: "nav-faculty",
          title: "Faculty",
          description: "Information about the faculty",
          section: "Navigation",
          handler: () => {
            window.location.href = "/VIP_website/faculty/";
          },
        },{id: "dropdown-syllabus",
              title: "syllabus",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/VIP_website/syllabus/";
              },
            },{id: "dropdown-peer-evaluation",
              title: "peer evaluation",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/VIP_website/peer_evaluation/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/VIP_website/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/VIP_website/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-see-insight-lab",
          title: 'SEE Insight Lab',
          description: "By Dirk Colbry",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/projects/1_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "Duk Lab",
          section: "Projects",handler: () => {
              window.location.href = "/VIP_website/projects/7_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

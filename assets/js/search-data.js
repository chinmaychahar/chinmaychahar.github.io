// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-open-source",
          title: "open source",
          description: "What I build and maintain in the open.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Also on my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-rethreads",
          title: 'ReThreads',
          description: "Platform for upcycling donated clothes into adaptive wear.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_rethreads/";
            },},{id: "projects-noisa",
          title: 'NOISA',
          description: "Browser extension for people with vestibular disorders - No Invasive Site Animations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_noisa/";
            },},{id: "projects-safeweb",
          title: 'SafeWeb',
          description: "Chrome extension promoting the 20-20-20 rule for healthy computer usage.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_safeweb/";
            },},{id: "projects-imreader",
          title: 'IMReader',
          description: "Accessibility tool for processing images with OCR and text-to-speech.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_imread/";
            },},{id: "projects-snapsun",
          title: 'SnapSun',
          description: "Python tool for creating timelapse videos of the sun.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_snapsun/";
            },},{id: "projects-later-me",
          title: 'later.me',
          description: "Write sealed letters to your future self, delivered by email on a date you choose.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_later/";
            },},{id: "projects-spark",
          title: 'Spark',
          description: "A daily puzzle about where inventions come from. Group the tiles back to their roots.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_spark/";
            },},{id: "projects-true-crime",
          title: 'True Crime',
          description: "A collection of true-crime resources and recommendations. Not morbid, just curious.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_truecrime/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%69%6E%6D%61%79%63%68%61%68%61%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/chinmaychahar", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chinmay-chahar", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gaSN6XIAAAAJ", "_blank");
        },
      },{
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

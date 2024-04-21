import bgShowcase1 from "../src/assets/bg-showcase-1.jpg";
import bgShowcase2 from "../src/assets/bg-showcase-2.jpg";
import bgShowcase3 from "../src/assets/bg-showcase-3.jpg";
import user1 from "../src/assets/testimonials-1.jpg";
import user2 from "../src/assets/testimonials-2.jpg";
import user3 from "../src/assets/testimonials-3.jpg";

const features = [
  {
    id: 1,
    icon: "bi-window",
    title: "Fully Responsive",
    desc: "This theme will look great on any device, no matter the size!",
  },
  {
    id: 2,
    icon: "bi-layers",
    title: "Bootstrap 5 Ready",
    desc: "Featuring the latest build of the new Bootstrap 5 framework!",
  },
  {
    id: 3,
    icon: "bi-terminal",
    title: "Easy to Use",
    desc: "Ready to use with your own content, or customize the source files!",
  },
];

const showcaseData = [
  {
    id: 1,
    img: bgShowcase1,
    title: "Fully Responsive Design",
    desc: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
  },
  {
    id: 2,
    img: bgShowcase2,
    title: "Updated For Bootstrap 5",
    desc: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
  },
  {
    id: 3,
    img: bgShowcase3,
    title: "Easy to Use & Customize",
    desc: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
  },
];

const testimonialData = [
  {
    id: 1,
    img: user1,
    name: "Margaret E.",
    testimony: '"This is fantastic! Thanks so much guys!"',
  },
  {
    id: 2,
    img: user2,
    name: "Fred S.",
    testimony:
      '"Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages."',
  },
  {
    id: 3,
    img: user3,
    name: "Sarah W.",
    testimony:
      '"Thanks so much for making these free resources available to us!"',
  },
];

export { features, showcaseData, testimonialData };

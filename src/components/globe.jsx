import IconCloud from "./ui/icon-cloud";

const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "firebase",
  "vercel",
  "testinglibrary",
  "git",
  "github",
  "visualstudiocode",
  "linux",
  "windows",
  "postman",
  "debian",
  "tailwindcss",
  "mongodb",
  "redux",
  'vite',
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;

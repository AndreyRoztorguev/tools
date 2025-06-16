import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Box,
  Boxes,
  Cog,
  Combine,
  Command,
  Frame,
  Images,
  Map,
  NotebookPen,
  Package,
  PieChart,
  ScanHeart,
  Settings2,
  ShieldCheck,
  SquareTerminal,
  Wrench,
} from "lucide-react";
import * as React from "react";

import { NavMain, type Item } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type Data = {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  navMain: Item[];
  navSecondary: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
};

const data: Data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Excalidraw",
          url: "https://excalidraw.com",
        },
        {
          title: "Canva",
          url: "https://www.canva.com/",
        },
        {
          title: "MDN Playground",
          url: "https://developer.mozilla.org/en-US/play",
        },
        {
          title: "JavaScript",
          url: "https://playcode.io",
        },
        {
          title: "Typescript",
          url: "https://www.typescriptlang.org/play",
        },
        {
          title: "NodeJS",
          url: "https://replit.com",
        },
        {
          title: "JS/HTML/CSS",
          url: "https://jsbin.com",
        },
        {
          title: "Avatar Dicebear",
          url: "https://www.dicebear.com/playground",
        },
        {
          title: "JS Visualizer",
          url: "https://www.jsv9000.app",
        },
        {
          title: "SVG Editor",
          url: "https://www.svgviewer.dev",
        },
        {
          title: "SVG Path Editor",
          url: "https://yqnn.github.io/svg-path-editor",
        },
        {
          title: "Testing",
          url: "https://testing-playground.com",
        },
        {
          title: "Viewport Tester",
          url: "https://viewport-tester.com",
        },
        {
          title: "App Diagrams",
          url: "https://app.diagrams.net",
        },
        {
          title: "Meta Tag Viewer",
          url: "https://metatags.io",
        },
        {
          title: "CSS Stats of Website",
          url: "https://cssstats.com",
        },
        {
          title: "HTML Can I Include",
          url: "https://caninclude.glitch.me",
        },
        {
          title: "CSS Can I Use",
          url: "https://caniuse.com",
        },
      ],
    },
    {
      title: "Tools",
      url: "#",
      icon: Wrench,
      items: [
        {
          title: "Gradients",
          url: "#",
          items: [
            {
              title: "UI Gradients",
              url: "https://uigradients.com",
            },
            {
              title: "CSS Gradient",
              url: "https://cssgradient.io/",
            },
            {
              title: "CSS Gradient",
              url: "https://mycolor.space/gradient",
            },
          ],
        },
        {
          title: "CSS Animations",
          url: "#",
          items: [
            {
              title: "Animista",
              url: "https://animista.net",
            },
            {
              title: "Animatecss",
              url: "https://animate.style",
            },
            {
              title: "Cubic Bezier",
              url: "https://cubic-bezier.com/",
            },
          ],
        },
        {
          title: "IP Location",
          url: "https://ipapi.co",
        },
        {
          title: "Screen Resolution",
          url: "http://whatismyscreenresolution.net",
        },
        {
          title: "Fast email account",
          url: "https://ethereal.email/create",
        },
        {
          title: "Stylelint-Config",
          url: "https://maximgatilin.github.io/stylelint-config",
        },
        {
          title: "KeyCode",
          url: "https://www.toptal.com/developers/keycode",
        },
      ],
    },
    {
      title: "Validator",
      url: "#",
      icon: ShieldCheck,
      items: [
        {
          title: "JS Validate",
          url: "https://codebeautify.org/jsvalidate",
        },
        {
          title: "Web Dev Checklist",
          url: "https://www.toptal.com/developers/webdevchecklist",
        },
      ],
    },
    {
      title: "Generators",
      url: "#",
      icon: Cog,
      items: [
        {
          title: "Snippet",
          url: "https://snippet-generator.app",
        },
        {
          title: "Favicon",
          url: "https://realfavicongenerator.net",
        },
        {
          title: "HTML-CSS-JS",
          url: "https://html-css-js.com/css/generator",
        },
        {
          title: "CSS Fluid-Typography",
          url: "https://modern-fluid-typography.vercel.app",
        },
        {
          title: "CSS Grid",
          url: "https://cssgrid-generator.netlify.app",
        },
        {
          title: "CSS mask borders",
          url: "https://css-generators.com/custom-borders",
        },
        {
          title: "CSS mask corners",
          url: "https://css-generators.com/custom-corners",
        },
        {
          title: "CSS ribbon",
          url: "https://css-generators.com/ribbon-shapes",
        },
        {
          title: "CSS triangle-shapes",
          url: "https://css-generators.com/triangle-shapes",
        },
        {
          title: "CSS starburst-shape",
          url: "https://css-generators.com/starburst-shape",
        },
        {
          title: "CSS polygon-shape",
          url: "https://css-generators.com/polygon-shape",
        },
        {
          title: "CSS wavy-shapes",
          url: "https://css-generators.com/wavy-shapes",
        },
        {
          title: "CSS flower-shapes",
          url: "https://css-generators.com/flower-shapes",
        },
        {
          title: "CSS wavy-circle",
          url: "https://css-generators.com/wavy-circle",
        },
        {
          title: "CSS blob-shapes",
          url: "https://css-generators.com/blob",
        },
        {
          title: "CSS section-divider",
          url: "https://css-generators.com/section-divider",
        },
        {
          title: "CSS tooltip-speech-bubble",
          url: "https://css-generators.com/tooltip-speech-bubble",
        },
        {
          title: "CSS gradient-shadows",
          url: "https://css-generators.com/gradient-shadows",
        },
        {
          title: "CSS svg-to-css",
          url: "https://css-generators.com/svg-to-css",
        },
        {
          title: "CSS mask shape",
          url: "https://css-shape.com",
        },
        {
          title: "CSS patterns",
          url: "https://css-pattern.com",
        },
        {
          title: "CSS loaders",
          url: "https://css-loaders.com",
        },
        {
          title: "CSS Tailwind Color",
          url: "https://uicolors.app/generate/d7c011",
        },
        {
          title: "CSS WebApp Icon",
          url: "https://createapp.dev",
        },
        {
          title: "CSS Transform",
          url: "https://www.toptal.com/developers/css3maker/css3-transform",
        },
        {
          title: "CSS Toptal",
          url: "https://www.toptal.com/developers/css3maker",
        },
        {
          title: "HTML Toptal",
          url: "https://www.toptal.com/developers/htmlshell",
        },
        {
          title: "README.md",
          url: "https://readme.so/editor",
        },
        {
          title: "JS App Starter",
          url: "https://createapp.dev",
        },
        {
          title: "JSON",
          url: "https://json-generator.com",
        },
        {
          title: ".gitignore",
          url: "https://www.toptal.com/developers/gitignore",
        },
        {
          title: "Regex",
          url: "https://ihateregex.io",
        },
        {
          title: "Unicode Symbol Identifier",
          url: "https://www.babelstone.co.uk/Unicode/whatisit.html",
        },
        {
          title: "Code Image 1",
          url: "https://ray.so",
        },
        {
          title: "Code Image 2",
          url: "https://codeimg.io",
        },
      ],
    },
    {
      title: "Convertor",
      url: "#",
      icon: Combine,
      items: [
        {
          title: "Time",
          url: "https://www.epochconverter.com",
        },
        {
          title: "SVG Crop",
          url: "https://svgcrop.com",
        },
        {
          title: "Image Upscaler",
          url: "https://imgupscaler.com",
        },
        {
          title: "Image Remove Background",
          url: "https://www.remove.bg/upload",
        },
        {
          title: "Remove Background",
          url: "https://www.erase.bg/ru/upload",
        },
        {
          title: "Multi Convertor",
          url: "https://123apps.com/ru",
        },
        {
          title: "Multi Convertor 2",
          url: "https://onlineconvertfree.com/ru",
        },
        {
          title: "Multi Convertor 3",
          url: "https://convert-my-image.com/ImageConverter",
        },
      ],
    },
    {
      title: "Image",
      url: "#",
      icon: Images,
      items: [
        {
          title: "Free Video",
          url: "https://pixabay.com/ru/videos/search/abstract",
        },
        {
          title: "Free Images",
          url: "https://www.1zoom.ru",
        },
        {
          title: "Image-Editor",
          url: "https://www.online-image-editor.com/",
        },
        {
          title: "Image/Video",
          url: "https://ezgif.com",
        },
        {
          title: "Prettie Code Image",
          url: "https://carbon.now.sh",
        },
        {
          title: "Lorem Picsum",
          url: "https://picsum.photos",
        },
        {
          title: "Assets",
          url: "https://www.freepik.com/search",
        },
        {
          title: "PNG",
          url: "https://www.cleanpng.com",
        },
        {
          title: "Free PNG",
          url: "https://www.pngwing.com",
        },
      ],
    },
    {
      title: "Icons",
      url: "#",
      icon: ScanHeart,
      items: [
        {
          title: "Iconoir",
          url: "https://iconoir.com",
        },
        {
          title: "SVG/PNG (dev)",
          url: "https://techicons.dev",
        },
        {
          title: "Iconify",
          url: "https://icon-sets.iconify.design",
        },
        {
          title: "Free Svg",
          url: "https://freesvg.org",
        },
      ],
    },
    {
      title: "Formatting",
      url: "#",
      icon: NotebookPen,
      items: [
        {
          title: "Sign Document",
          url: "https://dochub.com",
        },
        {
          title: "JSON-formatter",
          url: "https://www.toptal.com/developers/json-formatter",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "docs.w3cub",
          url: "https://docs.w3cub.com",
        },
        {
          title: "Language Code",
          url: "http://www.lingoes.net/en/translator/langcode.htm",
        },
        {
          title: "Symbols hex/unicode",
          url: "https://www.toptal.com/designers/htmlarrows/symbols",
        },
        {
          title: "Cheat Sheets quickref",
          url: "https://quickref.me",
        },
        {
          title: "Cheat Sheets devhints",
          url: "https://devhints.io",
        },
        {
          title: "Cheat Sheets linuxcommand",
          url: "https://linuxcommandlibrary.com",
        },
        {
          title: "Cheat Sheets cheatography",
          url: "https://cheatography.com",
        },
        {
          title: "Media Types (mime)",
          url: "https://www.iana.org/assignments/media-types/media-types.xhtml",
        },
        {
          title: "TutorialRepublic",
          url: "https://www.tutorialrepublic.com",
        },
        {
          title: "Windows Commands",
          url: "https://www.chaynikam.info/win+r-komandi.html",
        },
      ],
    },

    {
      title: "Utils",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "chmod",
          url: "https://quickref.me/chmod",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "codebeautify",
      icon: Boxes,
      url: "https://codebeautify.org",
    },
    {
      title: "webcode.tools",
      icon: Package,
      url: "https://webcode.tools",
    },
    {
      title: "smalldev.tools",
      icon: Box,
      url: "https://smalldev.tools/",
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

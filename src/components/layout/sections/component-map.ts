interface ComponentProp {
  name: string;
  type: string;
}

interface ComponentDefinition {
  name: string;
  location: string;
  description: string;
  props: ComponentProp[];
}

export const componentMap: ComponentDefinition[] = [
  {
    name: "FlexWithImage",
    location: "src/components/layout/sections/flex-with-image.astro",
    description:
      "A flexible layout section with an image and textual content, including a heading, title, description, and a call-to-action button. The layout order can be reversed.",
    props: [
      { name: "heading", type: "string" },
      { name: "title", type: "string" },
      { name: "details", type: "string" },
      { name: "cta", type: "string" },
      { name: "ctaLink", type: "string" },
      { name: "image", type: "ImageMetadata" },
      { name: "alt", type: "string" },
      { name: "reverse", type: "boolean" },
    ],
  },
];

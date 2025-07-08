# Project Guides: A Comprehensive Overview

This document provides a comprehensive guide to understanding, setting up, configuring, and customizing this Astro project, detailing how its various components function together.

## 1. Setup Astro

To begin working with this Astro project, set up your development environment by following these steps to ensure all dependencies are correctly installed and your workspace is ready for development.

- **Install Dependencies**: Execute `pnpm install` in your terminal. This command reads the `package.json` file and installs all the necessary project dependencies, including Astro, Tailwind CSS, and other utilities.

```sh
 pnpm install
```

- **Prepare Project**: After installing dependencies, run `pnpm prepare`. This script typically handles post-installation tasks, such as generating necessary files or setting up pre-commit hooks, ensuring your project is ready for development.

```sh
 pnpm run prepare
```

- **VS Code Extensions**:
  - **Auto-Installation**: The recommended extensions are configured in the `.vscode` directory. VS Code should prompt you to install them automatically when you open the project.
  - **Manual Installation**: If auto-installation doesn't occur, you can manually search for and install these extensions from the VS Code Marketplace:
    - **Prettier**: For consistent code formatting across the project.
    - **Roo Code**: An AI-powered coding assistant that integrates with the project's AI agent.
    - **Astro Plugin**: Provides language support for Astro files (`.astro`), including syntax highlighting and IntelliSense.

- **Run Locally**:

```sh
 pnpm run dev
```

## 2. Site Configuration: Managing Your Project's Global Settings

The `src/config` folder is the central hub for all global site configurations. This structured approach ensures that all important settings are easily accessible and manageable in one place.

- **Location**: All configuration files, such as `site.ts`, `nav-menu.ts`, and `footer-menu.ts`, are located within the [`src/config`](src/config) directory.
- **Purpose**: These files define various aspects of your website, including:
  - **Site Metadata**: Title, description, author information, and other SEO-related settings.
  - **Navigation Menus**: Structure and links for your main navigation and footer menus.
  - **Global Constants**: Any other constants or settings that are used across the application.
- **How it Works**: By centralizing these configurations, you can easily update global settings without having to search through multiple files, promoting consistency and maintainability.

## 3. Styles Customization

This project leverages [Shadcn UI](https://ui.shadcn.com/) for its robust component library and [Tailwind CSS](https://tailwindcss.com/) for efficient utility-first styling. Understanding how to customize these will allow you to control the project's visual identity.

- **Color Customization with CSS Variables**:
  - **Mechanism**: Shadcn UI components and the overall theme utilize CSS variables for defining colors. This allows for easy and consistent color changes across the entire application.
  - **Location**: To update the primary colors, background colors, and other theme-related variables, modify the definitions within the [`src/styles/global.css`](src/styles/global.css) file. Look for `:root` or specific theme selectors where these variables are declared.
  - **Benefit**: Changing a CSS variable here will automatically update all instances where that variable is used, providing a powerful way to manage your color palette.
- **Tailwind Class Overrides**:
  - **Approach**: Tailwind CSS encourages a utility-first approach, where styles are applied directly in your markup using utility classes.
  - **Customization**: If you need to override default Tailwind classes or add custom utility classes, you can extend Tailwind's configuration. This typically involves modifying your `tailwind.config.mjs` file to add custom themes, plugins, or extend existing utilities.
  - **Best Practice**: For component-specific styling, prefer using existing Tailwind classes or creating new components that encapsulate specific styles, rather than directly modifying core Tailwind files.

## 4. AI Agent (Roo Code)

This project integrates with Roo Code, an AI-powered coding assistant designed to streamline your development workflow.

- **Current Agent**: The primary AI agent currently integrated into this project is Roo Code. It offers features such as agent modes, sub-task creation, automatic mode switching, and MCP integration. In the future, this project will support configurations for various AI agents, such as `gemini-cli` and `clie`, allowing for greater flexibility and integration with different AI models.
- **Roo Modes for Agent Fine-tuning**:
  - **Location**: Roo Code's operational modes and their underlying prompts are stored in the `.roomodes` directory.
  - **Customization**: You can fine-tune the agent's behavior, responses, and specific functionalities by editing the files within this directory. This allows you to tailor the AI agent to your project's specific needs and coding conventions, making it an even more powerful tool for development.
  - **How it Works**: Each file in `.roomodes` typically defines a "mode" or a specific set of instructions and prompts that guide the AI agent's responses in different contexts. By modifying these, you can refine the agent's understanding and output.
  - **Important Note**: If the Roo modes are not showing up, make sure `.roomodes` auto-formatting is set to YAML. Sometimes the document formatter changes the format of `.roomodes`.

### Available Roo Modes

Here are the currently available Roo modes that you can use to fine-tune the AI agent:

- **🔗Internal Links (`internal-links`)**:
  - **Purpose**: Generates a JSON file of internal links from the Astro site's sitemap.
  - **When to Use**: Use this mode to generate a list of internal links for the Astro project. This is useful for tasks that require knowledge of the site's structure, like creating internal link suggestions or navigation menus.

- **✍️ Blogging Mode (`blogging-mode`)**:
  - **Purpose**: Creates clear, SEO-optimized Markdown documents for websites and blogs.
  - **When to Use**: Utilize this mode to generate new blog posts for the Astro website, providing a title, structure, and keywords.

- **🏛️ Blog Architect (`blog-structure-generator`)**:
  - **Purpose**: Helps plan high-performing, SEO-optimized blog posts by generating a content plan.
  - **When to Use**: Employ this mode when developing the structure or model for a blog post.

- **🧭 Component Mapper (`component-mapper`)**:
  - **Purpose**: Analyzes components in `src/components/layout/sections` and creates a map in `src/components/layout/sections/component-map.ts`.
  - **When to Use**: Use this mode to create or update the component map for the project. This map is used by AI agents to dynamically generate layouts and sections.

- **🖼️ Image Downloader (`unsplash-downloader`)**:
  - **Purpose**: Finds and downloads images from Unsplash using the `unsplash` MCP server.
  - **When to Use**: Use this mode when you need to download images from Unsplash for blog posts, website assets, or any other purpose.

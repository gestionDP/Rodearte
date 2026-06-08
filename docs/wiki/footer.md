# Footer
The `Footer` component serves as the terminal section of the Rodearte landing page, providing structural navigation, contact information, social media links, and brand identification. It utilizes a responsive grid layout and implements a conditional logo display strategy based on the viewport size.

## Data Configuration

The component's content is managed through a centralized configuration object and a constant for external integration.

### WhatsApp Integration
A global constant `WHATSAPP_URL` is defined to centralize the link to the WhatsApp API [src/components/sections/Footer.tsx:4-4](). This ensures consistency between the navigation links and the specific contact section.

### Link Schema (`footerLinks`)
The `footerLinks` object organizes the footer content into three distinct arrays [src/components/sections/Footer.tsx:6-21]():

| Category | Description | Fields |
| :--- | :--- | :--- |
| `navegacion` | Internal and external site navigation. | `href`, `label`, `external` |
| `contacto` | Direct communication channels. | `label`, `value`, `href` |
| `redes` | Social media profiles. | `name`, `href`, `icon` |

## Implementation Details

### Responsive Grid Layout
The footer is structured using a Tailwind CSS grid that adapts to different screen sizes [src/components/sections/Footer.tsx:27-27]():
*   **Mobile:** 1 column (`grid-cols-1`).
*   **Medium Screens:** 2 columns (`md:grid-cols-2`).
*   **Large Screens:** 4 columns (`lg:grid-cols-4`).

### Logo Swap Logic
The component implements a breakpoint-specific logo selection to optimize visual balance across devices [src/components/sections/Footer.tsx:31-45]():

*   **Mobile (< 768px):** Displays `/logos/6.svg`. This variant is styled with `md:hidden` and a height of 32 (`h-32`) [src/components/sections/Footer.tsx:31-37]().
*   **Desktop (≥ 768px):** Displays `/logos/1.svg`. This variant is hidden on mobile via `hidden` and shown on desktop via `md:block`, with a fixed height of 180px [src/components/sections/Footer.tsx:39-45]().

### Security and Navigation
For external links (where `link.external` is true or for the contact items), the component enforces security best practices by applying `target="_blank"` and `rel="noopener noreferrer"` attributes [src/components/sections/Footer.tsx:61-62, 81-82]().

## Architecture Diagrams

### Component Data Flow
This diagram illustrates how the `footerLinks` configuration is mapped to the JSX structure.

```mermaid
graph TD
    ["footerLinks (Object)"] --> ["navegacion (Array)"]
    ["footerLinks (Object)"] --> ["contacto (Array)"]
    ["footerLinks (Object)"] --> ["redes (Array)"]

    ["navegacion (Array)"] -- "map()" --> NavItems["Link Components"]
    ["contacto (Array)"] -- "map()" --> ContactItems["Link + Span Components"]
    
    NavItems --> ["Footer Grid Column 2"]
    ContactItems --> ["Footer Grid Column 3"]
    
    subgraph SecurityAttributes ["External Link Security"]
        direction LR
        ["target='_blank'"]
        ["rel='noopener noreferrer'"]
    end
    
    NavItems -.-> SecurityAttributes
    ContactItems -.-> SecurityAttributes
```
**Sources:** [src/components/sections/Footer.tsx:6-21](), [src/components/sections/Footer.tsx:57-68](), [src/components/sections/Footer.tsx:77-90]()

### Visual Asset Logic
This diagram bridges the viewport state to the specific SVG assets used.

```mermaid
graph TD
    subgraph ViewportState ["Viewport Detection (Tailwind Classes)"]
        Mobile["Mobile (< md)"]
        Desktop["Desktop (>= md)"]
    end

    subgraph LogoAssets ["public/logos/"]
        Logo6["6.svg (Mobile Logo)"]
        Logo1["1.svg (Desktop Logo)"]
    end

    Mobile -->| "md:hidden" | Logo6
    Desktop -->| "hidden md:block" | Logo1

    Logo6 --> FooterUI["Footer Component"]
    Logo1 --> FooterUI
```
**Sources:** [src/components/sections/Footer.tsx:31-45](), [public/logos/1.svg:1-3](), [public/logos/6.svg:1-3]()

## Technical Summary Table

| Feature | Implementation |
| :--- | :--- |
| **Container** | `footer` tag with `border-t` and `bg-background` [src/components/sections/Footer.tsx:25-25]() |
| **Logo Assets** | `/logos/6.svg` (Mobile), `/logos/1.svg` (Desktop) [src/components/sections/Footer.tsx:32, 40]() |
| **Styling** | Tailwind CSS with `font-sans` for body text [src/components/sections/Footer.tsx:47, 63, 83]() |
| **Dynamic Date** | `new Date().getFullYear()` for copyright notice [src/components/sections/Footer.tsx:96-96]() |
| **Hover States** | `transition-colors hover:text-foreground` on links [src/components/sections/Footer.tsx:63, 83]() |

**Sources:**
* [src/components/sections/Footer.tsx:1-104]()
* [public/logos/1.svg:1-3]()
* [public/logos/6.svg:1-3]()

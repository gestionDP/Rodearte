# UI Component Library

The Rodearte UI library is built upon **shadcn/ui** and **Radix UI**, providing a set of accessible, themeable, and reusable primitives. These components are located in `src/components/ui/` and utilize `class-variance-authority` (CVA) for managing style variants and `tailwind-merge` for class composition.

The library follows a "copy-and-paste" philosophy where components are owned by the project, allowing for granular customization of the design system's tokens and behaviors [components.json:1-20]().

### Component Architecture

The following diagram illustrates how the UI library bridges the gap between Radix UI primitives and the Rodearte design system.

**UI Primitive Composition**
```mermaid
graph TD
    subgraph "Radix UI (Primitives)"
        ["@radix-ui/react-slot"]
        ["@radix-ui/react-dialog"]
    end

    subgraph "Rodearte UI Components (Code Entity Space)"
        ["Button (src/components/ui/button.tsx)"]
        ["Sheet (src/components/ui/sheet.tsx)"]
    end

    subgraph "Styling Utilities"
        ["cva (class-variance-authority)"]
        ["cn (src/lib/utils.ts)"]
    end

    ["@radix-ui/react-slot"] --> ["Button (src/components/ui/button.tsx)"]
    ["@radix-ui/react-dialog"] --> ["Sheet (src/components/ui/sheet.tsx)"]
    ["cva (class-variance-authority)"] --> ["Button (src/components/ui/button.tsx)"]
    ["cva (class-variance-authority)"] --> ["Sheet (src/components/ui/sheet.tsx)"]
    ["cn (src/lib/utils.ts)"] --> ["Button (src/components/ui/button.tsx)"]
    ["cn (src/lib/utils.ts)"] --> ["Sheet (src/components/ui/sheet.tsx)"]
```
**Sources:** [src/components/ui/button.tsx:1-8](), [src/components/ui/sheet.tsx:1-9]()

---

### Core Components

The library is categorized into foundational primitives used across all sections of the landing page.

#### Button Component
The `Button` component is the primary interaction element. It supports multiple visual variants (e.g., `default`, `outline`, `ghost`) and sizes defined via a `buttonVariants` CVA object [src/components/ui/button.tsx:7-34](). It uses the `Slot` primitive from Radix UI to support the `asChild` pattern, allowing the button styles to be applied to other elements like links or custom components [src/components/ui/button.tsx:44-46]().

For details, see [Button Component](#3.1).

#### Sheet (Drawer) Component
The `Sheet` component provides an overlay panel (drawer) that slides in from the edges of the screen. It is built on top of the `@radix-ui/react-dialog` primitive [src/components/ui/sheet.tsx:4-10](). In the Rodearte project, it is primarily used for the mobile navigation menu, supporting different entry directions via the `side` variant (top, bottom, left, right) [src/components/ui/sheet.tsx:37-44]().

For details, see [Sheet (Drawer) Component](#3.2).

---

### Configuration and Utilities

The UI library is integrated into the project via `components.json`, which defines the path aliases and Tailwind CSS configuration [components.json:6-19](). 

**Component Mapping to Code Entities**
| Component | Primary File | Key Dependencies |
| :--- | :--- | :--- |
| **Button** | `src/components/ui/button.tsx` | `class-variance-authority`, `@radix-ui/react-slot` |
| **Sheet** | `src/components/ui/sheet.tsx` | `@radix-ui/react-dialog`, `lucide-react` |
| **Styling** | `src/lib/utils.ts` | `clsx`, `tailwind-merge` |

**Library Structure Diagram**
```mermaid
classDiagram
    class "buttonVariants" {
        +default
        +destructive
        +outline
        +secondary
        +ghost
        +link
    }
    class "sheetVariants" {
        +top
        +bottom
        +left
        +right
    }
    class "cn utility" {
        +inputs: ClassValue[]
    }

    "Button" ..> "buttonVariants" : uses
    "SheetContent" ..> "sheetVariants" : uses
    "Button" ..> "cn utility" : merges classes
    "Sheet" ..> "cn utility" : merges classes
```
**Sources:** [src/components/ui/button.tsx:7-34](), [src/components/ui/sheet.tsx:33-50](), [components.json:13-19]()

---

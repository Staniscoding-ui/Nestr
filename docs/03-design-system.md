# Design System

can be found in
../client/src/assets/misc_files/Design_System/

## 01 · COLOR TOKENS
Authoritative tokens mapped to roles and hex values. All text color combinations are checked against the background for contrast, meeting or exceeding the WCAG minimum of 4.5:1.

* **`--color-primary`**: `#7C3AED` — used for links, buttons, and active states
* **`--color-accent`**: `#F59E0B` — used for highlights and rewards
* **`--color-bg`**: `#0F172A` — used for page backgrounds
* **`--color-surface`**: `#1E2933` — used for cards and panels
* **`--color-text`**: `#F8FAFC` — used for body text

## 02 · TYPOGRAPHY
Font Family: Inter. Standardized sizes used across the interface:

* **Heading**: 24 px, Bold
* **Body**: 16 px, Regular
* **Small**: 14 px, Regular

## 03 · SPACING
A strict 8 px base unit, Tailwind-style scale. Random spacing per component is prohibited.

* **`--space-1`**: 8 px (tight)
* **`--space-2`**: 16 px (comfortable)
* **`edge`**: 24 px (screen edge)
* **`--space-4`**: 32 px (standard section)
* **`--space-6`**: 48 px (large gap)
* **`--space-8`**: 64 px (section break)

## 04 · COMPONENT TAXONOMY
Atomic Design layers and exact component props.

### Atoms
* **Button**
  * Props: `variant: "primary" | "secondary" | "ghost"`, `onClick: () => void`, `children: ReactNode`, `disabled?: boolean`
* **Input**
  * Props: `type: "text" | "number" | "date"`, `value: string`, `placeholder: string`, `onChange: (val: string) => void`
* **TimerBadge**
  * Props: `time: string` (e.g., `"02:34:10"`), `status: "active" | "expired" | "pending"`
* **ProgressBar**
  * Props: `value: number`, `max: number`, `label?: string`
* **Icon**
  * Props: `name: string`, `size: 16 | 20 | 24 | 32`

### Molecules
* **EggCard**
  * Props: `eggId: string`, `name: string`, `timer: string`, `status: string`, `onClick`
* **HatchlingCard**
  * Props: `hatchlingId: string`, `name: string`, `level: number`, `species: string`, `onClick`
* **TaskFormField**
  * Props: `label: string`, `type: string`, `value: string`, `onChange`, `error?`
* **NavItem**
  * Props: `label: string`, `icon`, `href`, `active?: boolean`

### Organisms
* **Header**: `title: string`, `navigation: NavItem[]`
* **Footer**: `links: {label, href}[]`
* **EggGrid / HatchlingList**: `eggs: EggCard[]`, `columns: 1 | 3 | 4`
* **TaskForm / PenCustomizer**: `fields: TaskFormField[]`, `onSubmit`, `rewards`

### Pages / Layout
* **AppLayout**: Wraps all pages with Header + Nav + Footer. Applied to `HomePage`, `TaskPage`, `PenPage`, and `NestPage`.

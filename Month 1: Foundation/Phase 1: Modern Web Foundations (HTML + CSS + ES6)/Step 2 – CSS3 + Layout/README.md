# Step 2 – CSS3 + Layout (Days 3 – 5)

## Learning Objectives

### 1. CSS Box Model & Positioning
Master the fundamental building blocks of CSS layout:
- **Box Model**: content, padding, border, margin
- `box-sizing: border-box` vs `content-box`
- **Positioning**: static, relative, absolute, fixed, sticky
- `z-index` and stacking contexts
- Display properties (block, inline, inline-block, none)

### 2. Modern Layout Systems

#### Flexbox
- Flex container properties: `display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`
- Flex item properties: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`
- Common patterns: centering, navigation bars, card layouts

#### CSS Grid
- Grid container: `display: grid`, `grid-template-columns`, `grid-template-rows`
- Grid placement: `grid-column`, `grid-row`, `grid-area`
- Responsive grids: `repeat()`, `minmax()`, `auto-fit`, `auto-fill`
- Grid gaps and alignment

### 3. Interactive States with Pseudo-classes
Learn to create interactive experiences:
- `:hover` - Mouse hover states
- `:focus` - Keyboard focus for accessibility
- `:active` - Active/clicked state
- `:visited` - Visited links
- `:nth-child()`, `:first-child`, `:last-child`
- `:not()` - Negation pseudo-class

### 4. CSS Transitions & Animations

#### Transitions
- `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`
- Shorthand syntax
- Common use cases: hover effects, smooth state changes

#### Animations
- `@keyframes` syntax
- `animation` properties: name, duration, timing-function, iteration-count
- Creating engaging micro-interactions

### 5. Responsive Design
Build layouts that work on all screen sizes:
- **Media Queries**: `@media` syntax, breakpoints
- Mobile-first vs Desktop-first approach
- Common breakpoints: 320px, 768px, 1024px, 1440px
- Responsive units: `rem`, `em`, `%`, `vw`, `vh`
- Fluid typography and spacing

### 6. CSS Custom Properties (Variables)
Use variables for maintainable stylesheets:
- Declaring variables: `--primary-color: #3498db;`
- Using variables: `color: var(--primary-color);`
- Scope and inheritance
- Dynamic theming

## Practice Project: Styled Portfolio Page

**Rebuild your HTML portfolio** from Step 1 with complete CSS styling.

### Requirements:

#### Layout
- ✅ Implement responsive **Grid layout** for projects section
- ✅ Use **Flexbox** for header, navigation, and card components
- ✅ Ensure proper spacing using the box model
- ✅ Mobile-first responsive design with media queries

#### Styling
- ✅ Define **CSS variables** for:
  - Color palette (primary, secondary, background, text colors)
  - Font sizes (headings, body, small text)
  - Spacing scale (margins, padding)
- ✅ Implement hover animations on:
  - Navigation links
  - Project cards
  - Buttons
  - Social links

#### Responsive Behavior
- ✅ **Mobile** (< 768px): Single column layout
- ✅ **Tablet** (768px - 1024px): 2-column grid
- ✅ **Desktop** (> 1024px): 3-column grid with enhanced spacing

#### Interactive Elements
- ✅ Smooth transitions on all interactive elements
- ✅ Focus states for keyboard navigation
- ✅ Hover effects that enhance user experience
- ✅ Form input styling with focus states

### Key Points to Demonstrate:
- Clean, organized CSS structure
- Proper use of Flexbox and Grid
- Smooth, performant animations
- Fully responsive across all devices
- Accessible interactive states
- Maintainable code with CSS variables

## 🧠 Goal
By the end of this step, you should be able to **look at any simple design mockup and code it with pure CSS**, understanding exactly which layout technique to use and how to make it responsive.

### Resources for Practice:
- [Flexbox Froggy](https://flexboxfroggy.com/) - Learn Flexbox through games
- [Grid Garden](https://cssgridgarden.com/) - Learn CSS Grid through games
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

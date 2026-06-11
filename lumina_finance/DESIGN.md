---
name: Lumina Finance
colors:
  surface: '#f9f9fe'
  surface-dim: '#d9dade'
  surface-bright: '#f9f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f8'
  surface-container: '#ededf2'
  surface-container-high: '#e8e8ed'
  surface-container-highest: '#e2e2e7'
  on-surface: '#1a1c1f'
  on-surface-variant: '#464554'
  inverse-surface: '#2e3034'
  inverse-on-surface: '#f0f0f5'
  outline: '#777586'
  outline-variant: '#c7c4d7'
  surface-tint: '#4d4ad5'
  primary: '#4441cc'
  on-primary: '#ffffff'
  primary-container: '#5e5ce6'
  on-primary-container: '#f4f1ff'
  inverse-primary: '#c2c1ff'
  secondary: '#0058bc'
  on-secondary: '#ffffff'
  secondary-container: '#0070eb'
  on-secondary-container: '#fefcff'
  tertiary: '#8423b3'
  on-tertiary: '#ffffff'
  tertiary-container: '#9f42ce'
  on-tertiary-container: '#feeeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c2c1ff'
  on-primary-fixed: '#0c006b'
  on-primary-fixed-variant: '#332dbc'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#f6d9ff'
  tertiary-fixed-dim: '#e8b3ff'
  on-tertiary-fixed: '#310048'
  on-tertiary-fixed-variant: '#7201a2'
  background: '#f9f9fe'
  on-background: '#1a1c1f'
  surface-variant: '#e2e2e7'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  display-currency:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system is built for the next generation of personal finance, blending technical precision with an inviting, modern aesthetic. The brand personality is **progressive, reliable, and fluid**. It moves away from the cold, rigid structures of traditional banking toward a more expressive and approachable digital experience.

The visual style is a hybrid of **Corporate Modern** and **Glassmorphism**. It utilizes vibrant gradients to create energy and focal points, while maintaining a clean "light mode" foundation for maximum legibility of financial data. The emotional response should be one of confidence and ease—complex data is softened by large radii, airy whitespace, and subtle tactile depth.

## Colors

The palette is anchored by a **Vibrant Indigo-to-Violet gradient** that serves as the primary brand identifier. This gradient is used for high-impact surfaces like balance cards, call-to-action buttons, and active state indicators.

- **Primary & Secondary:** A range of electric blues and purples emphasize movement and growth.
- **Surface & Background:** A multi-layered neutral system uses cool grays and off-whites to distinguish between the background and elevated containers.
- **Functional Colors:** 
    - **Success:** A bright, high-contrast green for positive cash flow.
    - **Error:** A soft but clear coral-red for expenses or alerts.
- **Glassmorphism:** Semi-transparent white overlays (10-20% opacity) with backdrop blurs (20px-40px) are used to create depth on top of gradient backgrounds.

## Typography

The typography system prioritizes clarity and a "tech-forward" feel. **Hanken Grotesk** is used for headlines and currency displays to provide a sharp, contemporary edge. **Manrope** handles body text and UI labels, offering excellent legibility at small sizes with a friendly, balanced tone.

- **Currency Treatment:** Large balance displays use `display-currency` with tight letter spacing to feel impactful and secure.
- **Hierarchy:** Use weight over color to establish hierarchy. Sub-labels should utilize a lower opacity (60%) rather than a different font weight where possible.
- **Scaling:** For mobile devices, headlines scale down slightly to maintain a tight, compact layout without sacrificing the "bold" brand feel.

## Layout & Spacing

This design system employs a **Fluid Grid** model with a base unit of **4px**. 

- **Mobile:** Uses a 4-column grid with 16px gutters and 20px side margins. 
- **Desktop:** Scales to a 12-column centered layout with a max-width of 1200px.
- **Rhythm:** Vertical spacing relies on a clear hierarchy of 8px, 16px, and 24px increments. Large content blocks (like the primary balance card) should be separated by 32px to provide breathing room.
- **Safe Areas:** Components like the Bottom Navigation bar or Floating Action Buttons must respect device-specific safe areas while maintaining a persistent 12px margin from the nearest container edge.

## Elevation & Depth

Visual hierarchy is achieved through a combination of **Tonal Layering** and **Ambient Shadows**.

1.  **Level 0 (Background):** Solid off-white or the very base of a gradient.
2.  **Level 1 (Cards/Containers):** Pure white background with an extremely soft, diffused shadow (`y: 4px, blur: 20px, opacity: 0.05`).
3.  **Level 2 (Glass Layers):** Applied to elements sitting *inside* or *over* gradient areas. These use a white fill at 15% opacity with a 30px background blur and a 1px inner border (white, 20% opacity) to define the edge.
4.  **Level 3 (Interactive):** Active buttons or focused inputs receive a slightly more pronounced shadow with a hint of the primary color tint (`shadow-color: rgba(94, 92, 230, 0.15)`).

## Shapes

The shape language is defined by **Pill-shaped (3)** geometry. This high degree of roundedness communicates modernity and approachability, contrasting with the "seriousness" usually associated with finance.

- **Primary Cards:** Use a 24px to 32px radius (`rounded-xl` or larger) to create a soft, friendly container.
- **Buttons:** Utilize full pill-shapes (stadium buttons) for primary actions.
- **Icons:** Icons must be thin-stroke (1.5px or 2px) with slightly rounded terminals to match the container language. Avoid sharp corners in any custom iconography.

## Components

- **Buttons:** Primary buttons use the brand gradient with white text. Secondary buttons use a light version of the primary color (10% opacity) with tinted text. All buttons should have a minimum height of 48px for touch targets.
- **Quick Action Chips:** Square-ish containers with high roundedness (16px+). Icons should be centered, utilizing a soft colored background that corresponds to the action type.
- **Transaction Lists:** Clean rows with no horizontal dividers. Use vertical spacing and subtle background shifts on hover/tap to define boundaries. Icons for transactions should be contained within a 40px rounded-lg box.
- **Cards:** The "Balance Card" is the centerpiece. It should feature a vibrant gradient, glassmorphism action buttons inside the card, and clear, high-contrast typography.
- **Input Fields:** Fields should be borderless with a light gray background (`neutral_color_hex`), using a 16px radius. On focus, the field should gain a 1.5px primary-colored border.
- **Navigation:** A docked bottom navigation bar with a glassmorphism background and thin-stroke icons. The active state is indicated by a color shift and a subtle dot or bar below the icon.
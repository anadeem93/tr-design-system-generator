# 🎨 Design System Generator

**Autonomous AI-powered design system creation from product ideas to production-ready component libraries.**

> Built by [Technology Rivers](https://technologyrivers.com) • Powered by CrewAI • Multi-agent autonomous design system generation

Transform product concepts into complete design systems with 24+ production-ready React components, comprehensive documentation, automated testing, and professional build pipelines.

---

## ✨ What It Does

**From this:**
```json
{
  "product_idea": "A modern analytics dashboard for e-commerce businesses",
  "target_users": ["B2B", "enterprise"],
  "brand_traits": ["modern", "professional", "minimal"],
  "platforms": ["dashboard", "web"]
}
```

**To this:**
- 🎨 **24 Design Tokens** (colors, typography, spacing, shadows)
- ⚛️ **24+ React Components** with TypeScript interfaces
- 📖 **Interactive Storybook** documentation
- 🧪 **Automated Jest Tests** with coverage
- 📦 **Professional Build Pipeline** (Rollup, Vite, Tailwind)
- 🚀 **Production-ready Component Library**

---

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 16+ (for component development)
- Google Cloud account (for deployment)
- API Key for AI models (OpenAI, Anthropic, or Gemini)

### Installation

```bash
# Clone the repository
git clone https://github.com/anadeem93/tr-design-system-generator.git
cd tr-design-system-generator

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env and add your API keys:
# OPENAI_API_KEY=your-key-here
# or
# ANTHROPIC_API_KEY=your-key-here
# or
# GEMINI_API_KEY=your-key-here

# The system is ready to use!
```

### Generate Your First Design System

```python
from main import DesignSystemGenerator
from models import DesignSystemInput, TargetUser, BrandTrait, Platform

# Define your product
input_data = DesignSystemInput(
    product_idea="A modern e-commerce marketplace connecting buyers and sellers",
    target_users=[TargetUser.B2C, TargetUser.B2B],
    brand_traits=[BrandTrait.MODERN, BrandTrait.PLAYFUL],
    platforms=[Platform.WEB, Platform.MOBILE]
)

# Generate complete design system
generator = DesignSystemGenerator()
result = generator.generate_design_system(input_data)

print(f"Generated {len(result.component_library.components)} components!")
# Output saved as JSON + downloadable component library
```

### Web Interface

```bash
# Start the web application
uvicorn web.app:app --reload --host 0.0.0.0 --port 8000

# Open http://localhost:8000
# Use the interface to generate design systems visually
```

### Live Demo

🌐 **Live Service**: [https://design-system-agent-gcvncybjua-uc.a.run.app](https://design-system-agent-gcvncybjua-uc.a.run.app)

The service is deployed on Google Cloud Run and ready to use!

---

## 🏗️ Architecture

### Multi-Agent System Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ Design Strategist│ -> │Visual Identity   │ -> │Component        │
│ Agent            │    │Agent             │    │Architect Agent  │
│                 │    │                  │    │                 │
│ • Philosophy     │    │ • Color System   │    │ • Component     │
│ • Density        │    │ • Typography     │    │   Inventory     │
│ • Clarity        │    │ • Spacing        │    │ • Specifications │
│ • Warmth         │    │ • Shadows        │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                          │
                                                          ▼
┌─────────────────────────────────────────────────────────┐
│ Component Library Generator                            │
│                                                         │
│ • React Components with TypeScript                      │
│ • Storybook Documentation                               │
│ • Jest Test Suite                                       │
│ • Build Configuration                                   │
│ • Professional Documentation                            │
└─────────────────────────────────────────────────────────┘
```

### Core Components

#### 🧠 **Design Strategist Agent**
- Analyzes product requirements and target users
- Defines design philosophy (utility-first vs component-first)
- Sets UI density and interaction patterns
- Determines accessibility and scalability requirements

#### 🎨 **Visual Identity Agent**
- Generates comprehensive color systems (primary, neutral, semantic)
- Creates typography scales and hierarchies
- Defines spacing systems (4pt/6pt/8pt grids)
- Produces shadow and border radius systems

#### 🏗️ **Component Architect Agent**
- Designs complete component inventories (24+ components)
- Defines component variants, states, and compositions
- Ensures accessibility compliance
- Adapts component selection based on product type

#### 📚 **Component Library Generator**
- Produces production-ready React components
- Generates TypeScript interfaces and prop validation
- Creates Storybook interactive documentation
- Builds Jest test suites with coverage
- Configures professional build pipelines

---

## 📋 API Reference

### Core Classes

#### `DesignSystemGenerator`
Main orchestrator for design system generation.

```python
class DesignSystemGenerator:
    def generate_design_system(self, input_data: DesignSystemInput) -> DesignSystemOutput:
        """Generate complete design system from product requirements."""
        pass
```

#### `DesignSystemInput`
Input specification for design system generation.

```python
class DesignSystemInput(BaseModel):
    product_idea: str          # Product description and domain
    target_users: List[TargetUser]    # B2B, B2C, Enterprise, Consumer
    brand_traits: List[BrandTrait]    # Modern, Professional, Playful, etc.
    platforms: List[Platform]         # Web, Mobile, Dashboard, Marketing
```

#### `DesignSystemOutput`
Complete generated design system.

```python
class DesignSystemOutput(BaseModel):
    input: DesignSystemInput
    principles: DesignPrinciples
    tokens: DesignTokens
    components: ComponentInventory
    component_library: ComponentLibrary
    guidelines: Dict[str, str]
    generated_at: str
```

### Enums

#### `TargetUser`
```python
class TargetUser(str, Enum):
    B2B = "B2B"
    B2C = "B2C"
    ENTERPRISE = "enterprise"
    CONSUMER = "consumer"
```

#### `BrandTrait`
```python
class BrandTrait(str, Enum):
    MODERN = "modern"
    CLINICAL = "clinical"
    PLAYFUL = "playful"
    PREMIUM = "premium"
    BOLD = "bold"
    MINIMAL = "minimal"
    WARM = "warm"
    PROFESSIONAL = "professional"
```

#### `Platform`
```python
class Platform(str, Enum):
    WEB = "web"
    MOBILE = "mobile"
    DASHBOARD = "dashboard"
    MARKETING = "marketing"
```

---

## 🧩 Component Library

### Generated Components (24+)

#### Form Components
- **Button** - Primary, secondary, tertiary, danger variants
- **Input** - Text, email, password, search, number types
- **Select** - Dropdown with keyboard navigation
- **Textarea** - Multi-line text with character counting
- **Checkbox** - Boolean selections with indeterminate state
- **Radio** - Single selections from option groups
- **DatePicker** - Calendar interface with validation
- **Switch** - Toggle component with animations

#### Feedback Components
- **Alert** - Success, warning, error, info notifications
- **Badge** - Status indicators with variants
- **Tooltip** - Contextual help with positioning
- **Modal** - Overlay dialogs with focus management
- **Progress** - Loading bars with animations
- **Skeleton** - Loading placeholders

#### Navigation Components
- **Navigation** - Horizontal/vertical with nested menus
- **Tabs** - Tabbed interfaces with variants
- **Breadcrumb** - Page hierarchy navigation
- **Pagination** - Data navigation controls

#### Layout Components
- **Card** - Content containers with variants
- **Accordion** - Collapsible content panels

#### Data Display
- **Table** - Data tables with sorting and selection
- **Avatar** - User representations with status
- **Search** - Advanced search with autocomplete

### Component Features

Each component includes:
- ✅ **TypeScript interfaces** with full prop validation
- ✅ **Accessibility support** (ARIA, keyboard navigation, screen readers)
- ✅ **Responsive design** with Tailwind CSS
- ✅ **Multiple variants** and states
- ✅ **Interactive Storybook** documentation
- ✅ **Jest unit tests** with coverage
- ✅ **Professional build setup**

---

## 🎨 Design Philosophy

### Token-First Architecture

All components are built on a comprehensive design token system:

#### Color System
- **Primary Scale**: 9 shades (50-950) for main brand colors
- **Neutral Scale**: 9 shades for backgrounds and text
- **Semantic Colors**: Success, warning, error, info variants

#### Typography Scale
- **Body Text**: 5 sizes (xs to xl) with proper line heights
- **Headings**: 6 sizes (h1-h6) with semantic hierarchy
- **UI Text**: Small text for interface elements

#### Spacing Scale
- **4pt Grid System**: 16 spacing values (space-1 to space-16)
- **Consistent Ratios**: 8px base unit with exponential scaling

### Adaptive Design Decisions

The system makes intelligent decisions based on product context:

| Product Type | Philosophy | Density | Components |
|-------------|------------|---------|------------|
| Enterprise Dashboard | utility-first | spacious | 24+ components |
| Consumer Marketplace | component-first | balanced | 23 components |
| Mobile App | component-first | dense | Optimized subset |

---

## 🧪 Testing & Quality Assurance

### Automated Test Suite
- **Jest Configuration** with TypeScript support
- **React Testing Library** for component testing
- **Jest DOM** for DOM assertions
- **Coverage Thresholds** (80% branches, functions, lines, statements)

### Test Categories
- **Unit Tests**: Component functionality and props
- **Integration Tests**: Component interactions
- **Accessibility Tests**: WCAG compliance validation
- **Visual Regression**: Storybook visual testing (future)

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode
npm run test:watch
```

---

## 📖 Storybook Documentation

### Interactive Component Documentation
- **Live Component Previews** with real-time prop editing
- **Multiple Variants** showcasing all component states
- **Usage Examples** with copy-paste code
- **Accessibility Guidelines** built into stories
- **Responsive Testing** across different screen sizes

### Storybook Features
- **Controls Addon**: Interactive prop manipulation
- **Actions Addon**: Event logging and debugging
- **Docs Addon**: Auto-generated documentation
- **Accessibility Addon**: a11y testing integration

### Accessing Documentation
```bash
npm run storybook
# Opens http://localhost:6006
```

---

## 🚀 Deployment

### Google Cloud Run (Recommended)

The project includes automated CI/CD via GitHub Actions. To set up:

1. **Create a Google Cloud Service Account:**
   ```bash
   gcloud iam service-accounts create github-actions \
     --display-name="GitHub Actions Service Account"
   
   gcloud projects add-iam-policy-binding design-system-agent \
     --member="serviceAccount:github-actions@design-system-agent.iam.gserviceaccount.com" \
     --role="roles/run.admin"
   
   gcloud iam service-accounts keys create key.json \
     --iam-account=github-actions@design-system-agent.iam.gserviceaccount.com
   ```

2. **Add GitHub Secret:**
   - Go to GitHub repository → Settings → Secrets → Actions
   - Add secret: `GCP_SA_KEY` with the contents of `key.json`

3. **Automatic Deployment:**
   - Every push to `main` branch automatically deploys to Cloud Run
   - View deployments in the Actions tab

### Manual Deployment

```bash
# Quick deploy using the deployment script
chmod +x deploy-gcloud.sh
./deploy-gcloud.sh

# Or deploy directly
gcloud run deploy design-system-agent \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 1Gi \
  --timeout 300
```

### Other Platforms

See [DEPLOYMENT_OPTIONS.md](DEPLOYMENT_OPTIONS.md) for:
- Vercel deployment
- Railway
- Render
- Fly.io
- Docker + VPS

## 📦 Build & Development

### Build Configuration
- **Rollup**: Module bundling with tree shaking
- **PostCSS**: CSS processing with Tailwind
- **TypeScript**: Type checking and compilation
- **Vite**: Fast development server (for Storybook)

### Build Scripts
```bash
# Development
npm run dev          # Rollup watch mode
npm run storybook    # Storybook dev server

# Production
npm run build        # Production build
npm run build-storybook  # Static Storybook export
```

### Package Configuration
The generated `package.json` includes:
- **ESM + CJS** dual package support
- **TypeScript declarations** (.d.ts files)
- **Tree shaking** optimization
- **Source maps** for debugging

---

## 🔧 Configuration & Customization

### Environment Variables
```bash
# OpenAI API (for future AI enhancements)
OPENAI_API_KEY=your-api-key-here

# Web server configuration
HOST=0.0.0.0
PORT=8000
```

### Customization Options
- **Design Token Modification**: Edit generated CSS variables
- **Component Styling**: Override Tailwind classes
- **Build Configuration**: Modify Rollup/Vite settings
- **Test Configuration**: Adjust Jest coverage thresholds

---

## 🐛 Troubleshooting

### Common Issues

#### Python Dependencies
```bash
# If pip install fails
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

#### Node.js Dependencies
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### Storybook Issues
```bash
# Clear Storybook cache
rm -rf node_modules/.cache/storybook
npm run storybook
```

#### Build Errors
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Check for missing dependencies
npm ls --depth=0
```

### Performance Issues
- **Large Component Libraries**: Split into smaller packages
- **Build Speed**: Use `npm run build -- --mode development`
- **Memory Usage**: Increase Node.js memory limit

### Compatibility Issues
- **Node.js Version**: Ensure Node 16+ for Vite compatibility
- **Python Version**: Requires Python 3.8+ for modern syntax
- **Browser Support**: Components support modern browsers (ES2018+)

---

## 🤝 Contributing

### Development Setup
```bash
# Fork and clone
git clone <your-fork-url>
cd design-system-agent

# Install dependencies
pip install -r requirements.txt

# Run tests
python -m pytest

# Start development
uvicorn web.app:app --reload
```

### Adding New Components
1. **Define Component Spec** in `agents/component_architect/agent.py`
2. **Implement Component Generator** in `templates/components/generator.py`
3. **Add Story Generation** for documentation
4. **Update Tests** for quality assurance
5. **Update Documentation** in README

### Code Standards
- **TypeScript**: Strict mode, no `any` types
- **Python**: Type hints, black formatting
- **React**: Functional components with hooks
- **Testing**: 80%+ coverage, accessibility testing
- **Documentation**: JSDoc comments, Storybook stories

---

## 📄 License

MIT License - Open source and free to use commercially.

---

## 🙏 Acknowledgments

Built with modern web technologies:
- **Python** for AI orchestration and generation logic
- **FastAPI** for web interface and API
- **React + TypeScript** for component generation
- **Tailwind CSS** for utility-first styling
- **Storybook** for interactive documentation
- **Jest** for comprehensive testing
- **Rollup + Vite** for professional build pipeline

---

**Transforming design system creation from weeks of work to minutes of generation.** 🚀

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Set up environment variables:**
   ```bash
   export OPENAI_API_KEY="your-openai-api-key-here"
   ```

3. **Run the web interface:**
   ```bash
   uvicorn web.app:app --reload
   ```

4. **Open your browser to** `http://localhost:8000`

## 🏗️ Architecture

### Multi-Agent System

- **🎯 Design Strategist Agent** - Defines design principles and system philosophy
- **🎨 Visual Identity Agent** - Generates color, typography, and spacing tokens
- **🧩 Component Architect Agent** - Defines component inventory and specifications

### Design Philosophy

Everything flows from **design tokens first**:

- **Colors**: Primary, secondary, semantic, and neutral scales
- **Typography**: Heading, body, and UI text scales
- **Spacing**: Consistent spacing scale (4pt/6pt/8pt systems)
- **Components**: Reusable vs contextual component decisions

## 📋 Input Parameters

- **Product Idea**: Description of your product and domain
- **Target Users**: B2B, B2C, Enterprise, Consumer
- **Brand Traits**: Modern, Clinical, Playful, Premium, Bold, Minimal, Warm, Professional
- **Platforms**: Web, Mobile, Dashboard, Marketing Site

## 🎯 Output

The system generates:

- **Design Principles**: Philosophy, density, clarity/warmth balance
- **Visual Tokens**: Colors, typography, spacing, shadows, border radius
- **Component Inventory**: Complete component specs with variants and states
- **Guidelines**: Do's and don'ts for consistent usage
- **JSON Export**: Ready for implementation in design tools and code

## 💡 Example Usage

```python
from main import DesignSystemGenerator
from models import DesignSystemInput, TargetUser, BrandTrait, Platform

# Define your product
input_data = DesignSystemInput(
    product_idea="A comprehensive analytics dashboard for e-commerce businesses",
    target_users=[TargetUser.B2B, TargetUser.ENTERPRISE],
    brand_traits=[BrandTrait.MODERN, BrandTrait.PROFESSIONAL, BrandTrait.MINIMAL],
    platforms=[Platform.DASHBOARD, Platform.WEB]
)

# Generate design system
generator = DesignSystemGenerator()
result = await generator.generate_design_system(input_data)

# Save to file
with open("my-design-system.json", "w") as f:
    json.dump(result.model_dump(), f, indent=2)
```

## 🛠️ Development

### Project Structure

```
design-system-agent/
├── agents/                          # AI agents
│   ├── design_strategist/          # Core decision-making
│   ├── visual_identity/            # Token generation
│   └── component_architect/        # Component design
├── models.py                        # Data models
├── main.py                         # Core orchestration
├── web/                            # Web interface
│   ├── app.py                      # FastAPI application
│   ├── templates/                  # HTML templates
│   └── static/                     # Static assets
├── templates/                      # Output templates
├── tests/                          # Test suite
└── requirements.txt                # Dependencies
```

### Adding New Agents

1. Create agent directory under `agents/`
2. Implement agent class with CrewAI Agent
3. Add to main `DesignSystemGenerator` class
4. Update data models if needed

## 🤖 AI-Powered Decisions

The system makes **opinionated but intelligent decisions**:

- **Enterprise/B2B**: Utility-first philosophy, spacious density
- **Consumer/Playful**: Brand-led philosophy, balanced density
- **Dashboard-only**: Denser spacing, higher clarity priority
- **Warm brands**: Warm color palettes, softer shadows
- **Minimal brands**: Cool color palettes, reduced ornamentation

## 📦 What's Included

- ✅ **Token-first architecture** - Scalable, themeable foundations
- ✅ **Accessibility built-in** - WCAG 2.1 AA compliance
- ✅ **Opinionated defaults** - No blank canvas, strong starting points
- ✅ **Multi-platform ready** - Web, mobile, dashboard considerations
- ✅ **Component philosophy** - Clear reusable vs contextual decisions
- ✅ **JSON export** - Ready for Figma, code implementation

## 🔮 Future Extensions

- **Figma Integration** - Auto-generate design libraries
- **React/Vue Components** - Auto-generated component code
- **Dark Mode** - Automatic dark theme generation
- **Brand Evolution** - Update systems without breaking changes
- **Consistency Checking** - Detect design drift over time

## 📄 License

MIT License - feel free to use, modify, and distribute.

---

---

## 📞 Support & Contact

- **Website**: [Technology Rivers](https://technologyrivers.com)
- **Repository**: [GitHub](https://github.com/anadeem93/tr-design-system-generator)
- **Issues**: [GitHub Issues](https://github.com/anadeem93/tr-design-system-generator/issues)

---

**Built by [Technology Rivers](https://technologyrivers.com) • Powered by CrewAI • Multi-agent autonomous design system generation**

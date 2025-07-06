# Kamban Mobiles - Pure HTML/CSS/JavaScript Implementation

This is a complete mobile phone and accessories e-commerce website for Kamban Mobiles, built with pure HTML, CSS, JavaScript, Tailwind CSS, and jQuery. The project fetches product data from a Laravel API and dynamically generates product detail pages.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: API integration for products, categories, and testimonials
- **Product Detail Pages**: Dynamically generated from API data
- **Interactive Components**: Hero slider, product filters, contact forms
- **SEO Optimized**: Semantic HTML and meta tags
- **Performance Optimized**: Minimal dependencies and efficient loading

## 📁 Project Structure

```
kamban-mobiles/
├── index.html              # Home page
├── about.html              # About page
├── products.html           # Products listing page
├── product-detail.html     # Dynamic product detail page
├── contact.html            # Contact page
├── 404.html                # Error page
├── css/
│   └── style.css           # Custom CSS styles
├── js/
│   ├── main.js             # Main JavaScript functionality
│   ├── components/
│   │   ├── hero-slider.js  # Hero carousel component
│   │   └── testimonials.js # Testimonials slider
│   ├── pages/
│   │   ├── products.js     # Products page functionality
│   │   ├── product-detail.js # Product detail page functionality
│   │   └── contact.js      # Contact form handling
│   └── api/
│       └── data-loader.js  # API integration functions
├── public/
│   ├── kamban_black.png    # Logo for light backgrounds
│   ├── kamban_white.png    # Logo for dark backgrounds
│   ├── ourshop.webp        # Store image
│   └── favicon.ico         # Website icon
└── README.md
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom styles and animations
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **JavaScript (ES6+)**: Modern JavaScript features
- **jQuery**: DOM manipulation and AJAX requests
- **Lucide Icons**: Beautiful icon library

## 🔧 Setup and Installation

1. **Clone or download** the project files
2. **Open** `index.html` in a web browser
3. **For development**: Use a local server (e.g., Live Server extension in VS Code)

### Local Development Server

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

## 🌐 API Integration

The application integrates with the Laravel backend at `https://admin.kambanmobiles.in/api/`:

### API Endpoints:
- `/products` - Product listings with filtering
- `/products/{slug}` - Individual product details
- `/categories` - Product categories
- `/brands` - Product brands
- `/featured-products` - Featured products
- `/testimonials` - Customer testimonials
- `/contact` - Contact form submission

### Product Detail Pages:
Product detail pages are dynamically generated using the `product-detail.html` template with URL parameters:
- Format: `product-detail.html?slug={product-slug}`
- Example: `product-detail.html?slug=samsung-galaxy-m14`

## 📱 Pages Overview

### Home Page (`index.html`)
- Hero slider with multiple images
- Featured categories grid (loaded from API)
- Featured products showcase (loaded from API)
- EMI options section
- Customer testimonials (loaded from API)
- Call-to-action sections

### About Page (`about.html`)
- Company story and mission
- Why choose us section
- Store location with Google Maps
- Contact information

### Products Page (`products.html`)
- Product filtering by category, brand, and price
- Search functionality
- Sorting options
- Responsive product grid
- Mobile-friendly filters
- All data loaded from API

### Product Detail Page (`product-detail.html`)
- Dynamic content based on product slug parameter
- Product image gallery with navigation
- Product specifications
- EMI information
- WhatsApp integration
- Similar products section
- Breadcrumb navigation

### Contact Page (`contact.html`)
- Contact form with validation
- Store information
- Google Maps integration
- Social media links

## 🎨 Design Features

- **Color Scheme**: Black (#000000) and Gold (#FFD700)
- **Typography**: Inter font family
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design with breakpoints
- **Accessibility**: Semantic HTML and keyboard navigation

## 📊 Performance Optimizations

- **API Caching**: Efficient data loading and caching
- **Lazy Loading**: Images load as needed
- **Debounced Search**: Prevents excessive API calls
- **Efficient DOM Manipulation**: jQuery for optimal performance
- **CDN Resources**: Fast loading of external libraries

## 🔍 SEO Features

- **Dynamic Meta Tags**: Generated based on product data
- **Open Graph**: Social media sharing optimization
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt Text**: Descriptive image alt attributes
- **Breadcrumb Navigation**: Clear page hierarchy

## 📱 Mobile Features

- **Touch-Friendly**: Large tap targets and gestures
- **Mobile Navigation**: Slide-out menu for mobile devices
- **Responsive Images**: Optimized for different screen sizes
- **Fast Loading**: Minimal JavaScript for mobile performance

## 🛡️ Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

## 🔧 Customization

### Colors
Update the Tailwind config in each HTML file:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#FFD700',    // Gold
                secondary: '#000000'   // Black
            }
        }
    }
}
```

### API Endpoints
Update the base URL in `js/api/data-loader.js`:
```javascript
const API_BASE_URL = 'https://admin.kambanmobiles.in/api/';
```

## 🚀 Deployment

This is a static website that can be deployed to any web server or hosting service:

- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect to Git repository
- **GitHub Pages**: Push to GitHub and enable Pages
- **Traditional Hosting**: Upload files via FTP

## 📞 Contact Information

- **Store**: 251, Usilai Road, Thirumangalam, Madurai – 625 706
- **Phone**: +91 86100 88234
- **Email**: contact@kambnmobiles.in
- **Website**: https://kambanmobiles.in

## 🔄 Migration from Next.js

This project was successfully migrated from Next.js to pure HTML/CSS/JavaScript while maintaining:

- ✅ All original functionality
- ✅ API integration
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Performance characteristics
- ✅ User experience

### Key Improvements:
- **Faster Loading**: No framework overhead
- **Better SEO**: Direct HTML content
- **Easier Deployment**: No build process required
- **Lower Hosting Costs**: Static hosting compatible
- **Simpler Maintenance**: Standard web technologies

## 📄 License

This project is proprietary to Kamban Mobiles. All rights reserved.

---

**Note**: This implementation provides the same functionality as the original Next.js version while using pure web technologies for better performance, easier deployment, and reduced complexity.
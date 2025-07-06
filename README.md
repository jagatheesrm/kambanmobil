# Kamban Mobiles - HTML/CSS/JavaScript Implementation

This is a complete redevelopment of the Kamban Mobiles Next.js project using pure HTML, CSS, JavaScript, Tailwind CSS, and jQuery.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: API integration for products, categories, and testimonials
- **Interactive Components**: Hero slider, product filters, contact forms
- **SEO Optimized**: Semantic HTML and meta tags
- **Performance Optimized**: Minimal dependencies and efficient loading

## 📁 Project Structure

```
kamban-mobiles/
├── index.html              # Home page
├── about.html              # About page
├── products.html           # Products listing page
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
│   │   └── contact.js      # Contact form handling
│   └── api/
│       └── data-loader.js  # API integration functions
├── assets/
│   └── images/             # Logo and static images
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

The application integrates with the existing Laravel backend:

- **Base URL**: `https://admin.kambanmobiles.in/api/`
- **Endpoints**:
  - `/products` - Product listings with filtering
  - `/categories` - Product categories
  - `/brands` - Product brands
  - `/featured-products` - Featured products
  - `/testimonials` - Customer testimonials
  - `/contact` - Contact form submission

## 📱 Pages Overview

### Home Page (`index.html`)
- Hero slider with multiple images
- Featured categories grid
- Featured products showcase
- EMI options section
- Customer testimonials
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

- **Lazy Loading**: Images load as needed
- **Debounced Search**: Prevents excessive API calls
- **Efficient DOM Manipulation**: jQuery for optimal performance
- **CDN Resources**: Fast loading of external libraries
- **Minified Assets**: Compressed CSS and JavaScript

## 🔍 SEO Features

- **Meta Tags**: Proper title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt Text**: Descriptive image alt attributes
- **Sitemap Ready**: Structure suitable for search engines

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
const API_BASE_URL = 'https://your-api-domain.com/api/';
```

## 📞 Contact Information

- **Store**: 251, Usilai Road, Thirumangalam, Madurai – 625 706
- **Phone**: +91 86100 88234
- **Email**: contact@kambnmobiles.in
- **Website**: https://kambanmobiles.in

## 📄 License

This project is proprietary to Kamban Mobiles. All rights reserved.

## 🤝 Contributing

This is a commercial project. For any modifications or improvements, please contact the development team.

---

**Note**: This implementation maintains the same functionality as the original Next.js version while using pure web technologies for better performance and easier deployment.
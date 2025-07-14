# Kamban Mobiles - Laravel Application

A complete mobile phone and accessories e-commerce website built with Laravel, featuring a modern design and comprehensive functionality.

## Features

- **Product Management**: Categories, brands, and products with specifications
- **Dynamic Content**: API endpoints for AJAX loading
- **Contact System**: Contact form with validation and storage
- **Testimonials**: Customer testimonials management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags and semantic HTML
- **Image Management**: File upload and storage system

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd kamban-mobiles-laravel
```

2. **Install dependencies**
```bash
composer install
```

3. **Environment setup**
```bash
cp .env.example .env
php artisan key:generate
```

4. **Database setup**
```bash
# Create database 'kamban_mobiles' in MySQL
php artisan migrate
php artisan db:seed
```

5. **Storage setup**
```bash
php artisan storage:link
```

6. **Start the development server**
```bash
php artisan serve
```

## Project Structure

### Models
- **Product**: Main product model with relationships
- **Category**: Product categories
- **Brand**: Product brands
- **Testimonial**: Customer testimonials
- **Contact**: Contact form submissions

### Controllers
- **HomeController**: Homepage and about page
- **ProductController**: Product listing and details
- **ContactController**: Contact form handling

### Views
- **layouts/app.blade.php**: Main layout template
- **home.blade.php**: Homepage with hero, categories, products
- **about.blade.php**: About page
- **products/index.blade.php**: Product listing with filters
- **products/show.blade.php**: Product detail page
- **contact.blade.php**: Contact page with form

### Key Features

#### Product Management
- Categories with images and descriptions
- Brands with logos
- Products with multiple images, specifications, EMI options
- Featured products system
- Stock management

#### Search & Filtering
- Category-based filtering
- Brand-based filtering
- Price range filtering
- Search functionality
- Sorting options

#### Contact System
- Contact form with validation
- AJAX form submission
- Contact storage in database
- Success/error handling

#### Responsive Design
- Mobile-first approach
- Tailwind CSS framework
- Custom animations and transitions
- Interactive components

## Database Schema

### Categories Table
- id, name, slug, description, image, is_active, timestamps

### Brands Table
- id, name, slug, description, logo, is_active, timestamps

### Products Table
- id, name, slug, description, price, images (JSON), category_id, brand_id
- has_emi, emi_option, is_featured, is_active, specifications (JSON)
- stock_quantity, timestamps

### Testimonials Table
- id, name, location, quote, image, is_active, sort_order, timestamps

### Contacts Table
- id, name, email, phone, message, is_read, timestamps

## API Endpoints

- `GET /api/categories` - Get all active categories
- `GET /api/brands` - Get all active brands
- `GET /api/featured-products` - Get featured products
- `GET /api/testimonials` - Get active testimonials
- `GET /api/products` - Get products with filters
- `GET /api/products/{product}` - Get single product

## Configuration

### Environment Variables
```env
APP_NAME="Kamban Mobiles"
DB_DATABASE=kamban_mobiles
# ... other standard Laravel env variables
```

### File Storage
- Product images stored in `storage/app/public/`
- Accessible via `/storage/` URL after `php artisan storage:link`

## Customization

### Adding New Products
1. Use Laravel admin panel or create via seeder
2. Upload images to storage
3. Set specifications as JSON
4. Configure EMI options

### Styling
- Main styles in `public/css/style.css`
- Tailwind configuration in layout template
- Component-specific styles in respective views

### JavaScript
- Main functionality in `public/js/main.js`
- Component scripts in `public/js/components/`
- AJAX handling with jQuery

## Deployment

1. **Production Environment**
```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

2. **Database Migration**
```bash
php artisan migrate --force
```

3. **File Permissions**
```bash
chmod -R 755 storage bootstrap/cache
```

## Contact Information

- **Store**: 251, Usilai Road, Thirumangalam, Madurai – 625 706
- **Phone**: +91 86100 88234
- **Email**: contact@kambnmobiles.in
- **Website**: https://kambanmobiles.in

## License

This project is proprietary to Kamban Mobiles. All rights reserved.
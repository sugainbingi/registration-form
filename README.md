# Student Registration Form Web Application

A complete web application for student registration built with HTML, CSS, JavaScript, jQuery, and PHP. The application features a beautiful, responsive registration form with client-side validation and server-side processing.

## Features

- ✅ Modern, responsive design with gradient styling
- ✅ Comprehensive form validation using JavaScript and jQuery
- ✅ Real-time field validation with visual feedback
- ✅ PHP backend for processing form submissions
- ✅ Formatted display of submitted information
- ✅ Data persistence (saves to JSON file)
- ✅ Mobile-friendly responsive layout

## Technologies Used

- **HTML5** - Structure and form elements
- **CSS3** - Styling with modern design (gradients, animations)
- **JavaScript** - Form interactivity
- **jQuery** - DOM manipulation and validation
- **PHP** - Server-side form processing

## Project Structure

```
wtla2/
│
├── index.html          # Main registration form
├── style.css           # Stylesheet for form and result page
├── script.js           # JavaScript/jQuery validation logic
├── process.php         # PHP backend for processing submissions
├── registrations.json  # JSON file storing submissions (auto-generated)
└── README.md          # This file
```

## Local Setup Instructions

### Prerequisites

- **XAMPP** (or any PHP-enabled web server)
- A modern web browser
- Git (for version control)

### Installation Steps

1. **Install XAMPP**
   - Download XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/)
   - Install it on your system (Windows, macOS, or Linux)

2. **Clone or Download the Project**
   ```bash
   git clone <your-repository-url>
   cd wtla2
   ```

3. **Copy Project to XAMPP htdocs Folder**
   - Navigate to your XAMPP installation directory
   - Copy the `wtla2` folder to `xampp/htdocs/` directory
   - Path should be: `xampp/htdocs/wtla2/`

4. **Start XAMPP Services**
   - Open XAMPP Control Panel
   - Start **Apache** server
   - (Optional) Start **MySQL** if you plan to use a database later

5. **Access the Application**
   - Open your web browser
   - Navigate to: `http://localhost/wtla2/`
   - Or: `http://localhost/wtla2/index.html`

## Form Fields

The registration form collects the following student information:

- **Personal Information:**
  - First Name
  - Last Name
  - Email Address
  - Phone Number
  - Date of Birth
  - Gender

- **Address Information:**
  - Street Address
  - City
  - State/Province
  - Zip/Postal Code
  - Country

- **Academic Information:**
  - Student ID
  - Course/Program
  - Year of Study

- **Emergency Contact:**
  - Emergency Contact Name
  - Emergency Contact Phone

- **Terms and Conditions:**
  - Agreement checkbox

## Validation Features

The form includes comprehensive validation:

- **Required Field Validation** - All marked fields must be filled
- **Email Validation** - Validates email format
- **Phone Number Validation** - Ensures proper phone number format
- **Date Validation** - Ensures date of birth is in the past and age is at least 13
- **Real-time Validation** - Fields are validated as user types/blurs
- **Visual Feedback** - Green border for valid fields, red for errors
- **Error Messages** - Clear error messages displayed below each field

## How It Works

1. **User fills out the form** on `index.html`
2. **JavaScript/jQuery validates** the form in real-time
3. **On submission**, form data is sent to `process.php` via POST
4. **PHP processes** the data, sanitizes inputs, and displays formatted output
5. **Data is saved** to `registrations.json` file for persistence

## GitHub Hosting Instructions

### Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `student-registration-form`)
5. Choose public or private
6. **Do NOT** initialize with README (since you already have one)
7. Click "Create repository"

### Step 2: Initialize Git and Push to GitHub

Open terminal/command prompt in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Student registration form"

# Add remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages (Optional - for Static Hosting)

**Note:** GitHub Pages only hosts static files (HTML, CSS, JS). PHP files won't execute on GitHub Pages. For full PHP functionality, you'll need:

- A PHP hosting service (like 000webhost, InfinityFree, or Heroku)
- Or use GitHub Pages for the frontend and a separate PHP backend

**For Static Hosting (Frontend Only):**

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "main" branch and "/ (root)" folder
5. Click "Save"
6. Your site will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Step 4: Host PHP Files Separately (Recommended)

Since GitHub Pages doesn't support PHP, you have two options:

**Option A: Use Free PHP Hosting**
- **000webhost**: [https://www.000webhost.com/](https://www.000webhost.com/)
- **InfinityFree**: [https://infinityfree.net/](https://infinityfree.net/)
- Upload your files via FTP or their file manager
- Update form action URL in `index.html` if needed

**Option B: Use GitHub for Code Repository Only**
- Keep your code on GitHub for version control
- Deploy PHP files to a PHP hosting service
- Link to the hosted application from your README

## Testing the Application

1. **Open the form**: Navigate to `http://localhost/wtla2/index.html`
2. **Test validation**: Try submitting empty fields to see validation
3. **Fill valid data**: Complete all required fields
4. **Submit**: Click "Submit Registration"
5. **View results**: You'll be redirected to `process.php` showing formatted data
6. **Check data file**: Open `registrations.json` to see saved submissions

## Customization

### Changing Colors
Edit the gradient colors in `style.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding Fields
1. Add HTML input in `index.html`
2. Add validation in `script.js`
3. Add processing in `process.php`

### Modifying Validation Rules
Edit the validation functions in `script.js`:
- `validateEmail()` - Email format
- `validatePhone()` - Phone number format
- `validateDateOfBirth()` - Date validation

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Notes

- All user inputs are sanitized using `htmlspecialchars()`
- Form data is validated on both client and server side
- For production use, consider:
  - Using prepared statements if connecting to a database
  - Implementing CSRF protection
  - Adding rate limiting
  - Using HTTPS

## Troubleshooting

### Form not submitting
- Check that Apache is running in XAMPP
- Verify file paths are correct
- Check browser console for JavaScript errors

### PHP not processing
- Ensure Apache server is running
- Check PHP is enabled in XAMPP
- Verify file permissions

### Styles not loading
- Check `style.css` path in `index.html`
- Clear browser cache
- Verify file exists in correct location

## License

This project is open source and available for educational purposes.

## Author

Created as part of a web development assignment.

## Support

For issues or questions, please open an issue on the GitHub repository.

---

**Happy Coding! 🚀**



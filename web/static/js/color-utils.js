/**
 * Color Utilities for displaying hex values with colored backgrounds
 */

// Calculate luminance for contrast calculation
function getLuminance(hex) {
    const rgb = hexToRgb(hex);
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
        val = val / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

// Get contrast color (black or white) for text
function getContrastColor(hex) {
    const rgb = hexToRgb(hex);
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#ffffff';
}

// Validate hex color
function isValidHex(hex) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

/**
 * Create a colored hex display element
 * @param {string} hexValue - The hex color value (e.g., "#FF5733")
 * @param {Object} options - Optional configuration
 * @param {string} options.mode - 'inline' (span) or 'block' (div), default: 'inline'
 * @param {string} options.size - 'sm', 'md', 'lg', default: 'md'
 * @param {boolean} options.showBorder - Whether to show border, default: true
 * @param {string} options.className - Additional CSS classes
 * @returns {HTMLElement} - DOM element with colored background
 */
function createColoredHex(hexValue, options = {}) {
    // Validate hex
    if (!isValidHex(hexValue)) {
        const span = document.createElement('span');
        span.textContent = hexValue;
        return span;
    }

    // Normalize hex (ensure it starts with #)
    const hex = hexValue.startsWith('#') ? hexValue : `#${hexValue}`;
    
    // Default options
    const {
        mode = 'inline',
        size = 'md',
        showBorder = true,
        className = ''
    } = options;

    // Calculate text color for contrast
    const textColor = getContrastColor(hex);

    // Size classes
    const sizeClasses = {
        sm: 'text-xs px-1.5 py-0.5',
        md: 'text-xs px-2 py-1',
        lg: 'text-sm px-2.5 py-1.5'
    };

    // Create element
    const element = document.createElement(mode === 'block' ? 'div' : 'span');
    element.className = `colored-hex font-mono rounded ${sizeClasses[size]} ${className}`;
    element.style.backgroundColor = hex;
    element.style.color = textColor;
    element.textContent = hex;
    
    if (showBorder) {
        element.style.border = `1px solid ${textColor === '#000000' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)'}`;
    }

    return element;
}

/**
 * Create colored hex as HTML string (for use in innerHTML)
 * @param {string} hexValue - The hex color value
 * @param {Object} options - Optional configuration (same as createColoredHex)
 * @returns {string} - HTML string
 */
function createColoredHexHTML(hexValue, options = {}) {
    // Validate hex
    if (!isValidHex(hexValue)) {
        return hexValue;
    }

    const hex = hexValue.startsWith('#') ? hexValue : `#${hexValue}`;
    const {
        mode = 'inline',
        size = 'md',
        showBorder = true,
        className = ''
    } = options;

    const textColor = getContrastColor(hex);
    const sizeClasses = {
        sm: 'text-xs px-1.5 py-0.5',
        md: 'text-xs px-2 py-1',
        lg: 'text-sm px-2.5 py-1.5'
    };

    const tag = mode === 'block' ? 'div' : 'span';
    const borderStyle = showBorder 
        ? `border: 1px solid ${textColor === '#000000' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)'};`
        : '';

    return `<${tag} class="colored-hex font-mono rounded ${sizeClasses[size]} ${className}" style="background-color: ${hex}; color: ${textColor}; ${borderStyle}">${hex}</${tag}>`;
}

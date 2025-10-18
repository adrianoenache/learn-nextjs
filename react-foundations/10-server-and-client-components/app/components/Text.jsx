// Indicate that this is a client component
'use client';

// Text component to render different HTML tags
export default function Text({
    children,
    tag = 'p',
    className = '',
    ...rest // other props like className
}) {

    // Dynamically set the HTML tag
    const Tag = tag;

    // Combine default and custom class names
    let defaultClass = 'text';

    // If a custom className is provided, append it
    const combinedClassName = `${defaultClass} ${className}`.trim();

    // Render the component with the specified tag and class
    return <Tag className={combinedClassName} {...rest}>{children}</Tag>;

}

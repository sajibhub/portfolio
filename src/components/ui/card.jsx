import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, variant = "default", hover = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Base styles
      "rounded-xl border text-card-foreground transition-all duration-300",
      
      // Variant styles
      {
        // Default variant
        "default": "bg-card shadow-sm",
        
        // Glass variant with backdrop blur
        "glass": "bg-white/5 backdrop-blur-md border-white/10 shadow-lg",
        
        // Elevated variant with more shadow
        "elevated": "bg-card shadow-xl",
        
        // Outlined variant with no background
        "outlined": "bg-transparent border-white/20",
        
        // Gradient variant with animated border
        "gradient": "bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border-transparent",
      }[variant],
      
      // Hover effects
      hover && "hover:shadow-xl hover:-translate-y-1 hover:border-white/20",
      
      // Custom className
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, gradient = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      gradient && "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-6 pt-0",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// New components for enhanced functionality

const CardBadge = React.forwardRef(({ className, variant = "default", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
      {
        "default": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
        "success": "bg-green-500/10 text-green-400 border border-green-500/20",
        "warning": "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
        "error": "bg-red-500/10 text-red-400 border border-red-500/20",
      }[variant],
      className
    )}
    {...props}
  />
));
CardBadge.displayName = "CardBadge";

const CardIcon = React.forwardRef(({ className, icon: Icon, size = 20, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
      className
    )}
    {...props}
  >
    <Icon className={cn("w-5 h-5 text-blue-400", className)} size={size} />
  </div>
));
CardIcon.displayName = "CardIcon";

const CardDivider = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4",
      className
    )}
    {...props}
  />
));
CardDivider.displayName = "CardDivider";

// Enhanced Card with gradient border
const GradientCard = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-xl p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x",
      className
    )}
    {...props}
  >
    <div className="relative rounded-xl bg-gray-900 p-6">
      {children}
    </div>
  </div>
));
GradientCard.displayName = "GradientCard";

// Glass Card with enhanced effects
const GlassCard = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-xl overflow-hidden",
      className
    )}
    {...props}
  >
    {/* Glass effect background */}
    <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
    
    {/* Animated gradient border */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
    
    {/* Content */}
    <div className="relative z-10 p-6">
      {children}
    </div>
  </div>
));
GlassCard.displayName = "GlassCard";

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardBadge,
  CardIcon,
  CardDivider,
  GradientCard,
  GlassCard
};
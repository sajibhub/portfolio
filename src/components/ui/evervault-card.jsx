import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-md hover:-translate-y-0.5",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 hover:shadow-lg hover:-translate-y-0.5",
        glow: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20",
        neon: "border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30",
        pill: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full hover:shadow-md",
        success: "bg-green-600 text-white hover:bg-green-700 hover:shadow-md hover:-translate-y-0.5",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600 hover:shadow-md hover:-translate-y-0.5",
        danger: "bg-red-600 text-white hover:bg-red-700 hover:shadow-md hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 rounded-full",
        xl: "h-12 rounded-lg px-10",
        xs: "h-8 rounded px-2 text-xs",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      loading: {
        true: "cursor-not-allowed opacity-70",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
      loading: false,
    },
  }
);

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  asChild = false, 
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button";
  
  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, fullWidth, loading, className }),
        loading && "relative"
      )}
      ref={ref}
      disabled={loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      
      <span className={loading ? "invisible" : "visible flex items-center gap-2"}>
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </span>
    </Comp>
  );
});

Button.displayName = "Button";

// Enhanced Button with additional features
const EnhancedButton = React.forwardRef(({ 
  className,
  variant = "default",
  size = "default",
  asChild = false,
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  ripple = false,
  pulse = false,
  badge,
  children,
  onClick,
  ...props 
}, ref) => {
  const [ripples, setRipples] = React.useState([]);
  const buttonRef = React.useRef(null);
  
  const handleClick = React.useCallback((e) => {
    if (ripple && buttonRef.current && !loading) {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      const newRipple = {
        x,
        y,
        size,
        id: Date.now()
      };
      
      setRipples([...ripples, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    }
    
    if (onClick) onClick(e);
  }, [ripples, ripple, loading, onClick]);

  return (
    <Button
      ref={(node) => {
        buttonRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      className={cn(
        "relative overflow-hidden",
        pulse && "animate-pulse",
        className
      )}
      variant={variant}
      size={size}
      asChild={asChild}
      fullWidth={fullWidth}
      loading={loading}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={handleClick}
      {...props}
    >
      {/* Ripple Effect */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute block bg-white/30 rounded-full animate-ripple"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
      
      {/* Badge */}
      {badge && !loading && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-destructive text-xs text-white">
          {badge}
        </span>
      )}
      
      {children}
    </Button>
  );
});

EnhancedButton.displayName = "EnhancedButton";

// Group of buttons
const ButtonGroup = React.forwardRef(({ 
  className,
  children,
  orientation = "horizontal",
  gap = 2,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex",
        {
          "flex-row": orientation === "horizontal",
          "flex-col": orientation === "vertical",
        },
        gap && `gap-${gap}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ButtonGroup.displayName = "ButtonGroup";

export { Button, EnhancedButton, ButtonGroup, buttonVariants };
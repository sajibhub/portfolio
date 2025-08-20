import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 hover:scale-105",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 hover:scale-105",
        outline:
          "text-foreground border-current hover:bg-accent hover:text-accent-foreground hover:scale-105",
        success:
          "border-transparent bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20 hover:scale-105",
        warning:
          "border-transparent bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20 hover:scale-105",
        info:
          "border-transparent bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 hover:scale-105",
        gradient:
          "border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:scale-105",
        glow:
          "border-transparent bg-blue-500 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105",
        neon:
          "border-blue-400 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 hover:text-blue-300 hover:shadow-[0_0_10px] hover:shadow-blue-400/50 hover:scale-105",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-1.5 text-base",
      },
      shape: {
        rounded: "rounded-full",
        pill: "rounded-full px-4",
        square: "rounded-md",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        ping: "animate-ping",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "rounded",
      animation: "none",
    },
  }
);

const Badge = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  shape, 
  animation,
  icon: Icon,
  iconPosition = "left",
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        badgeVariants({ variant, size, shape, animation }),
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-3 h-3 mr-1" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="w-3 h-3 ml-1" />
      )}
    </div>
  );
});

Badge.displayName = "Badge";

// Enhanced Badge with additional features
const EnhancedBadge = React.forwardRef(({ 
  className,
  variant = "default",
  size = "md",
  shape = "rounded",
  animation = "none",
  icon: Icon,
  iconPosition = "left",
  dot = false,
  dotColor = "bg-blue-400",
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative inline-flex items-center",
        badgeVariants({ variant, size, shape, animation }),
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn(
          "absolute -top-1 -right-1 w-2 h-2 rounded-full",
          dotColor
        )} />
      )}
      {Icon && iconPosition === "left" && (
        <Icon className="w-3 h-3 mr-1" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="w-3 h-3 ml-1" />
      )}
    </div>
  );
});

EnhancedBadge.displayName = "EnhancedBadge";

// Status Badge for online/offline indicators
const StatusBadge = React.forwardRef(({ 
  status = "online", 
  className,
  ...props 
}, ref) => {
  const statusConfig = {
    online: {
      variant: "success",
      dot: true,
      dotColor: "bg-green-400",
      children: "Online"
    },
    offline: {
      variant: "secondary",
      dot: true,
      dotColor: "bg-gray-400",
      children: "Offline"
    },
    busy: {
      variant: "warning",
      dot: true,
      dotColor: "bg-yellow-400",
      children: "Busy"
    },
    away: {
      variant: "info",
      dot: true,
      dotColor: "bg-blue-400",
      children: "Away"
    },
  };

  const config = statusConfig[status] || statusConfig.online;

  return (
    <EnhancedBadge
      ref={ref}
      variant={config.variant}
      dot={config.dot}
      dotColor={config.dotColor}
      className={cn("gap-2", className)}
      {...props}
    >
      {config.children}
    </EnhancedBadge>
  );
});

StatusBadge.displayName = "StatusBadge";

// Count Badge for notifications
const CountBadge = React.forwardRef(({ 
  count, 
  max = 99,
  className,
  ...props 
}, ref) => {
  const displayCount = count > max ? `${max}+` : count;
  
  return (
    <Badge
      ref={ref}
      variant="destructive"
      size="sm"
      shape="rounded"
      className={cn(
        "min-w-[1.25rem] h-5 flex items-center justify-center",
        className
      )}
      {...props}
    >
      {displayCount}
    </Badge>
  );
});

CountBadge.displayName = "CountBadge";

// Progress Badge for showing progress
const ProgressBadge = React.forwardRef(({ 
  progress, 
  className,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full bg-gray-800/50 border border-gray-700/50",
        className
      )}
      {...props}
    >
      <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden mr-2">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span>{progress}%</span>
    </div>
  );
});

ProgressBadge.displayName = "ProgressBadge";

export { 
  Badge, 
  badgeVariants,
  EnhancedBadge,
  StatusBadge,
  CountBadge,
  ProgressBadge
};
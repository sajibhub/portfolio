import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(({ 
  className, 
  sideOffset = 4,
  side = "top",
  align = "center",
  variant = "default",
  arrow = true,
  maxWidth = "200px",
  delayDuration = 300,
  ...props 
}, ref) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      side={side}
      align={align}
      delayDuration={delayDuration}
      className={cn(
        "z-50 overflow-hidden rounded-md px-3 py-2 text-sm shadow-md transition-all duration-200",
        {
          "bg-popover text-popover-foreground border border-border": variant === "default",
          "bg-gray-900 text-white border-gray-800": variant === "dark",
          "bg-blue-600 text-white border-blue-700": variant === "blue",
          "bg-green-600 text-white border-green-700": variant === "green",
          "bg-yellow-500 text-gray-900 border-yellow-600": variant === "yellow",
          "bg-red-600 text-white border-red-700": variant === "red",
          "bg-purple-600 text-white border-purple-700": variant === "purple",
        },
        "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      style={{ maxWidth }}
      {...props}
    >
      {props.children}
      {arrow && (
        <TooltipPrimitive.Arrow 
          className={cn(
            "fill-current",
            {
              "border-border": variant === "default",
              "border-gray-800": variant === "dark",
              "border-blue-700": variant === "blue",
              "border-green-700": variant === "green",
              "border-yellow-600": variant === "yellow",
              "border-red-700": variant === "red",
              "border-purple-700": variant === "purple",
            }
          )} 
        />
      )}
    </TooltipPrimitive.Content>
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Enhanced Tooltip with additional features
const EnhancedTooltip = React.forwardRef(({ 
  className,
  sideOffset = 4,
  side = "top",
  align = "center",
  variant = "default",
  arrow = true,
  maxWidth = "200px",
  delayDuration = 300,
  title,
  description,
  footer,
  icon,
  closeOnClick = false,
  ...props 
}, ref) => {
  return (
    <Tooltip delayDuration={delayDuration}>
      <TooltipTrigger asChild>
        {props.children}
      </TooltipTrigger>
      <TooltipContent
        ref={ref}
        sideOffset={sideOffset}
        side={side}
        align={align}
        variant={variant}
        arrow={arrow}
        maxWidth={maxWidth}
        className={cn("p-0", className)}
      >
        <div className="flex flex-col">
          {/* Header with icon and title */}
          {(title || icon) && (
            <div className="flex items-center gap-2 px-3 py-2 border-b border-current/10">
              {icon && (
                <div className="flex-shrink-0">
                  {icon}
                </div>
              )}
              {title && (
                <div className="font-semibold text-sm">
                  {title}
                </div>
              )}
            </div>
          )}
          
          {/* Main content */}
          <div className="px-3 py-2">
            {description}
          </div>
          
          {/* Footer */}
          {footer && (
            <div className="px-3 py-2 border-t border-current/10 text-xs opacity-70">
              {footer}
            </div>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
});

EnhancedTooltip.displayName = "EnhancedTooltip";

// Tooltip with rich content
const RichTooltip = React.forwardRef(({ 
  className,
  sideOffset = 4,
  side = "top",
  align = "center",
  variant = "default",
  arrow = true,
  maxWidth = "300px",
  delayDuration = 300,
  title,
  description,
  actions,
  image,
  ...props 
}, ref) => {
  return (
    <Tooltip delayDuration={delayDuration}>
      <TooltipTrigger asChild>
        {props.children}
      </TooltipTrigger>
      <TooltipContent
        ref={ref}
        sideOffset={sideOffset}
        side={side}
        align={align}
        variant={variant}
        arrow={arrow}
        maxWidth={maxWidth}
        className={cn("p-0", className)}
      >
        <div className="flex flex-col">
          {/* Header */}
          {title && (
            <div className="px-4 py-3 border-b border-current/10">
              <div className="font-semibold text-sm">
                {title}
              </div>
            </div>
          )}
          
          {/* Content area */}
          <div className="p-4">
            {/* Image */}
            {image && (
              <div className="mb-3 -mx-4 -mt-4">
                {image}
              </div>
            )}
            
            {/* Description */}
            {description && (
              <div className="text-sm mb-4">
                {description}
              </div>
            )}
            
            {/* Actions */}
            {actions && (
              <div className="flex gap-2 mt-2">
                {actions}
              </div>
            )}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
});

RichTooltip.displayName = "RichTooltip";

// Simple tooltip wrapper for easy usage
const SimpleTooltip = ({ 
  children, 
  content, 
  side = "top",
  variant = "default",
  ...props 
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent side={side} variant={variant}>
        {content}
      </TooltipContent>
    </Tooltip>
  );
};

// Tooltip with interactive content
const InteractiveTooltip = React.forwardRef(({ 
  className,
  sideOffset = 4,
  side = "top",
  align = "center",
  variant = "default",
  arrow = true,
  maxWidth = "250px",
  delayDuration = 300,
  interactive = true,
  children,
  ...props 
}, ref) => {
  return (
    <Tooltip delayDuration={delayDuration}>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent
        ref={ref}
        sideOffset={sideOffset}
        side={side}
        align={align}
        variant={variant}
        arrow={arrow}
        maxWidth={maxWidth}
        className={cn("p-0", className)}
        interactive={interactive}
      >
        {props.children}
      </TooltipContent>
    </Tooltip>
  );
});

InteractiveTooltip.displayName = "InteractiveTooltip";

export { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider,
  EnhancedTooltip,
  RichTooltip,
  SimpleTooltip,
  InteractiveTooltip
};
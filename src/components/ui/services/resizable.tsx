import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

import { cn } from '../../../../lib/utils';

export function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup>) {
  return <PanelGroup className={cn('flex w-full', className)} {...props} />;
}

export function ResizablePanel({
  className,
  ...props
}: React.ComponentProps<typeof Panel>) {
  return (
    <Panel
      className={cn('min-h-[200px] overflow-hidden', className)}
      {...props}
    />
  );
}

export function ResizableHandle({
  className,
  ...props
}: React.ComponentProps<typeof PanelResizeHandle>) {
  return (
    <PanelResizeHandle
      className={cn(
        'relative flex w-1 items-center justify-center bg-border transition-colors hover:bg-muted/50',
        className
      )}
      {...props}
    >
      <div className='h-12 w-0.5 rounded-full bg-muted-foreground' />
    </PanelResizeHandle>
  );
}

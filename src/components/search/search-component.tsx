"use client";

import {

    SearchIcon,
    LucideIcon,
} from "lucide-react";
import * as React from "react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { Skeleton } from "../ui/skeleton";

interface MenuItem {
    icon: LucideIcon;
    label: string;
    shortcut?: string;
    onClick?: () => void;
}

interface MenuGroup {
    heading: string;
    items: MenuItem[];
}

interface AppSearchProps {
    placeholder?: string;
    groups: MenuGroup[];
    emptyMessage?: string;
}

export default function SearchComponent({
    placeholder = "Type a command or search...",
    groups,
    emptyMessage = "No results found.",
}: AppSearchProps) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            <button
                className="border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-full rounded-md border px-3 py-2 text-sm  transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                onClick={() => setOpen(true)}
            >
                <span className="flex grow items-center">
                    <SearchIcon
                        className="text-muted-foreground/80 -ms-1 me-3"
                        size={16}
                        aria-hidden="true"
                    />
                    <span className="text-muted-foreground/70 font-normal">Search</span>
                </span>
                <kbd className="bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
                    ⌘K
                </kbd>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder={placeholder} />
                <CommandList>
                    <CommandEmpty>{emptyMessage}</CommandEmpty>
                    <div className="grid grid-cols-3 gap-3 p-3">
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                    {groups.map((group, groupIndex) => (
                        <React.Fragment key={group.heading}>
                            {groupIndex > 0 && <CommandSeparator />}
                            <CommandGroup heading={group.heading}>

                                {group.items.map((item, itemIndex) => {
                                    const Icon = item.icon;
                                    return (
                                        <CommandItem key={itemIndex} onSelect={item.onClick} className="cursor-pointer">
                                            <Icon size={16} className="opacity-60" aria-hidden="true" />
                                            <span>{item.label}</span>
                                            {item.shortcut && (
                                                <CommandShortcut className="justify-center">
                                                    {item.shortcut}
                                                </CommandShortcut>
                                            )}
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                        </React.Fragment>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
}

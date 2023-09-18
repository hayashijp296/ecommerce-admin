"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

interface SettingFormProps {
    initialData: Store;
}

export const SettingForm: React.FC<SettingFormProps> = ({ initialData }) => {
    return (
        <div className="flex items-center justify-between">
            <Heading title="Settings" description="Manage store preferences" />
            <Button variant="destructive" size="icon" onClick={() => {}}>
                <Trash className="h-4 w-4" />
            </Button>
        </div>
    );
};
